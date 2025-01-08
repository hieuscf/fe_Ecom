import axios from "axios";

// Set a base URL for all API requests
const api = axios.create({
  baseURL: "http://localhost:4000/api/",  // Backend base URL
});
export const login = async (email, password) => {
  const response = await api.post("auth/login", {
    email,
    password,
  });
   const token = response.headers["authorization"]?.split(" ")[1]; // Lấy token sau 'Bearer'
  return { token, response };;
};


// Signup function
export const signup = async (username, email, password) => {
  try {
    const response = await api.post("auth/signup", { username, email, password },{withCredentials: true});
    if (response.status === 201) {
      return response.data;
    } else {
      // Handle non-200 responses
      throw new Error("Signup failed");
    }
  } catch (error) {
    // Log or handle the error
    console.error("Signup error: ", error);
    throw error;
  }
};

export const verifyToken = async (token) => {
  if (!token) {
    console.error("Token không tồn tại");
    return null; // Trả về null nếu không có token
  }

  try {
    const response = await api.get("/auth/verify", {
      headers: {
        Authorization: `Bearer ${token}`, // Gửi token để xác minh
      },
    });

    if (response.status === 200 && response.data.success) {
      console.log("Token xác minh thành công:", response.data);
      return response.data.user; // Trả về thông tin người dùng
    } else {
      console.warn("Token không hợp lệ hoặc hết hạn");
      return null; // Trả về null nếu token không hợp lệ
    }
  } catch (error) {
    console.error(
      "Lỗi xác minh token:",
      error.response?.data?.message || error.message
    );
    return null; // Trả về null khi có lỗi
  }
};
