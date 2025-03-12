import ResearchAndDevelopment from "../assets/research-and-development.png";
import Development from "../assets/development.png";
import CompetitiveProgramming from "../assets/competitive-programming.png";
import Institute from "../assets/institute.png";
import EventOrganized from "../assets/project-management.png";
import Project from "../assets/project-idea.png";
import ML from "../assets/ml.png"

const aboutItems = [
  {
    img: Development,
    text: "I was a Trainee Software Engineer at OnnoRokom Projukti Limited in the Software Development team.",
  },
  {
    img: ResearchAndDevelopment,
    text: "I am currently in the Research & Development team at OnnoRokom Projukti Limited.",
  },
  {
    img: CompetitiveProgramming,
    text: "I have solved about 1500 problems on various online judges.",
  },
  {
    img: Institute,
    text: "Student of Software Engineering, SUST.",
  },
  {
    img: EventOrganized,
    text: "I have organized 40+ events.",
  },
  {
    img: Project,
    text: "Completed many projects in industries and university.",
  },
  {
    img: ML,
    text: "Passionate about Machine Learning and NLP. Currently working on a research paper on Sentiment Analysis.",
  },
];


const About: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">About Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <img src={item.img} alt="About Icon" className="w-20 h-20 mb-4" />
            <p className="text-gray-700 text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
