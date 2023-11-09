import axios from "axios";

const instance = axios.create({
  baseURL: "https://dream-tech-server-ten.vercel.app/api/v1",
  withCredentials: true,
});

const useAxiosInstance = () => {
  instance.interceptors.response.use(
    function (response) {
      console.log("from axios", response);
      return response;
    },
    function (error) {
      console.log("from axios", error);
    }
  );
  return instance;
};

export default useAxiosInstance;
