import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import UpdateVehicle from "./pages/UpdateVehicle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  
   
    <Routes>

      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/update/:id" element={<UpdateVehicle/>}/>
    </Routes>

  );
}

export default App;