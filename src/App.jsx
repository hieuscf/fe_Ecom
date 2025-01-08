import './App.css'
import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import SignUp from './components/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import Login from './components/Login/Login';
import { authState } from './recoil/recoil';
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";
import { verifyToken } from './services/authServices';
function App() {
  const [auth, setAuth] = useRecoilState(authState);
  const checkLoginStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const user = await verifyToken(token);
        if (user) {
          console.log("Người dùng đã đăng nhập:", user);
          setAuth({
            isLoggedIn: true,
            user,
          });
        } else {
          console.log(token);
          console.warn("Token hết hạn hoặc không hợp lệ");
          localStorage.removeItem("token");
          setAuth({ isLoggedIn: false, user: null });
        }
      } else {
        console.log(token);
        console.info("Không tìm thấy token");
        setAuth({ isLoggedIn: false, user: null });
      }
    } catch (error) {
      console.error("Lỗi khi kiểm tra trạng thái đăng nhập:", error);
      setAuth({ isLoggedIn: false, user: null });
    }
  };
  useEffect(() => {
    checkLoginStatus(); // Kiểm tra trạng thái đăng nhập khi load app
    console.log("checkLoginStatus");
  }, []);
  return (
    <div className="app">
      {" "}
      {/* Thêm thẻ cha ở đây */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        Redirect cho tất cả các route không khớp
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App
