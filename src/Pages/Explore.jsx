import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import WorkoutExplorer from "../components/WorkoutExplorer";
import { useAuth } from "../context/AuthContext";

export default function Explore() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAdd = (name) => {
    if (!user) {
      navigate("/login", { state: { from: "/explore" } });
      return;
    }
    navigate("/dashboard", { state: { exerciseName: name } });
  };

  return (
    <div className="page">
      <Navbar />
      <main className="container py-10">
        <div className="section-head max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold">Workout explorer</h2>
          <p>Browse by muscle group. Add any movement straight to today&apos;s log.</p>
        </div>
        <WorkoutExplorer onAddToWorkout={handleAdd} />
      </main>
    </div>
  );
}
