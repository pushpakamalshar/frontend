import { useState } from "react";
//import { useNavigate } from "react-router";
// import axios from "axios";
import diagnose from "../api/diagnose.ts";
import "@fontsource/poppins";
const Home = () => {
  //const navigate = useNavigate();
  const [report, setReport] = useState();
  const [symptom, setSymptom] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handlesymptomchange = (e) => setSymptom(e.target.value);
  const handleCheck = async () => {
    if (symptom.length > 0) {
      try {
        setLoading(true);
        const response = await diagnose(symptom);
        setReport(response);
      } catch (error) {
        setMessage(error.response?.data.message || "Report failed");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } finally {
        setLoading(false);
      }
    } else {
      setMessage("Please provide your symptoms");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="flex ">
      <div className="flex rounded-md ml-4 gap-2">
        <div className="grid items-center h-screen justify-end mr-4 mt-2 mb-2">
          <div className="bg-gray-100 w-[500px] shadow-2xl rounded-md flex flex-col items-center h-full justify-center p-4">
            <div className="w-full bg-#3333330f rounded-md">
              <h1 className="mt-2 ml-4 text-black font-semibold text-3xl font-[Poppins]">
                Predict Possible Diseases from Your Symptoms
              </h1>
            </div>
            <h1 className="mb-4 mt-10 text-2xl text-black font-[Poppins]">
              Diagnosis with AI
            </h1>
            <div className="w-full">
              <textarea
                className="w-full py-2 bg-white rounded-md font-[Poppins] text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 p-2 mb-4"
                placeholder="Enter your symptoms"
                value={symptom}
                required
                onChange={handlesymptomchange}
              />
            </div>

            <div className="w-full mt-2 cursor-pointer">
              <button
                className="w-full bg-red-500 flex items-center text-white justify-center py-2 rounded-md hover:bg-[#EC407A] cursor-pointer transition-all duration-300 mb-2 font-[Poppins]"
                onClick={handleCheck}
              >
                Diagnosis
              </button>
            </div>

            {message && (
              <div>
                <h1 className="text-1xl text-red-500">{message}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-screen flex-1 mt-2 mb-2 rounded-md mr-1 shadow-2xl overflow-y-auto">
        <div className="text-center mt-3 font-bold font-[Poppins]">
          Your report appears here
        </div>
        <p className="p-2 font-small font-[Poppins]">
          {loading ? (
            <span className="relative flex size-3 ml-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-red-300"></span>
            </span>
          ) : (
            report
          )}
        </p>
      </div>
    </div>
  );
};

export default Home;
