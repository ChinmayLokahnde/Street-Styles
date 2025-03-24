import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800">
      <form className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition">
          Login
        </button>

        <p className="text-gray-400 text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-pink-400 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
