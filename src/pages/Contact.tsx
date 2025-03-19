import Signature from "../assets/signature.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Medium from "../assets/medium.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 bg-[#F8F8F8]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#ee6cb8] text-center mb-12">
        Get in Touch
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-4xl justify-between items-center gap-12">
        {/* Contact Info */}
        <div className="flex flex-col items-center text-center">
          <img src={Signature} alt="Signature" className="h-24 w-24 mb-4" />
          <p className="text-2xl font-bold text-[#13C9D6]">Naimur Rahman</p>
          <p className="text-gray-500 text-sm">© 2025. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <img src={Facebook} alt="Facebook" className="h-10 cursor-pointer hover:opacity-75 transition" />
            <img src={Instagram} alt="Instagram" className="h-10 cursor-pointer hover:opacity-75 transition" />
            <img src={Medium} alt="Medium" className="h-10 cursor-pointer hover:opacity-75 transition" />
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col w-full max-w-md space-y-5 bg-white p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee6cb8]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee6cb8]"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee6cb8]"
          />
          <textarea
            placeholder="Your Message..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee6cb8] h-36 resize-none"
          ></textarea>
          <button className="w-full bg-[#ee6cb8] text-white py-3 rounded-md font-semibold hover:bg-[#d65ca8] transition-all shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
