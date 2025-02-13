import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
          bloodGroup: bloodGroup,
          gender: gender,
          dob: dob,
        }
      );

      console.log(response.data);
      setMessage("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data.errors || error.message);
      setMessage(error.response?.data.message || "Registration failed");

      setTimeout(() => {
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

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-6">
            <div className="w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Blood Group</label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Date Of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-6">
            <div className="w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg cursor-pointer"
            >
              Submit
            </button>
          </div>

          <div className="text-center">
            <a href="/login" className="text-lg text-gray-700">
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
