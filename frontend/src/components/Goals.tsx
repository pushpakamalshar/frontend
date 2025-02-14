import { useState } from "react";
import diagnose from "../api/diagnose.ts";
import "@fontsource/poppins";
import goals from "../api/goals.ts";

const Home = () => {
  const [report, setReport] = useState();
  const [symptom, setSymptom] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlesymptomchange = (e) => setSymptom(e.target.value);

  const handleCheck = async () => {
    if (symptom.length > 0) {
      try {
        setLoading(true);
        const response = await goals(symptom);
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
      setMessage("Please provide your goal");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="w-full max-w-2xl bg-gray-100 shadow-2xl rounded-md p-6">
        <h1 className="text-black font-semibold text-3xl font-[Poppins] text-center mb-4">
          Want to improve your health?
        </h1>
        <h2 className="text-2xl text-black font-[Poppins] text-center mb-4">
          Get Suggestion
        </h2>

        <textarea
          className="w-full py-2 bg-white rounded-md font-[Poppins] text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 p-2 mb-4"
          placeholder="Write your goal"
          value={symptom}
          required
          onChange={handlesymptomchange}
        />

        <button
          className="w-full bg-red-500 flex items-center text-white justify-center py-2 rounded-md hover:bg-[#EC407A] cursor-pointer transition-all duration-300 mb-4 font-[Poppins]"
          onClick={handleCheck}
        >
          Get possible Suggestion
        </button>

        {message && (
          <h1 className="text-xl text-red-500 text-center mb-2">{message}</h1>
        )}
      </div>

      <div className="w-full max-w-2xl bg-gray-100 shadow-2xl rounded-md p-6 mt-4 h-60 overflow-y-auto text-justify leading-relaxed">
        <h2 className="text-center font-bold font-[Poppins] mb-2">
          Possible Suggestion
        </h2>
        <p className="p-2 font-small ">
          {loading ? (
            <span className="relative flex size-3 mx-auto">
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
