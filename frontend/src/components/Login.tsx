import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Doctorslist from "./Doctorslist";

const LoginPage = () => {
  const [loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);
      setMessage("Login successful!");
      navigate("/");
      setLoggedin(true);
    } catch (error) {
      console.error(error.response?.data.errors || error.message);
      setMessage(error.response?.data.message || "Login failed");

      // Clear the error message and inputs after 2 seconds
      setTimeout(() => {
        setMessage("");
        setEmail("");
        setPassword("");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-200 font-poppins mt-2">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="text-gray-600">Continue monitoring your health!</p>
      </div>

      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-96 mt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="yourname...@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
            />
          </div>

          <hr className="border-gray-300" />

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600"
            >
              Login
            </button>
            <Link to="/register">Dont Have an account?</Link>
          </div>

          {message && <p className="text-red-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
