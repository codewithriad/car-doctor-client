import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-rosy-seven.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      console.log("error tracked in interceptor", error.response);
      if (error.response.status === 401 || error.response.status === 403) {
        console.log("logout user");
        logOut();
        navigate("/login");
      }
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
