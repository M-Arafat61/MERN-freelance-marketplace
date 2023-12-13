import axios from "axios";

export const axiosPublic = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  baseURL: "https://dream-tech-server-ten.vercel.app/api/v1",
});
