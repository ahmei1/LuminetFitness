import Navbar from "../assets/Components/Navbar";
import { Link } from "react-router-dom";
import img from '../tools/djim-loic-ft0-Xu4nTvA-unsplash.jpg'
import caloriesimg from '../tools/pickled-stardust-WTDiM3nezLQ-unsplash.jpg'
import chartimg from '../tools/ant-rozetsky-zpXNd-HCtbo-unsplash.jpg'

function Home() {
    return (
        <div className="bg-[#0f0e0e]" style={{ fontFamily: 'Alan Sans' }} >
            <section className='bg-[url("/src/tools/ambitious-studio-rick-barrett-03b61PY89hs-unsplash.jpg")] h-200 bg-cover bg-center'>
                <Navbar />
                <div className="flex flex-col items-center justify-center h-150 text-4xl font-bold text-[#ccc8e6] text-center p-4 ">
                    <h1> <span className="text-[#483AA0] text-6xl">LUMINET</span>  FITNESS YOUR GATEWAY TO YOUR DREAM PHYSIQUE </h1>
                    <button className="py-3 px-5 my-20 rounded-2xl  bg-gray-700 text-[#ccc8e6] shadow hover:text-[#483AA0] hover:bg-fuchsia-50  transform transition duration-500"> <Link to={'./dashboard'}> Start Now</Link></button>
                </div>

            </section>
            {/* sections */}
            <section className="p-10 bg-[#0F0E0E] text-black h-120</section>">
                <div className="grid md:grid-cols-2 sm:grid-cols-1  bg-[#0F0E0E] text-[#ccc8e6]  text-5xl items-center p-4  rounded-lg m-7 h-90 shadow-xl/30 hover:scale-102 hover:border-[#483AA0] transform duration-300 border-2  sm:text-2xl sm:h-full md:text-5xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] ">
                    <img className="border-4 hover:scale-105 transform duration-300 " src={img} alt="" width={300} height={300} />
                    <p>this website is dedicated to help you improve your health and life, in this website you can easly create your routines and have track on them</p>
                </div>
            </section>
            {/* section 2 */}
            <section className="p-10 bg-[#0F0E0E] text-black h-120</section>">
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 text-[#ccc8e6] text-center rounded-lg border-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] p-6 hover:scale-102 hover:border-[#483AA0] transform duration-300">
                    {/* Image Card */}
                    {[{ src: caloriesimg, text: "BMR Calculation" },
                    { src: chartimg, text: "Track Progress with Charts" },
                    { src: img, text: "Timer for Training Sessions" }].map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-3">
                            <div className="aspect-square w-60 sm:w-72 overflow-hidden rounded-lg ">
                                <img src={item.src} alt={item.text} className="w-full h-full object-cover hover:scale-110 transform duration-300" />
                            </div>
                            <p className="text-lg md:text-2xl">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>


            <div className=" bg-[#0F0E0E]  text-[#ccc8e6] flex flex-col items-center justify-center p-4 m-10  rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)]  h-90 shadow-xl/30 hover:scale-105 hover:border-[#483AA0] transform duration-300 border-2  sm:text-2xl sm:h-full md:text-5xl " >
                <p>this website is dedicated to help you improve your health and life, in this website you can easly create your routines and have track on them</p>
            </div>
            <section className="p-10 bg-[#0F0E0E] text-black h-120</section>">
                <div className="grid md:grid-cols-2 sm:grid-cols-1  bg-[#0F0E0E] text-[#ccc8e6]  text-5xl items-center p-4  rounded-lg m-7 h-90 shadow-xl/30 hover:scale-105 hover:border-[#483AA0] transform duration-300 border-2  sm:text-2xl sm:h-full md:text-5xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] ">
                    <img className="border-4 hover:scale-105 transform duration-300 " src={img} alt="" width={300} height={300} />
                    <p>this website is dedicated to help you improve your health and life, in this website you can easly create your routines and have track on them</p>
                </div>
            </section>
            <div className=" bg-[#0F0E0E]  text-[#ccc8e6] flex flex-col items-center justify-center p-4 m-10  rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)]  h-90 shadow-xl/30 hover:scale-105 hover:border-[#483AA0] transform duration-300 border-2  sm:text-2xl sm:h-full md:text-5xl " >
                <p>this website is dedicated to help you improve your health and life, in this website you can easly create your routines and have track on them</p>
            </div>
            <div className="flex flex-col items-center justify-center text-4xl font-bold text-[#ccc8e6] text-center p-4 ">
                <button className="py-3 px-5 my-20 rounded-2xl  bg-gray-700 text-[#ccc8e6] shadow hover:text-[#483AA0] hover:bg-fuchsia-50 transform transition duration-500"> <Link to={'./dashboard'}> Start Now</Link></button>
            </div>



            <footer>
                <div className="bg-[#0F0E0E] text-[#ccc8e6] p-10 text-center">
                    <p>© 2025 Luminet Fitness. All rights reserved. dedecated by Ahmed Abdelrahman </p>
                </div>
            </footer>

        </div>
    );
}

export default Home;