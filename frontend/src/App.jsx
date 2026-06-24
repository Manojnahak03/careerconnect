import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Job from "./pages/Job.jsx";
import Contact from "./pages/Contact.jsx";
import JobDetails from "./pages/JobDetails";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobs" element={<ProtectedRoute> <Job /> </ProtectedRoute>}/>
      <Route
  path="/jobs/:id"
  element={
    <ProtectedRoute>
      <JobDetails />
    </ProtectedRoute>
  }
/>

      <Route
  path="/contact"
  element={
    <ProtectedRoute>
      <Contact />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;