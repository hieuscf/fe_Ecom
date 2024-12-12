import axios from "axios";

// Set a base URL for all API requests
const api = axios.create({
  baseURL: "http://localhost:4000/api/",  // Backend base URL
});
/* export const login = async (email, password) => {
  const response = await axios.post("http://localhost:4000/api/auth/login", {
    email,
    password,
  });
  return response.data;
}; */


// Signup function
export const signup = async (username, email, password) => {
  try {
    const response = await api.post("auth/signup", { username, email, password });
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