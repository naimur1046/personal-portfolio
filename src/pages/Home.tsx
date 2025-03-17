import React from "react";
import RumelPhoto from "../assets/rumel.png";
import Download from "../assets/download.png"
import IndicatingMe from "../assets/indicatingme.png"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  w-full gap-[80px] max-w-screen-xl px-20 mt-12 mx-20">
    <div className=" w-full  max-w-xs md:max-w-xl lg:max-w-xl xl:max-w-2xl border-7 border-[#6699CC] overflow-hidden rounded-xl shadow-xl">
      <img 
        src={RumelPhoto} 
        alt="Naimur Rahman" 
        className="min-h-[500px] min-w-full object-cover "
      />
    </div>
    <div className="md:ml-16 text-center md:text-left max-w-md">
      <img
      className="w-30 h-30 object-cover "
      src={IndicatingMe}/>
      <h1 className="text-3xl md:text-4xl font-bold text-[#1F75FE]">Hey, I'm Naimur Rahman</h1>
      <p className="mt-2 text-gray-600 leading-relaxed">
        Welcome to my portfolio! I am <span className="font-semibold text-blue-600">Naimur Rahman</span>, an ambitious undergraduate 
        passionate about Artificial Intelligence, problem-solving, product planning, and development.
      </p>
      <div className="mt-3 flex items-center justify-center md:justify-start">
        <a
          href="/path-to-your-cv.pdf"
          download
          className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          <span className="font-medium">Download CV</span>
          <img src={Download} alt="Download" className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Home;
