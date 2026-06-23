import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Job from "./pages/Job.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobs" element={<Job/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;