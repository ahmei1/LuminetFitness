import { useState } from "react";
import { workouts } from "../data/exercises";

export default function WorkoutExplorer({ onAddToWorkout }) {
  const [selected, setSelected] = useState("chest");

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.keys(workouts).map((muscle) => (
          <button
            key={muscle}
            type="button"
            onClick={() => setSelected(muscle)}
            className={`btn ${selected === muscle ? "btn-primary" : "btn-ghost"} capitalize`}
          >
            {muscle}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {workouts[selected].map((exercise) => (
          <article
            key={`${selected}-${exercise.id}`}
            className="panel overflow-hidden !p-0 flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-2)]">
              <img
                src={exercise.img}
                alt={exercise.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold">{exercise.name}</h2>
              <p className="text-sm text-[var(--muted)] mt-2 flex-1">{exercise.description}</p>
              {onAddToWorkout && (
                <button
                  type="button"
                  className="btn btn-primary mt-4 w-full"
                  onClick={() => onAddToWorkout(exercise.name)}
                >
                  Add to today&apos;s log
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
