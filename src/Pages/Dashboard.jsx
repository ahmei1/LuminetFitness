import Navbar from "../assets/Components/Navbar";
import Streak from "../assets/Components/streaks";
import Timer from "../assets/Components/Timer";


function Dashboard() {
    return (
        <div className="bg-[#0F0E0E]">
            <Navbar />
            <section className="p-10 bg-[#0F0E0E] text-black h-120</section>">
                <div className="grid grid-cols-2 md:grid-cols-2  bg-[#0F0E0E] text-[#ccc8e6] items-center text-5xl font-bold">
                    <div className=" flex flex-col items-center justify-center p-4  rounded-lg m-7 h-90 shadow-xl/30 hover:scale-105 hover:border-[#483AA0] transform duration-300 border-2  sm:text-2xl sm:h-full md:text-5xl shadow-[5px_5px_0px_0px_rgba(109,40,217)]" >
                        <Streak />

                    </div>
                    <div className=" flex flex-col items-center justify-center p-4  rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)] m-7 h-90 shadow-xl/30 hover:scale-105 hover:border-[#483AA0] transform duration-300 border-2  sm:text-2xl sm:h-full md:text-5xl " >
                        <Timer />
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Dashboard; 