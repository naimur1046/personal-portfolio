import React from "react";
import RumelPhoto from "../assets/rumel.png";
import Download from "../assets/download.png"
import IndicatingMe from "../assets/indicatingme.png"

const Home: React.FC = () => {
  return (
    <div className="w-full flex  md:flex-row items-center ml-30 my-12 mr-20">
    <div className="w-[32%]  max-w-xs md:max-w-xl lg:max-w-xl xl:max-w-2xl border-7 border-[#6699CC] overflow-hidden rounded-xl shadow-xl">
      <img 
        src={RumelPhoto} 
        alt="Naimur Rahman" 
        className="min-h-[500px] min-w-full object-cover "
      />
    </div>
    <div className="w-[68%] ml-30 text-left max-w-full">
      <img
      className="w-30 h-30 object-cover "
      src={IndicatingMe}/>
      <div className="w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1F75FE]">Hey, I'm Naimur Rahman</h1>
      <p className="mt-2 text-gray-600 text-xl leading-relaxed text-justify">
        I am an Associate Software Engineer at OnnoRokom Projukti Limited in the R&D Team, passionate about AI, 
        problem-solving, product planning, event handling, and development. With a strong foundation 
        in software engineering, I continuously explore new technologies to drive innovation and impactful results.
      </p>
      </div>
      <div className="mt-5 flex items-center justify-end md:justify-end">
        <a
          href="https://drive.google.com/drive/folders/1qZQtdmRlar6E0iSr1UnqutANnFNYo1lP?usp=sharing"
          download
          className="flex items-center gap-2 text-white pl-4  rounded-3xl border-5 border-[#318CE7] shadow-md hover:bg-[#00BFFF]  transition duration-300"
        >
          <span className="font-semibold text-xl  text-blue-500 hover:text-white">Download CV</span>
          <div className="rounded-full border-4 border-[#90E8FF]">
             <img src={Download} alt="Download" className="w-8 h-8 " />
          </div>
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Home;
