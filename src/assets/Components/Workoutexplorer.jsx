import React, { useState, useEffect } from "react";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://wger.de/api/v2/exerciseinfo/?language=2&limit=30";

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        console.log("✅ API response:", data);
        setExercises(data.results || []);
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center text-lg font-semibold mt-10">Loading exercises...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#ccc8e6]">🏋️ Exercise Explorer</h1>
      <h1 className="text-4xl font-bold text-center mb-8 text-[#ccc8e6]">Full version coming soon...</h1>

      {exercises.length === 0 ? (
        <p className="text-center text-gray-500">No exercises found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="flex flex-col items-center justify-center p-6 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] h-60 sm:h-72 md:h-96 border-2 text-2xl sm:text-3xl md:text-5xl font-bold hover:border-[#483AA0] transform duration-300"
            >
              {/* Exercise Name */}
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">{exercise.name}</h2>

              {/* Category */}
              {exercise.category && (
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Category:</strong> {exercise.category.name}
                </p>
              )}

              {/* Muscles */}
              {(exercise.muscles?.length > 0 || exercise.muscles_secondary?.length > 0) && (
                <div className="mb-2">
                  <p className="text-sm text-gray-700">
                    <strong>Primary muscles:</strong>{" "}
                    {exercise.muscles.length > 0
                      ? exercise.muscles.map((m) => m.name).join(", ")
                      : "N/A"}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Secondary muscles:</strong>{" "}
                    {exercise.muscles_secondary.length > 0
                      ? exercise.muscles_secondary.map((m) => m.name).join(", ")
                      : "N/A"}
                  </p>
                </div>
              )}

              {/* Equipment */}
              {exercise.equipment?.length > 0 && (
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Equipment:</strong>{" "}
                  {exercise.equipment.map((eq) => eq.name).join(", ")}
                </p>
              )}

              {/* Description */}
              {exercise.description ? (
                <div
                  className="text-gray-700 text-sm leading-relaxed mb-3"
                  dangerouslySetInnerHTML={{ __html: exercise.description }}
                />
              ) : (
                <p className="text-gray-400 text-sm italic">No description available.</p>
              )}

              {/* Image (if available) */}
              {exercise.images && exercise.images.length > 0 && (
                <img
                  src={exercise.images[0].image}
                  alt={exercise.name}
                  className="w-full h-48 object-cover rounded-xl mt-3 border"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseList;
