import {  useEffect } from "react";
import { data } from "react-router-dom";


function Workoutexplorer() {
  // const [exercises, setExercises] = useEffect([]);
  const url = "https://wger.de/api/v2/exerciseinfo/?language=2&limit=20"; // Example API endpoint
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });   
  }, []);
  return ( 
    <div></div>
   );
}

export default Workoutexplorer;