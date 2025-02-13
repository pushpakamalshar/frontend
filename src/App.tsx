import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import Doctorlist from "./components/Doctorslist";
import Bookdoctors from "./components/Bookdoctors";
import Navbar from "./components/Navbar.tsx";
import Askai from "./components/Askai.tsx";
import LoginPage from "./components/Login.tsx";
import RegistrationForm from "./components/Registration.tsx";
import { AuthProvider } from "./context/Authcontext.tsx";

const App = () => {
  return (
    <AuthProvider>
      <div className="flex min-h-screen  w-full bg-[#f1f2f6]">
        <aside className="w-64 bg-white  shadow-md bg">
          <Navbar />
        </aside>

        <main className="flex-1 p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookapointment" element={<Doctorlist />} />
            <Route path="/bookdoctor" element={<Bookdoctors />} />
            <Route path="/askai" element={<Askai />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
};

export default App;
