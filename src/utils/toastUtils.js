import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message) => {
  toast.success(message, {
    //position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000, // Đóng sau 3 giây
  });
};

export const notifyError = (message) => {
  toast.error(message, {
    autoClose: 3000,
  });
};

export const notifyWarning = (message) => {
  toast.warning(message, {
    autoClose: 3000,
  });
};