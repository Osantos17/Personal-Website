import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import "./Home.css"
import { useState } from "react"
import { AboutMe } from "./paths/AboutMe.jsx"
import { Experience } from "./paths/Experience.jsx"
import { Interests } from "./paths/Interests.jsx"
import { Projects } from "./paths/Projects.jsx"

export function Home () {

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
  }; 

  const AboutMeContent = styled.div`
  height: 74vh;
  width: 100%;
  overflow-y: scroll;
`;

  const ExperienceContent = styled.div`
  height: 74vh;
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
              {clickControl.aboutMe && (
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, assumenda molestiae. Veritatis dolorum error ducimus sit tenetur id quam unde corporis aliquid quis necessitatibus exercitationem dicta incidunt, a saepe assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur praesentium provident exercitationem, recusandae sunt quod consequatur perferendis totam ratione. Exercitationem, quasi sapiente repellat iure mollitia commodi repudiandae doloribus! Voluptatum, debitis?</p> )}
              <br />
              <button onClick = {() => toggleOpen ("projects")} className="index projects"><span>PROJECTS</span></button>
              {clickControl.projects && (
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, assumenda molestiae. Veritatis dolorum error ducimus sit tenetur id quam unde corporis aliquid quis necessitatibus exercitationem dicta incidunt, a saepe assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur praesentium provident exercitationem, recusandae sunt quod consequatur perferendis totam ratione. Exercitationem, quasi sapiente repellat iure mollitia commodi repudiandae doloribus! Voluptatum, debitis?</p> )}
              <br />
              <button onClick={() => toggleOpen ("experience")} className="index experience"><span>EXPERIENCE</span></button>
              {clickControl.experience && (
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, assumenda molestiae. Veritatis dolorum error ducimus sit tenetur id quam unde corporis aliquid quis necessitatibus exercitationem dicta incidunt, a saepe assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur praesentium provident exercitationem, recusandae sunt quod consequatur perferendis totam ratione. Exercitationem, quasi sapiente repellat iure mollitia commodi repudiandae doloribus! Voluptatum, debitis?</p> )}
              <br />
              <button onClick={() => toggleOpen ("interests")} className="index"><span>INTERESTS</span></button>
              {clickControl.interests && (
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, assumenda molestiae. Veritatis dolorum error ducimus sit tenetur id quam unde corporis aliquid quis necessitatibus exercitationem dicta incidunt, a saepe assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur praesentium provident exercitationem, recusandae sunt quod consequatur perferendis totam ratione. Exercitationem, quasi sapiente repellat iure mollitia commodi repudiandae doloribus! Voluptatum, debitis?</p> )}
            </div>
          </div>
          <button onClick= {copyText} className="email index"><span>SANTOS.ORLANDO17@GMAIL.COM</span></button>
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


{/* <div className="rightBackground">
          <div className="profile">
            <img className="profilePic" src="src/assets/Profile-white.jpg" alt="profile pic" />
          </div>
          <div className="written">
            <h6>[ CODED WITH ]</h6>
          </div>
          <div className="codeLogos">
            <div className="grid text-center">
              <img className="logo" src='src/assets/js.svg' alt="javascript" />
              <img className="logo" src='src/assets/html.svg' alt="html" />
              <img className="logo react" src='src/assets/react.svg' alt="react" />
              <img className="logo" src='src/assets/css.svg' alt="css" />
              <img className="logo" src='src/assets/bootstrap.png' alt="bootstrap" />
            </div>
          </div>
            <h2 className="name">ORLANDO S.</h2>
            <h3 className="titles">DESIGNER / WOODWORKER / DEVELOPER</h3>
        </div> */}