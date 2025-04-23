import Illustration from "../assets/illustration.png";
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
            <div>
              <label className="block mb-1 text-gray-600">
                <i className="fas fa-user mr-2"></i>Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-[#E8F0FF] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B28FF]"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600">
                <i className="fas fa-envelope mr-2"></i>Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-[#E8F0FF] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B28FF]"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600">
                <i className="fas fa-phone mr-2"></i>Phone
              </label>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 bg-[#E8F0FF] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B28FF]"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600">
                <i className="fas fa-comment mr-2"></i>Message
              </label>
              <textarea
                placeholder="Message"
                className="w-full p-3 bg-[#E8F0FF] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B28FF] h-36 resize-none"
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
