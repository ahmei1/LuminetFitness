import React, { useState, useEffect } from 'react';

const API_URL = 'https://wger.de/api/v2/exercise/';

function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        // IMPORTANT: Add '?status=2' to filter for approved exercises.
        // The API returns all exercises by default, including unapproved ones.
        const response = await fetch(`${API_URL}?status=2&language=2`); // 'language=2' is for English, for example
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // The actual list of exercises is in the 'results' array.
        setExercises(data.results); 
        
      } catch (e) {
        console.error("Fetching error: ", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, []); // Empty dependency array ensures this runs once after the initial render

  if (isLoading) {
    return <div>Loading exercises...</div>;
  }

  if (error) {
    return <div>Error: Failed to load exercises. {error}</div>;
  }

  return (
    <div className="exercise-list">
      <h1>wger Exercise Database ({exercises.length} Results)</h1>
      {exercises.map(exercise => (
        <div key={exercise.id} className="exercise-card">
          <h2>{exercise.name}</h2>
          {/* Note: The description is raw HTML and should be rendered carefully */}
          <p dangerouslySetInnerHTML={{ __html: exercise.description }} />
          {/* You may need to fetch category and muscle names from other endpoints (e.g., /api/v2/exerciseinfo/<id>/) */}
          <p>Category ID: {exercise.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ExerciseList;