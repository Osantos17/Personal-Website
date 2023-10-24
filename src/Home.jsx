import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import "./Home.css"
import { useState } from "react"
import { AboutMe } from "./paths/AboutMe.jsx"
import { Experience } from "./paths/Experience.jsx"
import { Interests } from "./paths/Interests.jsx"
import { Projects } from "./paths/Projects.jsx"

export function Home () {

  const [ showCopyMessage, setShowCopyMessage ] = useState(false);

  const [ clickControl, setClickControl ] = useState ({
    aboutMe: true,
    projects: false,
    experience: false,
    interests: false
  })

  const toggleOpen = (open) => {
    setClickControl((index) => ({
      ...Object.fromEntries(Object.keys(index).map((key) => [key, false])),
      [open]: true
    }))
  }

  const copyText = () => { 
    navigator.clipboard.writeText ("Santos.Orlando17@gmail.com"); 
    setShowCopyMessage(true);

    setTimeout (() => {
      setShowCopyMessage(false);
    }, 1000)
  }; 

  const AboutMeContent = styled.div`
  height: 74vh;
  width: 100%;
  overflow-y: scroll;
`;

  const ExperienceContent = styled.div`
  height: 20vh;
  width: 100%;
  overflow-y: scroll;
  `;

  const InterestContent = styled.div`
  height: 74vh;
  width: 100%;
  overflow-y: scroll;
  `;

  const ProjectContent = styled.div`
  height: 74vh;
  width: 100%;
  overflow-y: scroll;
  `;

  return (
    <div>
      <div className="homeBackground">
        <div className="leftBackground">
          <div className="directory">
            <div className="selected">
              <button onClick={() => toggleOpen ("aboutMe")} className="index"><span> ABOUT ME </span> </button>
              <button onClick = {() => toggleOpen ("projects")} className="index projects"><span>PROJECTS</span></button>
              <button onClick={() => toggleOpen ("experience")} className="index experience"><span>EXPERIENCE</span></button>
              <button onClick={() => toggleOpen ("interests")} className="index"><span>INTERESTS</span></button>
            </div>
            <div className="homeLine"></div>
            <div className="detailBody">
              {clickControl.aboutMe && (
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, assumenda molestiae. Veritatis dolorum error ducimus sit tenetur id quam unde corporis aliquid quis necessitatibus exercitationem dicta incidunt, a saepe assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur praesentium provident exercitationem, recusandae sunt quod consequatur perferendis totam ratione. Exercitationem, quasi sapiente repellat iure mollitia commodi repudiandae doloribus! Voluptatum, debitis?</p> )}
              {clickControl.projects && (
              <div className="myapps">
                <h6>CAMPING PLANNER</h6>
                <p>This project was my capstone during my enrollment in the Actualize Bootcamp. It is a web application built using React, Ruby, JavaScript, HTML, CSS, and Bootstrap. The core idea behind this project was to create a user-friendly platform for searching and saving U.S. National Parks. Planning outdoor trips often comes with the challenge of booking campsites well in advance, sometimes up to six months prior. &ldquo;My Camping Planner&ldquo; was designed to solve this issue by allowing users to browse information related to their chosen park and save it for future reference. </p>
                <h6>A-FRAME</h6>
                <p>Currently, I am working on a Surf Forecast App developed using React, Ruby, JavaScript, HTML, CSS, and Bootstrap. Surfing is one of my passions, and I have noticed a need within the surfing community for a more straightforward surf forecast app. This application leverages geolocation and provides users with a list of nearby surf spots along with ratings based on tides and weather data from various APIs. It offers real-time data and a 7-day forecast, along with rendered tide charts and selected map data. My end goal is to make this app available to surfers worldwide, providing them with essential information to catch the perfect wave.</p>
              </div> )}
              {clickControl.experience && (
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, assumenda molestiae. Veritatis dolorum error ducimus sit tenetur id quam unde corporis aliquid quis necessitatibus exercitationem dicta incidunt, a saepe assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur praesentium provident exercitationem, recusandae sunt quod consequatur perferendis totam ratione. Exercitationem, quasi sapiente repellat iure mollitia commodi repudiandae doloribus! Voluptatum, debitis?</p> )}
             {clickControl.interests && (
              <div className="myinterests">
                <h6>WOODWORKING</h6>
                <p> Design in woodworking requires meticulous planning and the ability to envision the end product. This attention to detail finds its reflection in frontend coding, where developers craft user interfaces that elegantly merge visual appeal with practical functionality. Both woodworking and software engineering demand a harmonious blend of creativity and precision to yield a polished final product. The principles of thoughtful design and scrupulous execution resonate universally in these disciplines.
                </p>
                <h6>ARCHITECTURE</h6>
                <p> My experience in architecture significantly honed my design skills, instilling spatial awareness and the art of crafting functional, aesthetically pleasing spaces. Similarly, software development requires the creation of logical and user-friendly digital interfaces. In both domains, professionals must engage in critical thinking to translate ideas into well-thought-out solutions. The synergy between meticulous architectural planning and software development yields intuitively designed spaces, whether in the physical or virtual realm.
                </p>
                <p> All the architecture images featured represent projects in which I played an integral role. For the renderings, I constructed the models in Revit, subsequently rendered in 3DMax by the graphics department.</p>
              </div> )}
            </div>
          </div>
          <button onClick= {copyText} className="email index"><span>SANTOS.ORLANDO17@GMAIL.COM</span></button>
          {showCopyMessage && (
          <div className="copiedAlert">Copied!</div>
          )}
          <a href='https://github.com/Osantos17'><img className="git" src="./src/assets/git.png"></img></a>
        </div>
        <div className='rightContent'>
          {clickControl.aboutMe && (
          <AboutMeContent>
            <AboutMe />
          </AboutMeContent>
          )}
          {clickControl.experience && (
          <ExperienceContent>
            <Experience />
          </ExperienceContent>
          )}
          {clickControl.interests && (
          <InterestContent>
            <Interests />
          </InterestContent>
          )}
          {clickControl.projects && (
          <ProjectContent>
            <Projects />
          </ProjectContent>
          )}
        </div> 
      </div>
    </div>
  )
}