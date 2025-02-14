import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
const HomePage = () => {
  const auth = useAuth();
  const { isAuthenticated, login, logout } = auth;
  const navigate = useNavigate();
  return (
    <div>
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Healthcare
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience seamless healthcare with AI-powered diagnosis and instant
            consultation booking.
          </p>
          <div className="space-x-4">
            <button
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-700 cursor-pointer"
              onClick={() => {
                isAuthenticated ? navigate("/askai") : navigate("/register");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose HealthTech?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-110 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI Diagnosis
              </h3>
              <p className="text-gray-600">
                Get accurate and fast diagnoses using advanced AI technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-110 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Booking Consultation
              </h3>
              <p className="text-gray-600">
                Book appointments with top healthcare professionals instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-110 transition-all duration-300">
              <div className="text-blue-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Future Expansions
              </h3>
              <p className="text-gray-600">
                We’re constantly innovating to bring you more features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
