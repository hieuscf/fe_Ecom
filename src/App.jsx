import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import SignUp from './components/SignUp/SignUp';
function App() {


  return (
    <div className="app">
      {" "}
      {/* Thêm thẻ cha ở đây */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="*" element={<NotFound />} /> 
        {/* <Route path="/404" element={<NotFound />} /> */}
        {/* Redirect cho tất cả các route không khớp */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App
