import { atom } from "recoil";

export const authState = atom({
  key: "authState", // unique ID
  default: {
    isLoggedIn: false,
    user: null,
  }, // giá trị mặc định
});
