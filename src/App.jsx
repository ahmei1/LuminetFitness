// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Explore from "./Pages/Explore";
function App() {
  return (
   <>

   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Explore" element={<Explore />} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />

   </Routes>
   </>
  );
}

export default App;
