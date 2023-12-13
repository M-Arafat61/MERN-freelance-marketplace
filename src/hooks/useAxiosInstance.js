import axios from "axios";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const instance = axios.create({
  // baseURL: "https://dream-tech-server-ten.vercel.app/api/v1",
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxiosInstance = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      function (response) {
        console.log("from axios", response);
        return response;
      },
      function (error) {
        console.log("error tracked in the interceptor", error);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch(error => console.log(error));
        }
      }
    );
  }, [logOut, navigate]);
  return instance;
};

export default useAxiosInstance;
