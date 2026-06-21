import React, { useState } from "react";
import api from "../services/axios.js";
import { Link } from "react-router-dom";
import { handleSuccess, handleError,} from "../utils/toast.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await api.post("/auth/login",form);
    localStorage.setItem("token",response.data.token);
    localStorage.setItem("user",JSON.stringify(response.data.user));
    handleSuccess(response.data.message);
    setForm({
      email: "",
      password: "",
    });
    navigate("/jobs");
  } catch (error) {
    handleError(
      error.response?.data?.message ||
      "Login Failed"
    );
  }
};

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 flex items-center justify-center px-4">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">

          <h2 className="text-4xl font-bold text-center text-white mb-2">
            Login
          </h2>

          <p className="text-center text-gray-300 mb-8">
            Login to access the Job Portal
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-[1.02]"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300"
          >
            Register
          </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;