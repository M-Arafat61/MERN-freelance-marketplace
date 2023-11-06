import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxiosInstance = () => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log("from axios", error);
    }
  );
  return instance;
};

export default useAxiosInstance;
