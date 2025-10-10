import { Link } from "react-router-dom";

export default function Navbar() {
  return (
       <nav className="flex justify-between mx-5 py-5 text-[#ccc8e6] font-bold" >
        <h1 className="text-2xl font-bold text-[#483AA0]">Luminet.</h1>
        <ul className="flex space-x-4">
            <li className="text-2xl pl-4 font-bold hover:text-[#483AA0] transform  transition duration-300">
                <Link to="/">Home</Link>
            </li>
            <li className="text-2xl pl-4 font-bold hover:text-[#483AA0] transform transition duration-300">
                <Link to="/dashboard">Dashboard</Link>
            </li>       
            <li className="text-2xl pl-4 font-bold hover:text-[#483AA0] transform transition duration-300">
                <Link to="/process">Process</Link>
            </li>
        </ul>
       </nav>
  );
}   
