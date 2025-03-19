const Projects = () => {
  return (
    <div className="w-full mx-auto px-20 py-12 bg-[#F7E8E4]">
      <h1 className="text-5xl font-bold text-[#F7537B] text-center mb-15 ">
        Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-gray-900 border-4 border-[#CC909B] shadow-lg rounded-2xl px-10 py-8 transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#FA8072] dark:text-white text-center pt-2">
            Private Community Chat Application
          </h2>
          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 text-center pt-1 pb-2">
            OnnoRokom Projukti Limited | Software R & D Intern
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            <strong>Technologies:</strong> ASP.NET, React, TypeScript, Ant Design, Redux, Tailwind CSS, ORM, WebSockets
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ Developed a real-time chat application for seamless community interactions.</li>
            <li>✅ Designed and implemented a responsive UI using React, TypeScript, and Tailwind CSS.</li>
            <li>✅ Managed client-side state with Redux for optimal performance.</li>
            <li>✅ Built the message controller for real-time communication using WebSockets in ASP.NET.</li>
            <li>✅ Gained industrial experience in full-stack development and enterprise system integration.</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 border-4 border-[#CC909B] shadow-lg rounded-2xl px-10 py-8 transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#FA8072] dark:text-white text-center pt-2">
            Meeting Room Booking System
          </h2>
          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 text-center pt-1 pb-2">
            OnnoRokom Projukti Limited | Software Developer Intern
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            <strong>Technologies:</strong> ASP.NET Core MVC, Razor Pages, Bootstrap, MSSQL, Cookie-Based Authentication, FullCalendar
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ Developed a system to streamline meeting room reservations.</li>
            <li>✅ Built an Admin Panel for room and user management.</li>
            <li>✅ Designed a Client Panel for viewing and booking available rooms.</li>
            <li>✅ Integrated secure authentication using cookie-based authentication.</li>
            <li>✅ Enabled booking information sharing via QR codes and unique links.</li>
            <li>✅ Used FullCalendar for an intuitive and interactive scheduling experience.</li>
            <li>✅ Gained hands-on experience in ASP.NET Core MVC and enterprise system development.</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 border-4 border-[#CC909B] shadow-lg rounded-2xl px-10 py-8 transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#FA8072] dark:text-white text-center pt-2">
            Face Attendance System
          </h2>
          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 text-center pt-1 pb-2">
            OnnoRokom Projukti Limited | Software R & D Intern
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            <strong>Technologies:</strong> Python, OpenCV, DeepFace, NumPy, Flask, SQLite
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ Implemented a real-time face recognition-based attendance system.</li>
            <li>✅ Captured video streams from a CCTV camera and converted them into frames using OpenCV.</li>
            <li>✅ Compared extracted frames with pre-registered images for attendance marking.</li>
            <li>✅ Integrated DeepFace for advanced facial recognition and anti-spoofing detection.</li>
            <li>✅ Developed a secure backend using Flask and SQLite for attendance record storage.</li>
            <li>✅ Built a user-friendly interface to monitor attendance status and logs.</li>
            <li>✅ Gained practical experience in computer vision, deep learning, and biometric authentication.</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 border-4 border-[#CC909B] shadow-lg rounded-2xl px-10 py-8 transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-[#FA8072] dark:text-white text-center pt-2">
            Blood Bank Management System
          </h2>
          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 text-center pt-1 pb-2">
            Red Crescent Blood Bank, Sylhet | University Project
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            <strong>Technologies:</strong> React, TailwindCSS, CSS, HTML, Node.js, Express, MySQL
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ Developed a full-stack Blood Bank Management System in collaboration with the Red Crescent Society.</li>
            <li>✅ Collected and analyzed requirements from the Sylhet Branch to design the system architecture.</li>
            <li>✅ Designed and implemented an intuitive frontend using React and TailwindCSS.</li>
            <li>✅ Built a secure backend with Node.js, Express, and MySQL for efficient data management.</li>
            <li>✅ Enabled normal users to find required blood, locate donors, and access contact information.</li>
            <li>✅ Developed an admin panel to manage donor data, cross-matching, blood testing, and storage records.</li>
            <li>✅ Integrated cold storage and distributed blood data tracking for enhanced transparency.</li>
            <li>✅ Ensured seamless user experience with a responsive design and optimized database queries.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
