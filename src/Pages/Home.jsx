import Navbar from "../assets/Components/Navbar";
import { Link } from "react-router-dom";
import img from "../tools/10775757.jpg";
import caloriesimg from "../tools/pickled-stardust-WTDiM3nezLQ-unsplash.jpg";
import chartimg from "../tools/5143506.jpg";
import streakemoji from "../tools/d689a403-5351-4e58-9328-7a13cda3cee8.jpg";
import exercisetrackerimg from "../tools/Wavy_Edu-04_Single-06.jpg";
import challengesimg from "../tools/bwink_ppl_08_single_04.jpg";
import linkedinimg from "../tools/linkedin_2504923.png";
import githubimg from "../tools/github_270798.png";

function Home() {
  return (
    <div className="bg-[#0f0e0e]" style={{ fontFamily: "Alan Sans" }}>
      {/* HERO SECTION */}
      <section className='bg-[url("/src/tools/ambitious-studio-rick-barrett-03b61PY89hs-unsplash.jpg")] min-h-screen bg-cover bg-center'>
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center text-[#e2e1ee] p-4 h-[80vh]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[90%]">
            <span className="text-[#483AA0] font-bold text-5xl sm:text-6xl">LUMINET</span> FITNESS — YOUR GATEWAY TO YOUR DREAM PHYSIQUE
          </h1>
          <button className="cursor-pointer py-3 px-6 mt-10 rounded-2xl bg-gray-700 text-[#ccc8e6] shadow hover:text-[#483AA0] hover:bg-fuchsia-50 font-bold transition duration-500 text-lg sm:text-xl">
            <Link to={"./dashboard"}>Start Now</Link>
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="p-6 sm:p-10 bg-[#0F0E0E] text-[#ccc8e6]">
        <div className="flex-row md:flex-row justify-around items-center gap-6 text-center md:text-left border-2 border-[#483AA0] rounded-4xl p-6 md:p-10 shadow-[5px_5px_0px_0px_rgba(109,40,217)] transition-transform duration-300 hover:scale-[1.02]">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed">
            <span className="text-[#483AA0] font-bold text-3xl sm:text-4xl">Luminet</span> was created to make fitness simple, motivating, and personal.
            Whether you’re training at the gym or working out at home, Luminet helps you plan routines, track calories, and stay on top of your goals.
            No pressure. No confusion. Just you becoming your best self — one workout at a time.
          </p>
          <br />
          <hr />
          <p className="p-5"> <span className="text-[#483AA0] font-bold">“Luminet”</span> combines “lumen” (light) and “network,” symbolizing the power of energy, connection, and progress. It represents a space where motivation meets motion — helping you stay consistent, track your growth, and shine stronger every day.</p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="p-6 sm:p-10 bg-[#0F0E0E] text-[#ccc8e6]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-2xl rounded-4xl border-2 border-[#483AA0] shadow-[5px_5px_0px_0px_rgba(109,40,217)] p-6 transition-transform duration-300 hover:scale-[1.02]">
          {[{ src: caloriesimg, text: "BMR Calculation" },
            { src: chartimg, text: "Track Progress with Charts" },
            { src: img, text: "Timer for Training Sessions" },
            { src: streakemoji, text: "Daily Streak 🔥" },
            { src: exercisetrackerimg, text: "Add your daily exercises" },
            { src: challengesimg, text: "Daily challenges" }].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-3">
                <div className="w-60 sm:w-72 lg:w-80 aspect-square overflow-hidden rounded-xl">
                  <img
                    src={item.src}
                    alt={item.text}
                    className="w-full h-full object-cover hover:scale-110 transform duration-300"
                  />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl">{item.text}</p>
              </div>
            ))}
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="flex justify-center p-6 sm:p-10 bg-[#0F0E0E]">
        <div className="bg-[#0F0E0E] border-2 border-[#483AA0] text-[#ccc8e6] text-center rounded-4xl p-8 sm:p-10 shadow-[5px_5px_0px_0px_rgba(109,40,217)] transition-transform duration-300 hover:scale-[1.03] max-w-3xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">
            “Fuel your body, focus your mind, and feel your progress.”
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F0E0E] text-[#ccc8e6] text-center p-6 sm:p-10">
        <div className="flex justify-center gap-6 mb-4">
          <a
            className="border-2 rounded-2xl hover:border-[#483AA0] transition duration-300 p-3"
            href="https://github.com/ahmei1"
            target="_blank"
          >
            <img src={githubimg} alt="GitHub" width={30} height={30} />
          </a>
          <a
            className="border-2 rounded-2xl hover:border-[#483AA0] transition duration-300 p-3"
            href="https://www.linkedin.com/in/ahmed-abdelrahman-4b5378311/"
            target="_blank"
          >
            <img src={linkedinimg} alt="LinkedIn" width={30} height={30} />
          </a>
        </div>
        <p className="text-sm sm:text-base">
          © 2025 Luminet Fitness. All rights reserved. Dedicated by Ahmed Abdelrahman.
        </p>
      </footer>
    </div>
  );
}

export default Home;
