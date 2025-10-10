import { useState } from "react";

function Bmrcalculation() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [sex, setSex] = useState('');
  const [result, setResult] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Make sure all fields have valid values
    if (!age || !weight || !height || !sex) {
      alert("Please fill in all fields");
      return;
    }

    // Convert age, weight, height to numbers
    const ageNum = Number(age);
    const weightNum = Number(weight);
    const heightNum = Number(height);

    // Calculate BMR based on sex
    if (sex.toLowerCase() === 'male' || sex.toLowerCase() === 'man' || sex.toLowerCase() === 'm') {
      setResult(88.36 + (13.4 * weightNum) + (4.8 * heightNum) - (5.7 * ageNum));
    } else if (sex.toLowerCase() === 'woman' || sex.toLowerCase() === 'female' || sex.toLowerCase() === 'w') {
      setResult(447.6 + (9.2 * weightNum) + (3.1 * heightNum) - (4.3 * ageNum));
    } else {
      alert("Please enter a valid sex: 'male' or 'female'");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
      <h1 className="text-[#ccc8e6] text-4xl m-5 ">BMR Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sex (male/female)"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          className="border-2 p-3 m-4 rounded-2xl hover:scale-110 transform duration-300  hover:border-[#483AA0]"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border-2 p-3 m-4 rounded-2xl hover:scale-110 transform duration-300  hover:border-[#483AA0]"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border-2 p-3 m-4 rounded-2xl hover:scale-110 transform duration-300  hover:border-[#483AA0]"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border-2 p-3 m-4 rounded-2xl hover:scale-110 transform duration-300  hover:border-[#483AA0]"
        />
        <br />
        <button type="submit" className="m-3 p-3 border-2 text-2xl rounded-2xl hover:border-[#483AA0] transform duration-300 cursor-pointer">Calculate</button>
      </form>
      {result > 0? <p className="text-[#ccc8e6] text-3xl">Your BMR is <span className="text-4xl text-orange-800">{result}</span> Kcal/Day</p> : <p className="text-[#ccc8e6] text-3xl">fill the following to know your BMR</p>}
    </div>
  );
}

export default Bmrcalculation;
