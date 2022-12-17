import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5001/lessons-87cfb/us-central1/api" // backend URL
});

export default axiosInstance;