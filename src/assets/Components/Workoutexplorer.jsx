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
      { id: 1, name: "Overhead Press", img: "src/tools/Dumbbell-Shoulder-Press.gif", description: "The overhead press is a fundamental upper-body exercise that builds strength in the shoulders, triceps, and upper chest, making it essential for overall upper body development." },
      { id: 2, name: "Lateral Raises", img: "src/tools/anim-dumbbell-lateral-raise.gif", description: "The lateral raise is an isolation exercise designed to target specific muscles within your shoulders. Whether you perform it with dumbbells, kettlebells, or cables, lateral raises primarily target the medial deltoids on the sides of your shoulders." },
      { id: 3, name: "Front Raises", img: "src/tools/anim-dumbbell-front-raises.gif", description: "Front raises are an effective shoulder exercise that primarily targets the anterior deltoid, helping to build strength and definition in the shoulders." },
      { id: 4, name: "Arnold Press", img: "src/tools/Arnold-Press.gif", description: "Because the Arnold Press utilizes a fuller range of motion, you’re increasing demand on your rear delts, in addition to the lateral and anterior delts activated by the traditional shoulder press movement. " },
      { id: 5, name: "Reverse Fly", img: "src/tools/R (1).gif", description: "Reverse Fly helps improve posture, stability, and shoulder strength, while also protecting against injuries." },
      { id: 6, name: "Upright Row", img: "src/tools/R (2).gif", description: "The upright row is a compound weightlifting exercise that involves multiple joints and simultaneously engages several muscle groups. It primarily targets the deltoids (shoulders) and trapezius" },
    ],
    legs: [
      { id: 1, name: "Squats", img: "src/tools/barbell-full-squat.gif", description: "Squats build lower body muscle strength,2﻿ endurance, and power. Additionally, they engage the core and improve strength and stability in the trunk and upper body." },
      { id: 2, name: "Lunges", img: "src/tools/bodyweight-forward-lunge.gif", description: "Lunges are a powerful exercise that helps to build strength in your lower body, targeting muscles such as the quadriceps, hamstrings, glutes, and calves." },
      { id: 3, name: "Leg Press", img: "src/tools/R (3).gif", description: "The leg press is a seated compound exercise in which an individual pushes weight or resistance away from their body, using their legs. The leg press works the quadriceps and the gluteal muscles and is performed using a leg press machine." },
      { id: 4, name: "Leg Extension", img: "src/tools/R (4).gif", description: "Leg extensions are an isolation exercise primarily targeting the quadriceps, helping to build strength and muscle definition in the front of the thighs." },
      { id: 5, name: "Leg Curl", img: "src/tools/R (5).gif", description: "The leg curl is an effective exercise primarily targeting the hamstring muscles, helping to improve strength, flexibility, and overall athletic performance." },
      { id: 6, name: "Calf Raise", img: "src/tools/R (6).gif", description: "Calf raises are a simple yet effective exercise that strengthens the calf muscles, improves balance, and enhances overall lower body performance." },
    ],
    biceps: [
      { id: 1, name: "Barbell Curl", img: "src/tools/R (7).gif", description: "The barbell curl is a fundamental exercise for building bicep strength and size, primarily targeting the biceps brachii muscle." },
      { id: 2, name: "Dumbbell Curl", img: "src/tools/R (8).gif", description: "Dumbbell curls are a single-joint movement, making them excellent for isolating and sculpting the biceps." },
      { id: 3, name: "Hammer Curl", img: "src/tools/453818257067e0df3ee77eb9d184f015.gif", description: "A hammer curl is a variation of the biceps curl and targets muscles in the upper and lower arm. While this exercise is almost always performed with a dumbbell, you can do it with cables or bands. Hammer curls are a great addition to your upper-body strength routine." },
      { id: 4, name: "Concentration Curl", img: "src/tools/R (9).gif", description: "The concentration curl is an effective isolation exercise that targets the biceps, helping to build strength and improve muscle definition." },
      { id: 5, name: "Cable Curl", img: "src/tools/R (10).gif", description: "Cable curls allow for better control and stability during the movement, reducing the risk of using momentum to lift the weight. This focus on form helps ensure that the biceps are effectively targeted, maximizing the benefits of the exercise." },
      { id: 6, name: "Preacher Curl", img: "src/tools/R (11).gif", description: "Preacher curls are a bicep isolation exercise performed on a preacher curl bench, which allows you to focus on building stronger biceps." },
    ],
    triceps: [
      { id: 1, name: "Tricep Pushdown", img: "src/tools/R (12).gif", description: "The triceps pushdown is an effective exercise for isolating and strengthening the triceps muscles, typically performed using a cable machine." },
      { id: 2, name: "Overhead Extension", img: "src/tools/CABLE_OHT_EXT.gif", description: "The overhead extension, specifically the overhead triceps extension, is a powerful exercise that targets and strengthens the triceps muscles." },
      { id: 3, name: "Close Grip Bench Press", img: "src/tools/Close-Grip-Bench-Press.gif", description: "The close grip bench press is an effective exercise for targeting the triceps while also engaging the chest and shoulders, making it a valuable addition to any upper body workout routine." },
      { id: 4, name: "Skull Crushers", img: "src/tools/flat-bench-skull-crusher.gif", description: "Skull crushers are an effective exercise for building triceps strength, improving upper body stability, and enhancing overall functional fitness." },
      { id: 5, name: "Triceps Dips", img: "src/tools/R (13).gif", description: "Triceps dips are an effective bodyweight exercise that targets the triceps, shoulders, and chest, helping to build upper body strength." },
      { id: 6, name: "Kickbacks", img: "src/tools/R (14).gif", description: "Tricep kickbacks are an effective isolation exercise that targets the triceps muscles at the back of your upper arms." },
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
            className={`px-5 py-2 rounded-xl text-sm sm:text-base font-semibold  transition-all hover:border-[#483AA0] border-2 border-[#2A2930] duration-300 cursor-pointer ${
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
