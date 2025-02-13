import { useState } from "react";
//import { useNavigate } from "react-router";
// import axios from "axios";
import "@fontsource/poppins";
const Home = () => {
  //const navigate = useNavigate();

  const [symptom, setSymptom] = useState("");
  // const [message, setMessage] = useState("")

  const handlesymptomchange = (e) => setSymptom(e.target.value);

  // const handlecheck = async (e) => {

  // };

  return (
    <div className="flex bg-[#F8BBD0]">
      <div className="flex rounded-md ml-4 gap-2">
        <div className="grid items-center h-screen justify-end mr-4 mt-2 mb-2">
          <div className="bg-[#F48FB1] w-[500px] shadow-2xl shadow-pink-600 rounded-md flex flex-col items-center h-full justify-center p-4">
            <div className="w-full bg-#3333330f rounded-md">
              <h1 className="mt-4 ml-4 text-black font-semibold text-3xl font-[Poppins]">
                Patients Details
              </h1>
            </div>
            <h1 className="mb-4 mt-10 text-2xl text-black font-[Poppins]">
              Diagnosis with AI
            </h1>
            <div className="w-full">
              <textarea
                className="w-full py-2 bg-white rounded-md font-[Poppins] text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 p-2 mb-4"
                placeholder="Enter your symptoms"
                value={symptom}
                onChange={handlesymptomchange}
              />
            </div>

            <div className="w-full mt-2 cursor-pointer">
              <button
                className="w-full bg-[#D81B60] flex items-center text-white justify-center py-2 rounded-md hover:bg-[#EC407A] cursor-pointer transition-all duration-300 mb-2 font-[Poppins]"
                // onClick={handlecheck}
              >
                Diagnosis
              </button>
            </div>

            {/* {message && (
            <div>
              <h1 className="text-1xl text-red-500">{message}</h1>
            </div>
          )} */}
          </div>
        </div>
      </div>
      <div className="bg-[#F48FB1] h-screen flex-1 mt-2 mb-2 rounded-md mr-1 shadow-2xl shadow-pink-600">
        <div className="text-center mt-3 font-bold font-[Poppins]">
          Your report appears here
        </div>
      </div>
    </div>
  );
};

export default Home;
