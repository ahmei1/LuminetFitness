import { useState } from "react";

export default function BMR() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState("male");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ageNum = Number(age);
    const weightNum = Number(weight);
    const heightNum = Number(height);
    if (!ageNum || !weightNum || !heightNum) return;

    const bmr =
      sex === "male"
        ? 88.36 + 13.4 * weightNum + 4.8 * heightNum - 5.7 * ageNum
        : 447.6 + 9.2 * weightNum + 3.1 * heightNum - 4.3 * ageNum;

    setResult(Math.round(bmr));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-3">
        <div className="field mb-0">
          <label className="label">Sex</label>
          <select className="input" value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="field mb-0">
          <label className="label">Age</label>
          <input className="input" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="field mb-0">
          <label className="label">Weight (kg)</label>
          <input
            className="input"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="field mb-0">
          <label className="label">Height (cm)</label>
          <input
            className="input"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary sm:col-span-2">
          Calculate BMR
        </button>
      </form>

      {result != null && (
        <p className="mt-4 text-center text-lg">
          Your BMR is <span className="text-[var(--accent)] font-bold text-2xl">{result}</span> kcal/day
        </p>
      )}
    </div>
  );
}
