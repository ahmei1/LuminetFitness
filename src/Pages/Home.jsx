import Navbar from "../assets/Components/Navbar";
import { Link } from "react-router-dom";
import img from '../tools/10775757.jpg'
import caloriesimg from '../tools/pickled-stardust-WTDiM3nezLQ-unsplash.jpg'
import chartimg from '../tools/5143506.jpg'
import streakemoji from '../tools/d689a403-5351-4e58-9328-7a13cda3cee8.jpg'
import exercisetrackerimg from '../tools/Wavy_Edu-04_Single-06.jpg'
import challengesimg from '../tools/bwink_ppl_08_single_04.jpg'
import linkedinimg from '../tools/linkedin_2504923.png'
import githubimg from '../tools/github_270798.png'

function Home() {
    return (
        <div className="bg-[#0f0e0e]" style={{ fontFamily: 'Alan Sans' }} >
            <section className='bg-[url("/src/tools/ambitious-studio-rick-barrett-03b61PY89hs-unsplash.jpg")] h-200 bg-cover bg-center'>
                <Navbar />
                <div className="flex flex-col items-center justify-center h-150 text-4xl font-bold text-[#ccc8e6] text-center p-4 ">
                    <h1> <span className="text-[#483AA0] text-6xl font-bold">LUMINET</span>  FITNESS YOUR GATEWAY TO YOUR DREAM PHYSIQUE </h1>
                    <button className="py-3 px-5 my-20 rounded-2xl  bg-gray-700 text-[#ccc8e6] shadow hover:text-[#483AA0] hover:bg-fuchsia-50  transform transition duration-500"> <Link to={'./dashboard'}> Start Now</Link></button>
                </div>

            </section>
            {/* sections */}
            <section className="p-10 bg-[#0F0E0E] text-black h-120 ">
                <div className=" flex justify-around gap-10 md:grid-cols-2 sm:grid-cols-1  bg-[#0F0E0E] text-[#ccc8e6]  text-2xl items-center p-4  rounded-4xl m-7 h-90 shadow-xl/30 hover:scale-102 hover:border-[#483AA0] transform duration-300 border-2  sm:text-2xl sm:h-full md:text-5xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] ">
                    {/* <img className=" aspect-square w-80 object-cover overflow-hidden rounded-2xl  p-2 hover:scale-105 transform duration-300 " src={img} alt="" width={300} height={300} /> */}
                    <p className="text-3xl"> <span className="text-4xl text-[#483AA0]"> Luminet </span>  was created to make fitness simple, motivating, and personal.
                        Whether you’re training at the gym or working out at home, Luminet helps you plan routines, track calories, and stay on top of your goals.
                        No pressure. No confusion. Just you becoming your best self — one workout at a time.</p>
                </div>
            </section>
            {/* section 2 */}
            <section className="p-10 bg-[#0F0E0E] text-black h-120</section>">
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 text-[#ccc8e6] text-center text-4xl rounded-4xl border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] p-6 hover:scale-102 hover:border-[#483AA0] transform duration-300">
                    {/* Image Card */}
                    {[{ src: caloriesimg, text: "BMR Calculation" },
                    { src: chartimg, text: "Track Progress with Charts" },
                    { src: img, text: "Timer for Training Sessions" },
                {src:streakemoji, text: "Daily Streak 🔥" },
            {src:exercisetrackerimg, text: "Add your daily exercises"},
        {src:challengesimg, text: "Daily challenges"}].map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-3">
                            <div className="aspect-square w-100 sm:w-72 overflow-hidden rounded-lg ">
                                <img src={item.src} alt={item.text} className="w-full h-full object-cover hover:scale-110 transform duration-300" />
                            </div>
                            <p className="text-lg md:text-2xl">{item.text}</p>
                            
                        </div>
                        


                    ))}
                    


                </div>

            </section>


            <section className=" flex justify-center p-10 bg-[#0F0E0E] text-black h-120</section>">
                <div className=" sm:grid-cols-1  bg-[#0F0E0E] text-[#ccc8e6] w-fit text-3xl items-center p-10 justify-center  rounded-4xl m-2 h-90 shadow-xl/30 hover:scale-103 hover:border-[#483AA0] transform duration-300 border-2  sm:text-2xl sm:h-full md:text-5xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] ">
                <div className="flex flex-col items-center justify-center text-4xl font-bold text-[#ccc8e6] text-center p-2 ">

                    <p>Start your journey with Luminet</p>
                    <button className="py-3 px-5 my-20 rounded-2xl  bg-gray-700 text-[#ccc8e6] shadow hover:text-[#483AA0] hover:bg-fuchsia-50 transform transition duration-500"> <Link to={'./dashboard'}> Start Now</Link></button>
                </div>


                </div>
            </section>



            <footer>
                <div className="flex justify-center gap-5    ">
                <a className="border-2 rounded-2xl hover:border-[#483AA0] transform duration-300 p-3"  href="https://github.com/ahmei1" target="_blank"><img src={githubimg} alt="" width={30} height={30} /></a>
                <a className="border-2 rounded-2xl hover:border-[#483AA0] transform duration-300 p-3" href="https://www.linkedin.com/in/ahmed-abdelrahman-4b5378311/" target="_blank"><img src={linkedinimg} alt="" width={30} height={30} /></a>
                </div>
                <div className="bg-[#0F0E0E] text-[#ccc8e6] p-10 text-center">
                    <p>© 2025 Luminet Fitness. All rights reserved. dedecated by Ahmed Abdelrahman </p>
                </div>
            </footer>

        </div>
    );
}

export default Home;