import axios from "axios";

// Tạo một instance Axios mới
const axiosInstance = axios.create({
  withCredentials: true,
});

// Thêm interceptor để gửi cookies với mỗi yêu cầu
axiosInstance.interceptors.request.use(
  (config) => {
    const token = document.cookie; // Lấy cookies từ trình duyệt
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
