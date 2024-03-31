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
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  `;

  const ExperienceContent = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  `;

  const InterestContent = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  `;

  const ProjectContent = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  `;

  return (
    <div>
      <div className="homeBackground">
        <div className='backgroundContainer'>
          <div className="leftBackground">
            <div className="selected ">
              <div className="indexHeader row align-items-start">
                <button onClick={() => toggleOpen ("aboutMe")} className="index col-3 col-sm-3"><span>ABOUT ME</span></button>
                <button onClick = {() => toggleOpen ("projects")} className="index projects col-3 col-sm-3"><span>PROJECTS</span></button>
                <button onClick={() => toggleOpen ("experience")} className="index experience col-3 col-sm-3"><span>EXPERIENCE</span></button>
                <button onClick={() => toggleOpen ("interests")} className="index col-3 col-sm-3"><span>INTERESTS</span></button>
              </div>
            </div>
            <div className="homeLine"></div>
            <div className="detailBody">
              {clickControl.aboutMe && (
              <div className='myAboutMe'>
                <h6>ABOUT ME</h6>
                <p>
                  Hi, my name is Orlando Santos. Since the inception of my architectural journey, I have been captivated by the technological    advancements that empower architects with innovative tools. This fascination led me to delve into the realm of software engineering, driven by a desire to understand the inner workings of these technologies.  <br /><br />

                  I then enrolled in Actualize coding bootcamp, throwing me into the world of full-stack web development and equipping me with the skills to adapt swiftly to emerging technologies. Taking this time to advance my knowledge in the software side I am ready to bring this new skillset and apply it to my already impressive skillset in Revit while learning new skills and applying them to improve not just myself but elevate my peers.
                </p> 
              </div>)}
              {clickControl.projects && (
              <div className="myapps">
                <h6>CAMPING PLANNER</h6>
                <p>This project was my capstone during my enrollment in the Actualize Bootcamp. It is a web application built using React, Ruby, JavaScript, HTML, CSS, and Bootstrap. The core idea behind this project was to create a user-friendly platform for searching and saving U.S. National Parks. Planning outdoor trips often comes with the challenge of booking campsites well in advance, sometimes up to six months prior. &ldquo;My Camping Planner&ldquo; was designed to solve this issue by allowing users to browse information related to their chosen park and save it for future reference. </p>
                <h6>A-FRAME</h6>
                <p>Currently, I am working on a Surf Forecast App developed using React, Ruby, JavaScript, HTML, CSS, and Bootstrap. Surfing is one of my passions, and I have noticed a need within the surfing community for a more straightforward surf forecast app. This application leverages geolocation and provides users with a list of nearby surf spots along with ratings based on tides and weather data from various APIs. It offers real-time data and a 7-day forecast, along with rendered tide charts and selected map data. My end goal is to make this app available to surfers worldwide, providing them with essential information to catch the perfect wave.</p>
              </div> )}
              {clickControl.experience && (
              <div className='myExperience'>
                <h6>EXPERIENCE</h6>
                <p>At Actualize Coding Bootcamp I underwent a transformative journey from a coding novice to an entry-level software developer. The curriculum, focused on full stack web development, employed technologies such as JavaScript, React, HTML, Ruby, Rails, CSS, SQL, and Git. This dynamic learning environment equipped me not only with specific technical skills but also instilled the ability to independently approach and master any software-related challenge.</p>
                <p>
                  My background in architecture has finely tuned my design prowess, cultivating spatial awareness and the craftsmanship of creating functional, aesthetically pleasing environments. This proficiency seamlessly aligns with the demands of software development, where the focus is on crafting intuitive and user-friendly digital interfaces.
                </p> 
              </div>)}
              {clickControl.interests && (
              <div className="myinterests">
                <h6>WOODWORKING</h6>
                <p> Design in woodworking requires meticulous planning and the ability to envision the end product. This attention to detail finds its reflection in frontend coding, where developers craft user interfaces that elegantly merge visual appeal with practical functionality. Both woodworking and software engineering demand a harmonious blend of creativity and precision to yield a polished final product. The principles of thoughtful design and scrupulous execution resonate universally in these disciplines.
                </p>
                <h6>ARCHITECTURE</h6>
                <p> My experience in architecture significantly honed my design skills, instilling spatial awareness and the art of crafting functional, aesthetically pleasing spaces. Similarly, software development requires the creation of logical and user-friendly digital interfaces. In both domains, professionals must engage in critical thinking to translate ideas into well-thought-out solutions. The synergy between meticulous architectural planning and software development yields intuitively designed spaces, whether in the physical or virtual realm.
                </p>
                <p> All the architecture images featured represent projects in which I played an integral role. For allt the renderings, I modeled the buildings in a 3D program. I would then collaborate with our graphics team produce renderings the models for our clients.</p>
              </div> )}
            </div>
            <div className="mySitesContainer">
              <h5 className="mySites">MY SITES</h5>
              <div className="container text-center">
                <div className="myLinks row">
                  <div className="col-3 col-sm-3">
                    <a href='https://github.com/Osantos17'><img className="connection git" src="/assets/git.png" alt="GitHub" /></a>
                  </div>
                  <div className="col-3 col-sm-3">
                    <a href='https://linkedin.com/in/orlandosantos17'><img className="connection link" src="/assets/linkedin.png" alt="LinkedIn" /></a>
                  </div>
                  <div className="col-3 col-md-3">
                    <span className="gmail" onClick={copyText}><img className ="connection gmailIcon" src="/assets/gmail.png" alt="Gmail" /></span>
                  </div>
                </div> 
              </div>
              {showCopyMessage && (
                  <div className="copiedAlert">Copied!</div>
                )} 
            </div>  
          </div>
          <div className='rightBackground'>
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
    </div>
  )
}