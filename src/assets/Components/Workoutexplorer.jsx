import React, { useState } from "react";

const WorkoutExplorer = () => {
  const [workouts, setWorkouts] = useState({
    chest: [
      { id: 1, name: "Bench Press", img: "/tools/man-lifting-weights-chest.jpg", description: "The bench press is a compound exercise that involves the pectoralis major, anterior deltoids, and triceps brachii. It builds strength and encourages hypertrophy of these muscles." },
      { id: 2, name: "Incline Dumbbell Press", img: "/tools/Dumbbell-Incline-Bench-Press-scaled.jpg", description: "The incline dumbbell press is a free weight exercise that primarily targets the upper portion of the pectoral muscles (chest), as well as the shoulders and triceps." },
      { id: 3, name: "Push-Ups", img: "/tools/7fd5e55a8e993084ffdfdd7b4eb40f86.jpg", description: "Strength Building: Push-ups primarily target the pectoral muscles, deltoids, and triceps, making them effective for upper body strength development." },
      { id: 4, name: "Dumbbell Fly", img: "/tools/R.jpg", description: "Builds Chest Strength and Size: Dumbbell flys isolate the pectoralis major, helping to develop strength and muscle hypertrophy in the chest." },
      { id: 5, name: "Cable Crossover", img: "/tools/cable-standing-crossover-muscles-1024x680.png", description: "Cable crossovers are a resistance training exercise performed using a cable machine. This exercise primarily targets the pectoralis major and pectoralis minor muscles, which are essential for chest development." },
      { id: 6, name: "Chest Dips", img: "/tools/parallel-bar-tricep-dips-muscles-worked-2048x1590.png", description: "Chest dips are a compound exercise performed using parallel bars, engaging multiple muscle groups. They are particularly effective for developing the lower chest and improving overall upper body strength." },
      { id: 7, name: "Chest Fly Machine", img: "/tools/10301101-Lever-Pec-Deck-Fly_Chest_max-2048x1587.jpg", description: "A chest fly machine is designed to isolate and strengthen the pectoral muscles (chest muscles) through a controlled movement." },
      { id: 8, name: "Lever Chest Fly", img: "/tools/lever-chest-press-version-5-video-exercise-guide-tips-1536x864.jpg", description: "Enhances upper body strength and muscle definition." },
      { id: 9, name: "Lying Cable Bench Press", img: "/tools/Lying-Cable-Bench-Press-1-1024x573.jpg", description: "The cables provide resistance throughout the movement, targeting the chest muscles and helping to build strength and size." },
    ],
    back: [
      { id: 1, name: "Pull-Ups", img: "/tools/pull-up.gif", description: "When you’re performing a pullup, you’re lifting your entire body mass with the movement. This can greatly improve your body strength and even improve your health." },
      { id: 2, name: "Lat Pulldown", img: "/tools/pulldown-min.gif", description: "This exercise is an excellent substitute for pullups or chinups if you have difficulty performing these exercises or if you’re training to get there." },
      { id: 3, name: "Seated Row", img: "/tools/wide-grip-cable-row-benefits.png", description: "The seated cable row is an excellent compound movement for building muscle and strength in your back. It is a beginner-friendly exercise suitable for exercisers of varying training experience." },
      { id: 4, name: "Deadlift", img: "/tools/barbell-deadlift.gif", description: "The deadlift is a weighted exercise that builds muscle and boosts athletic performance. Proper form is key to maximizing results and safety." },
      { id: 5, name: "T-Bar Row", img: "/tools/t-bar-row-muscles.gif", description: "The T-bar row is a compound exercise that primarily targets the upper back, lats, and other supporting muscles." },
      { id: 6, name: "Face Pulls", img: "/tools/Muscles-Face-Pull.001.jpeg", description: "Face pulls are an effective exercise for strengthening the upper back and improving posture." },
      { id: 7, name: "Dumbbell Row", img: "/tools/bfa9aa935427ef0fd35ffd20a03f8ba1.jpg", description: "Dumbbell rows target the mid- and upper back muscles, including the lats, traps, and rhomboids." },
      { id: 8, name: "Dumbbell Reverse Grip Incline Bench", img: "/tools/dumbbell-reverse-grip-incline-bench-two-arm-row.png", description: "Strengthens traps and rear delts." },
      { id: 9, name: "Neutral Grip Lat Pulldown", img: "/tools/neutral-grip-lat-pulldown-benefits.png", description: "A vertical pulling exercise that targets the latissimus dorsi while being joint-friendly for the shoulders, elbows, and wrists." },
      { id: 10, name: "Close Grip Lat Pulldown", img: "/tools/neutral-grip-lat-pulldown.gif", description: "Close-grip lat pulldowns strengthen the mid to upper back muscles." },
      { id: 11, name: "Lever Seated Reverse Fly", img: "/tools/lever-seated-reverse-fly-video-exercise-guide-tips.jpg", description: "Targets the muscles in the upper back and shoulders through a reverse fly motion." },
      { id: 12, name: "Barbell Row", img: "/tools/R.gif", description: "The barbell row targets the upper and middle back, building strength and muscle mass." },
    ],
    shoulders: [
      { id: 1, name: "Overhead Press", img: "/tools/Dumbbell-Shoulder-Press.gif", description: "Builds strength in the shoulders, triceps, and upper chest, making it essential for overall upper body development." },
      { id: 2, name: "Lateral Raises", img: "/tools/anim-dumbbell-lateral-raise.gif", description: "Primarily targets the medial deltoids on the sides of your shoulders." },
      { id: 3, name: "Front Raises", img: "/tools/anim-dumbbell-front-raises.gif", description: "Targets the anterior deltoid, helping to build strength and definition in the shoulders." },
      { id: 4, name: "Arnold Press", img: "/tools/Arnold-Press.gif", description: "Utilizes a fuller range of motion to engage rear, lateral, and anterior deltoids." },
      { id: 5, name: "Reverse Fly", img: "/tools/R (1).gif", description: "Improves posture, stability, and shoulder strength while protecting against injuries." },
      { id: 6, name: "Upright Row", img: "/tools/R (2).gif", description: "Primarily targets the deltoids (shoulders) and trapezius muscles." },
    ],
    legs: [
      { id: 1, name: "Squats", img: "/tools/barbell-full-squat.gif", description: "Builds lower body muscle strength, endurance, and power while improving core stability." },
      { id: 2, name: "Lunges", img: "/tools/bodyweight-forward-lunge.gif", description: "Builds strength in the quadriceps, hamstrings, glutes, and calves." },
      { id: 3, name: "Leg Press", img: "/tools/R (3).gif", description: "Targets the quadriceps and glutes using a leg press machine." },
      { id: 4, name: "Leg Extension", img: "/tools/R (4).gif", description: "An isolation exercise that strengthens and defines the quadriceps." },
      { id: 5, name: "Leg Curl", img: "/tools/R (5).gif", description: "Primarily targets the hamstrings, improving strength and flexibility." },
      { id: 6, name: "Calf Raise", img: "/tools/R (6).gif", description: "Strengthens the calf muscles, improves balance, and enhances lower body performance." },
    ],
    biceps: [
      { id: 1, name: "Barbell Curl", img: "/tools/R (7).gif", description: "Targets the biceps brachii for strength and size development." },
      { id: 2, name: "Dumbbell Curl", img: "/tools/R (8).gif", description: "An isolation movement for sculpting and strengthening the biceps." },
      { id: 3, name: "Hammer Curl", img: "/tools/453818257067e0df3ee77eb9d184f015.gif", description: "Targets muscles in the upper and lower arm, ideal for upper-body strength routines." },
      { id: 4, name: "Concentration Curl", img: "/tools/R (9).gif", description: "An isolation exercise that helps improve bicep definition." },
      { id: 5, name: "Cable Curl", img: "/tools/R (10).gif", description: "Provides continuous resistance, maximizing bicep engagement." },
      { id: 6, name: "Preacher Curl", img: "/tools/R (11).gif", description: "Performed on a preacher bench, focusing on bicep strength and control." },
    ],
    triceps: [
      { id: 1, name: "Tricep Pushdown", img: "/tools/R (12).gif", description: "Isolates and strengthens the triceps using a cable machine." },
      { id: 2, name: "Overhead Extension", img: "/tools/CABLE_OHT_EXT.gif", description: "Targets the triceps muscles effectively through overhead movement." },
      { id: 3, name: "Close Grip Bench Press", img: "/tools/Close-Grip-Bench-Press.gif", description: "Targets the triceps while engaging the chest and shoulders." },
      { id: 4, name: "Skull Crushers", img: "/tools/flat-bench-skull-crusher.gif", description: "Builds triceps strength and improves upper body stability." },
      { id: 5, name: "Triceps Dips", img: "/tools/R (13).gif", description: "A bodyweight exercise that builds triceps, shoulders, and chest strength." },
      { id: 6, name: "Kickbacks", img: "/tools/R (14).gif", description: "An isolation exercise that targets the triceps muscles." },
    ],
  });

  const [selected, setSelected] = useState("chest");

  return (
    <div className="bg-[#0F0E0E] text-[#ccc8e6] px-8 py-10 m-8 rounded-3xl border-2 border-[#483AA0] shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
      <h1 className="text-4xl font-bold text-center mb-6">Workout Explorer</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.keys(workouts).map((muscle) => (
          <button
            key={muscle}
            onClick={() => setSelected(muscle)}
            className={`px-5 py-2 rounded-xl text-sm sm:text-base font-semibold transition-all hover:border-[#483AA0] border-2 border-[#2A2930] duration-300 cursor-pointer ${
              selected === muscle
                ? "bg-[#6D28D9] text-white"
                : "bg-[#1A1919] hover:bg-[#2A2930]"
            }`}
          >
            {muscle.charAt(0).toUpperCase() + muscle.slice(1)}
          </button>
        ))}
      </div>

      {/* Exercise Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {workouts[selected].map((exercise) => (
          <div
            key={exercise.id}
            className="bg-[#1A1919] p-4 rounded-2xl w-72 text-center hover:border-[#6D28D9] hover:scale-105 transform transition duration-300 shadow-md border-2 border-[#2E2B3B]"
          >
            <img
              src={exercise.img}
              alt={exercise.name}
              className="w-full h-45 object-cover rounded-xl mb-3 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold">{exercise.name}</h2>
            <p className="text-sm text-gray-400 mt-2">{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutExplorer;
