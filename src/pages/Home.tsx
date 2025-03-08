import React from "react";
import RumelPhoto from "../assets/rumel.jpg";
import Download from "../assets/download.png"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 bg-gray-100">
      <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full shadow-lg">
        <img src={RumelPhoto} alt="Rumel" className="w-full h-full object-cover" />
      </div>
      <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Hey, I'm Naimur Rahman</h1>
        <p className="mt-4 text-gray-600 max-w-md leading-relaxed">
          Welcome to my portfolio! I am <span className="font-semibold text-blue-600">Naimur Rahman</span>, an ambitious undergraduate 
          passionate about Artificial Intelligence, problem-solving, product planning, and development.
        </p>
        <div className="mt-6 flex items-center justify-center md:justify-start">
          <a
            href="/path-to-your-cv.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <span>Download CV</span>
            <img src={Download} alt="Download" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
