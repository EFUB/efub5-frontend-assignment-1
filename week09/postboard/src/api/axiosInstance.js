import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.efub-seminar.o-r.kr", 
  withCredentials: true, // ← 쿠키 기반 인증 지원 위해 꼭 필요
  headers: {
    "Content-Type": "application/json", // ← POST 등에서 필수
  },
});

export default axiosInstance;
