import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="px-4 py-2 rounded-lg bg-white text-red-600 font-semibold hover:bg-red-500 hover:text-white transition duration-300"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;