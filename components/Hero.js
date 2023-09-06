import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#bfdbfe] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
             Una Experiencia Única <br className="lg:flex hidden" /> para conocer <br className="lg:flex hidden" /> lugares excepcionales
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Conoce nuestras habitaciones <br className="lg:flex hidden" /> y pasa unas vacaciones en Familia
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#172554] text-white rounded-full border-none w-36 lg:w-44 capitalize">Conoce más</button>
          </div>
          <img src="/assets/john-doe.jpeg" alt="Render_de_Hotel" style={{borderRadius: '20%', width: '50%', height: '50%' }} />
{/*           <img src="/assets/Hotel.png" alt="Render_de_Hotel" style={{ borderRadius: '40%', width: '50%', height: '50%' }} />
 */}          
        </div>
      </div>
    </div>
  );
};

export default Hero;
