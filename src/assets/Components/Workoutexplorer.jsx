import React, { useState } from "react";

const WorkoutExplorer = () => {
  const [workouts, setWorkouts] = useState({
    chest: [
      { id: 1, name: "Bench Press", img: "src/tools/man-lifting-weights-chest.jpg", description: "The bench press is a compound exercise that involves the pectoralis major, anterior deltoids, and triceps brachii. It builds strength and encourages hypertrophy of these muscles." },
      { id: 2, name: "Incline Dumbbell Press", img: "src/tools/Dumbbell-Incline-Bench-Press-scaled.jpg", description: "The incline dumbbell press is a free weight exercise that primarily targets the upper portion of the pectoral muscles (chest), as well as the shoulders and triceps." },
      { id: 3, name: "Push-Ups", img: "src/tools/7fd5e55a8e993084ffdfdd7b4eb40f86.jpg", description: "Strength Building: Push-ups primarily target the pectoral muscles, deltoids, and triceps, making them effective for upper body strength development." },
      { id: 4, name: "Dumbbell Fly", img: "src/tools/R.jpg", description: "Builds Chest Strength and Size: Dumbbell flys isolate the pectoralis major, helping to develop strength and muscle hypertrophy in the chest." },
      { id: 5, name: "Cable Crossover", img: "src/tools/cable-standing-crossover-muscles-1024x680.png", description: "Cable crossovers are a resistance training exercise performed using a cable machine. This exercise primarily targets the pectoralis major and pectoralis minor muscles, which are essential for chest development." },
      { id: 6, name: "Chest Dips", img: "src/tools/parallel-bar-tricep-dips-muscles-worked-2048x1590.png", description: "Chest dips are a compound exercise performed using parallel bars, engaging multiple muscle groups. They are particularly effective for developing the lower chest and improving overall upper body strength." },
      { id: 7, name: "Chest fly machine", img: "src/tools/10301101-Lever-Pec-Deck-Fly_Chest_max-2048x1587.jpg", description: "A chest fly machine is designed to isolate and strengthen the pectoral muscles (chest muscles) through a controlled movement." },
      { id: 8, name: "Lever chest fly", img: "src/tools/lever-chest-press-version-5-video-exercise-guide-tips-1536x864.jpg", description: "enhance upper body strength and muscle definition" },
      { id: 9, name: "Lying cable bench press", img: "src/tools/Lying-Cable-Bench-Press-1-1024x573.jpg", description: "The cables provide resistance throughout the movement, targeting the chest muscles and helping to build strength and size." },
    ],
    back: [
      { id: 1, name: "Pull-Ups", img: "src/tools/pull-up.gif", description: "When you’re performing a pullup, you’re lifting your entire body mass with the movement. This can greatly improve your body strength and even improve your health." },
      { id: 2, name: "Lat Pulldown", img: "src/tools/pulldown-min.gif", description: "This exercise is an excellent substitute for pullups or chinups if you have difficulty performing these exercises or if you’re training to get there.." },
      { id: 3, name: "Seated Row", img: "src/tools/wide-grip-cable-row-benefits.png", description: "The seated cable row is an excellent compound movement for building muscle and strength in your back. It is a beginner-friendly exercise suitable for exercisers of varying training experience." },
      { id: 4, name: "Deadlift", img: "src/tools/barbell-deadlift.gif", description: "dead lift is a weighted exercise that anyone with full mobility can master. Its benefits include building muscle and boosting athletic performance. The key is to learn proper form to get the most out of this foundational strength-training exercise." },
      { id: 5, name: "T-Bar Row", img: "src/tools/t-bar-row-muscles.gif", description: "The T-bar row is a compound exercise that primarily targets the upper back, lats, and other supporting muscles." },
      { id: 6, name: "Face Pulls", img: "src/tools/Muscles-Face-Pull.001.jpeg", description: "Face pulls are an effective exercise for strengthening the upper back and improving posture." },
      { id: 7, name: "dumbbell row", img: "src/tools/bfa9aa935427ef0fd35ffd20a03f8ba1.jpg", description: "Dumbbell rows are a fundamental strength training exercise that targets the mid- and upper back muscles, including the lats, traps, and rhomboids." },
      { id: 8, name: "dumbbell reverse grip incline bench", img: "src/tools/dumbbell-reverse-grip-incline-bench-two-arm-row.png", description: "Strengthens traps and rear delts." },
      { id: 9, name: "Natural grip lat pull down", img: "src/tools/neutral-grip-lat-pulldown-benefits.png", description: "The Neutral Grip Lat Pulldown is a vertical pulling exercise performed with palms facing each other, primarily targeting the latissimus dorsi while being particularly joint-friendly for the shoulders, elbows, and wrists." },
      { id: 10, name: "Close grip lat pull down", img: "src/tools/neutral-grip-lat-pulldown.gif", description: "Close-grip lat pulldowns are better for those strengthening their mid to upper back muscles." },
      { id: 11, name: "Lever seated reverse fly", img: "src/tools/lever-seated-reverse-fly-video-exercise-guide-tips.jpg", description: "This exercise involves sitting on a lever machine and performing a reverse fly motion, which targets the muscles in the upper back and shoulders. The movement involves pulling the handles back while keeping the arms straight and squeezing the shoulder blades together." },
      { id: 12, name: "Barbell row", img: "src/tools/R.gif", description: "The barbell row is an effective compound exercise that targets the upper and middle back, helping to build strength and muscle mass." },
    ],
    shoulders: [
      { id: 1, name: "Overhead Press", img: "/tools/shoulder1.jpg", description: "Core shoulder strength builder." },
      { id: 2, name: "Lateral Raises", img: "/tools/shoulder2.jpg", description: "Widens shoulder width." },
      { id: 3, name: "Front Raises", img: "/tools/shoulder3.jpg", description: "Targets anterior deltoids." },
      { id: 4, name: "Arnold Press", img: "/tools/shoulder4.jpg", description: "Great all-around deltoid workout." },
      { id: 5, name: "Reverse Fly", img: "/tools/shoulder5.jpg", description: "Builds rear shoulder balance." },
      { id: 6, name: "Upright Row", img: "/tools/shoulder6.jpg", description: "Engages traps and delts together." },
    ],
    legs: [
      { id: 1, name: "Squats", img: "/tools/leg1.jpg", description: "King of lower-body strength." },
      { id: 2, name: "Lunges", img: "/tools/leg2.jpg", description: "Builds quads and glutes." },
      { id: 3, name: "Leg Press", img: "/tools/leg3.jpg", description: "Targets quads under control." },
      { id: 4, name: "Leg Extension", img: "/tools/leg4.jpg", description: "Isolates front thighs." },
      { id: 5, name: "Leg Curl", img: "/tools/leg5.jpg", description: "Strengthens hamstrings." },
      { id: 6, name: "Calf Raise", img: "/tools/leg6.jpg", description: "Improves calf muscle definition." },
    ],
    biceps: [
      { id: 1, name: "Barbell Curl", img: "/tools/biceps1.jpg", description: "Classic bicep mass builder." },
      { id: 2, name: "Dumbbell Curl", img: "/tools/biceps2.jpg", description: "Works each arm independently." },
      { id: 3, name: "Hammer Curl", img: "/tools/biceps3.jpg", description: "Targets brachialis for width." },
      { id: 4, name: "Concentration Curl", img: "/tools/biceps4.jpg", description: "Focuses on peak contraction." },
      { id: 5, name: "Cable Curl", img: "/tools/biceps5.jpg", description: "Constant tension for growth." },
      { id: 6, name: "Preacher Curl", img: "/tools/biceps6.jpg", description: "Strict form for full isolation." },
    ],
    triceps: [
      { id: 1, name: "Tricep Pushdown", img: "/tools/triceps1.jpg", description: "Defines and tones triceps." },
      { id: 2, name: "Overhead Extension", img: "/tools/triceps2.jpg", description: "Stretches long head of triceps." },
      { id: 3, name: "Close Grip Bench Press", img: "/tools/triceps3.jpg", description: "Adds mass to triceps." },
      { id: 4, name: "Skull Crushers", img: "/tools/triceps4.jpg", description: "Isolates triceps efficiently." },
      { id: 5, name: "Dips", img: "/tools/triceps5.jpg", description: "Bodyweight exercise for strength." },
      { id: 6, name: "Kickbacks", img: "/tools/triceps6.jpg", description: "Perfect for shaping and detail." },
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
            className={`px-5 py-2 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
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
              className="w-full h-45 object-cover rounded-xl mb-3  transition-transform duration-300 "
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
