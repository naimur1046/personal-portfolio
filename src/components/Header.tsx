import { useState } from "react";
import Hamburger from '../assets/hamburger.png'
import Close from '../assets/close.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#4599B4] shadow-lg">
      <div className="container mx-auto pl-5 pr-20 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white border-3 rounded-2xl px-4 py-2">Naimur Rahman</h1>
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Work", "Blog", "Contact", "My Interest"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-semibold text-white hover:text-[#F0F0F0]  shadow-white transition">
              {item}
            </a>
          ))}
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-xl">
        {isOpen ? (
          <img src={Close} alt="Close" className="w-8 h-8 cursor-pointer transition-all duration-300" />
          ) : ( <img src={Hamburger} alt="Hamburger" className="w-8 h-8 cursor-pointer transition-all duration-300" />
         )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Work", "Blog", "Contact", "My Interest"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-500 transition">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
