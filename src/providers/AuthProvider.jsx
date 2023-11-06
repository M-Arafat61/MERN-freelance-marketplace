import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../authentication/config.firebase";
import useAxiosInstance from "../hooks/useAxiosInstance";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosInstance();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const info = {
    user,
    loading,
    createUser,
    userLogin,
    profileUpdate,
    logOut,
    googleLogin,
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log("current-user", currentUser);
      setLoading(false);
      if (currentUser) {
        const fetchJwt = async () => {
          try {
            const response = await axiosInstance.post("/auth/jwt", loggedUser);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        };
        fetchJwt();
      }
      // } else {
      //   const fetchLogout = async () => {
      //     try {
      //       const response = await axiosInstance.post(
      //         "/auth/logout",
      //         loggedUser
      //       );
      //       console.log(response);
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   };
      //   fetchLogout();
      // }
    });
    return () => {
      unsubscribe();
    };
  }, [axiosInstance, user?.email]);
  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
