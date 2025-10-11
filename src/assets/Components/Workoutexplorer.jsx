import React, { useState, useEffect } from "react";

const API_URL = "https://wger.de/api/v2/exercise/?language=2&limit=20"; 
// language=2 → English, limit=20 → 20 exercises

function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch exercises");
        const data = await response.json();
        setExercises(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (isLoading)
    return (
      <div className="text-center text-gray-500 py-10">Loading exercises...</div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 py-10">
        Error: {error}
      </div>
    );

  if (exercises.length === 0)
    return (
      <div className="text-center text-gray-500 py-10">
        No exercises found 😕
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🏋️‍♂️ Exercise List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {exercise.name}
            </h2>
            <p
              className="text-gray-600 text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  exercise.description ||
                  "<em>No description available.</em>",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseList;
