import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineRobot,
  AiOutlineCalendar,
  AiOutlineLogin,
} from "react-icons/ai";
import "@fontsource/poppins";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-lg p-5 fixed left-0 top-0">
      <h2 className="text-2xl font-bold text-black font-[Poppins] mb-6">
        Logo
      </h2>

      <nav className="flex flex-col space-y-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg text-black hover:text-gray-600 transition duration-300 font-[Poppins]"
        >
          <AiOutlineHome /> Home
        </Link>
        <Link
          to="/askai"
          className="flex items-center gap-3 text-lg text-black hover:text-gray-600 transition duration-300 font-[Poppins]"
        >
          <AiOutlineRobot /> Diagnosis with AI
        </Link>
        <Link
          to="/bookapointment"
          className="flex items-center gap-3 text-lg text-black hover:text-gray-600 transition duration-300 font-[Poppins]"
        >
          <AiOutlineCalendar /> Book Appointment
        </Link>
        <Link
          to="/login"
          className="flex items-center gap-3 text-lg text-white bg-[#ff4757] px-3 py-2 rounded-md transition duration-300"
        >
          <AiOutlineLogin /> Login
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
