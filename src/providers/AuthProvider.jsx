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
import { axiosPublic } from "../hooks/useAxiosPublic";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      // console.log("current-user from observer", currentUser?.email);
      // console.log("current-user from user", user?.email);
      setLoading(false);
      if (currentUser) {
        const fetchJwt = async () => {
          try {
            await axiosPublic.post("/auth/jwt", loggedUser, {
              withCredentials: true,
            });
            // console.log(response.config.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchJwt();
      } else {
        const fetchLogout = async () => {
          try {
            const response = await axiosPublic.post(
              "/auth/logout",
              loggedUser,
              {
                withCredentials: true,
              }
            );
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchLogout();
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user?.email]);

  const info = {
    user,
    loading,
    createUser,
    userLogin,
    profileUpdate,
    logOut,
    googleLogin,
  };

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
