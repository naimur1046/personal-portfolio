import Illustration from "../assets/illustration.png";
import User from "../assets/user.png"
import Email from "../assets/email.png"
import Phone from "../assets/phone.png"
import Message from "../assets/message.png"
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-25 px-8 bg-[#E8EEFC]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        <span className="text-black">Get In</span>{" "}
        <span className="text-[#6B28FF]">Touch</span>
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:w-1/2 h-80 md:h-auto md:min-h-[400px] overflow-hidden rounded-l-xl">
          <img
            src={Illustration}
            alt="Contact illustration"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right form */}
        <div className="md:w-1/2 p-8 flex flex-col space-y-6">
          <form className="flex flex-col space-y-5">
            <div className="relative flex items-center w-full">
              <img src={User} alt="Name Logo" className="absolute left-3 w-7 h-7" />
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-12 p-3 bg-[#E8F0FF] font-semibold text-lg text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B28FF]"
              />
            </div>
            <div className="relative flex items-center w-full">
              <img src={Email} alt="Name Logo" className="absolute left-3 w-7 h-7" />
              <input
                type="text"
                placeholder="Email"
                className="w-full pl-12 p-3 bg-[#E8F0FF] font-semibold text-lg text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B28FF]"
              />
            </div>
            <div className="relative flex items-center w-full">
              <img src={Phone} alt="Name Logo" className="absolute left-3 w-7 h-7" />
              <input
                type="text"
                placeholder="Mobile"
                className="w-full pl-12 p-3 bg-[#E8F0FF] font-semibold text-lg text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B28FF]"
              />
            </div>
            <div className="relative w-full">
              <img
                src={Message}
                alt="Message Icon"
                className="absolute top-4 left-4 w-8 h-8 text-gray-500"
              />
              <textarea
                placeholder="Message"
                className="w-full pl-14 pr-4 pt-4 pb-3 bg-[#E8F0FF] font-semibold text-lg text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B28FF] h-36 resize-none"
              />
            </div>
            <button
              type="submit"
              className="self-end bg-[#6B28FF] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#5820c9] transition-shadow shadow-lg flex items-center space-x-2"
            >
              <span>Submit</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
