
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import Button from "../component/Button";
import Input from "../component/Input";
import Logo from "../component/Logo";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));

        navigate("/home");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-[80vh]">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 shadow-lg">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-white p-4 rounded-full shadow-md">
            <Logo className="w-12 h-12" />
          </div>

         
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>

        {/* Signup link */}
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?{" "}
          <Link
            to="/signup"
            className="font-medium text-purple-600 transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 mt-6 text-center">{error}</p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">

            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid",
                },
              })}
            />

            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            <Button
              type="submit"
              className="w-full p-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white"
            >
              Sign in
            </Button>

          </div>
        </form>

      </div>
    </div>
  );
}

export default Login;

