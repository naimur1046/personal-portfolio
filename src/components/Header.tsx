import { useState } from "react";
import Hamburger from '../assets/hamburger.png'
import Close from '../assets/close.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Naimur Rahman</h1>
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Work", "Blog", "Contact", "My Interest"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-500 transition">
              {item}
            </a>
          ))}
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 text-xl">
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
