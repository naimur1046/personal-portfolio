import { motion } from "framer-motion";

interface Experience {
  title: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Co-Convenor of Noakhali Association, SUST",
    description:
      "In the absence of a dedicated organization for Noakhali students at SUST, we took the initiative to establish the Noakhali Association, SUST. Throughout this journey, we encountered various challenges but remained committed to our vision...",
  },
  {
    title: "President of Noakhali Association, SUST",
    description:
      "I currently serve as the President of Noakhali Association, SUST, an organization with over 100 active members. During my tenure, I have successfully organized seven programs, engaging students, faculty members, and others...",
  },
  {
    title: "GS of Fusion Students Association, Subarnachar",
    description:
      "I currently serve as the General Secretary of Fusion Students Association, Subarnachar, a platform for public university students from my homeland. This organization is dedicated to raising awareness and supporting education...",
  },
  {
    title: "Ex. General Secretary of Ongikar",
    description:
      "I served as the General Secretary of Ongikar, a cultural organization at SUST. During my tenure, I worked to promote cultural growth and participated in poetry recitation events and cultural programs...",
  },
];

const OrganizingExperience = () => {
  return (
    <div className="w-full mx-auto px-6 md:px-20 py-16 bg-[#023020]">
      <h1 className="text-5xl font-bold text-white text-center mb-20">Organizing Experience</h1>

      {/* Vertical line */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#3e899c]" />

        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            const animatedBox = (
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  borderColor: ["#3b82f6", "#f97316", "#10b981", "#3b82f6"],
                }}
                transition={{
                  x: { duration: 0.6 },
                  borderColor: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="bg-[#EDF9FE] mx-10 p-6 rounded-lg shadow-xl border-5 w-[90%]"
              >
                <h2 className="text-2xl font-semibold mb-3 text-center text-[#069494]">{exp.title}</h2>
                <p className="text-gray-700 text-justify px-3">{exp.description}</p>
              </motion.div>
            );

            return (
              <div key={index} className="relative flex w-full items-center">
                {/* Left Box */}
                <div className="w-1/2 flex justify-end pr-6">
                  {isLeft && animatedBox}
                </div>

                {/* Dot in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 bg-[#069494] rounded-full z-10 border-5 border-white" />

                {/* Right Box */}
                <div className="w-1/2 flex justify-start pl-6">
                  {!isLeft && animatedBox}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrganizingExperience;
