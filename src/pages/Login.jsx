import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const res = await axios.post("http://localhost:3000/api/users/login", {
      email,
      password,
    });

    setMessage("Login successful!");
    console.log("User logged in:", res.data);

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // Optional redirect (needs React Router)
    // navigate("/home");

  } catch (error) {
    setMessage(error.response?.data?.message || "Login failed");
    console.error("Login error:", error);
  }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Login
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-red-400">{message}</p>
        )}

        <p className="text-gray-400 text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-pink-400 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
