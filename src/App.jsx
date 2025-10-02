// src/App.jsx
import { Routes, Route } from "react-router-dom";
import ProcessPage from "./Pages/ProcessPage";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
   <>

   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/process" element={<ProcessPage />} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />

   </Routes>
   </>
  );
}

export default App;
