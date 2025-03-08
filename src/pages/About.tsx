import ResearchAndDevelopment from "../assets/research-and-development.png"
import Development from "../assets/development.png"
import CompetitiveProgramming from "../assets/competitive-programming.png"

const About = () => {
  return (
    <div className="w-full flex flex-row">
      <div>
        <h1>
          About Me
        </h1>
      </div>
      <div className="flex flex-col">
        <div>
          <img src={Development}/>
          <p>
            I was Trainee Software Engineer in OnnoRokom Projukti limited in Software Development team.
          </p>
        </div>
      </div>
      <div>
        <img src={ResearchAndDevelopment}/>
        <p>I am currently in Resarech & Development team in the OnnoRokom Projukti Litmited.</p>
      </div>
      <div>
        <img src={CompetitiveProgramming}/>
        <p>
          I have solved about 1500 problems in various online jaduge. 
        </p>
      </div>
      <div>
        <img />
        <p>
          
        </p>
      </div>
    </div>
  )
}

export default About