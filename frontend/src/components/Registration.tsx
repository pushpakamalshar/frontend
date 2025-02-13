import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    bloodGroup: "",
    dob: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          firstName: formData.firstname,
          lastName: formData.lastname,
          email: formData.email,
          password: formData.password,
          bloodGroup: formData.bloodGroup,
          gender: formData.gender,
          dob: formData.dob,
        }
      );

      console.log(response.data);
      setMessage("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data.errors || error.message);
      setMessage(error.response?.data.message || "Login failed");

      setTimeout(() => {
        setFormData();
        setMessage("");
      }, 2000);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200 p-4">
      <div className="w-full sm:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 bg-white p-2 rounded-md shadow-lg border border-gray-300">
        <div className="text-2xl font-bold relative mb-6 text-center">
          Registration
        </div>

        <form action="" method="">
          <div className="flex flex-wrap mb-6">
            <div className="w-1/3 px-2 mb-4">
              <div className="input-box">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            <div className="w-1/3 px-2 mb-4">
              <div className="input-box">
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            <div className="w-1/3 px-2 mb-4">
              <div className="input-box">
                <label className="block text-sm font-medium">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A positive (A+)</option>
                  <option value="A-">A negative (A-)</option>
                  <option value="B+">B positive (B+)</option>
                  <option value="B-">B negative (B-)</option>
                  <option value="AB+">AB positive (AB+)</option>
                  <option value="AB-">AB negative (AB-)</option>
                  <option value="O+">O positive (O+)</option>
                  <option value="O-">O negative (O-)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="w-1/3 px-2 mb-4">
              <div className="input-box">
                <label className="block text-sm font-medium">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            <div className="w-1/3 px-2 mb-4">
              <div className="input-box">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            <div className="w-1/3 px-2 mb-4">
              <div className="input-box">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="w-1/3 px-2 mb-4">
              <div className="input-box">
                <label className="block text-sm font-medium">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 border border-gray-300 rounded-md w-full"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg cursor-pointer"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          <div className="text-center">
            <a
              href="file:///D:/althackathon/login.html"
              className="text-lg text-gray-700"
            >
              Already have an account?
            </a>
          </div>
          <p className="text-center">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
