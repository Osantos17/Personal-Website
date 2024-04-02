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
                <button onClick = {() => toggleOpen ("projects")} className="index projects col-3 col-sm-3"><span>WEB DESIGN</span></button>
                <button onClick={() => toggleOpen ("experience")} className="index experience col-3 col-sm-3"><span>EXPERIENCE</span></button>
                <button onClick={() => toggleOpen ("interests")} className="index col-3 col-sm-3"><span>PROJECTS</span></button>
              </div>
            </div>
            <div className="homeLine"></div>
            <div className="detailBody">
              {clickControl.aboutMe && (
              <div className='myAboutMe'>
                <h6>ABOUT ME</h6>
                <p>
                  My name is Orlando Santos. Since the inception of my architectural journey, I have been captivated by the technological advancements that empower architects with innovative tools. This fascination propelled me to master all facets of Autodesk Revit and its complementary technologies. Eager to expand my expertise, I embarked on the journey of mastering Revit automation.
                  <br /><br />

                  Enrolling in the Actualize coding bootcamp was a pivotal decision. Initially driven by personal ambition, I quickly realized the immense potential of integrating coding skills into the realm of Building Information Modeling (BIM). Since obtaining my certification, I have been fervently exploring Python, a versatile programming language renowned for its applications in Revit automation.

                  <br /><br />

                  Currently preparing for the ARE 5.0 exams, my career aspiration is to become a Data Center Architect.  By combining my proficiency in Revit with programming, I aspire to not only elevate my own capabilities but also empower my peers. I am poised and enthusiastic to embark on this transformative chapter in my professional journey.
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
                <p>
                  During my career as an Architect I have excelled in the BIM space, creating complex families applying templates and filters to improve Revit project development. My plan is now to take it even a step further and implement Revit automation in order to elevate my impact on projects.
                </p>
                <p>
                  I started my career as a designer and immediatly took on the role of the Revit person in the office. I started creting office wide template views and a custom family library. After 2.5 years I moved onto to my next role, I was brought on to teach the design team Revit to create ready to use Revit models for production. During my time on the design team I worked hand and hand with the graphics team, prepping models for IFC export for renderings in 3D Max. After 2 years in that role I decided to transfer to the production department which allowed me to maximize my skill set. 
                </p> 
                <p>
                  Once in production I took on the role of BIM Coordinator put in charge of creating and managing the Revit Family library, managing view templates, filters, stairs, rails and the go-to trouble shooter for anything Revit.
                </p>
              </div>)}
              {clickControl.interests && (
              <div className="myinterests">
                <h6 className="projectName">SOUTHLINE</h6>
                <p> Design in woodworking requires meticulous planning and the ability to envision the end product. This attention to detail finds its reflection in frontend coding, where developers craft user interfaces that elegantly merge visual appeal with practical functionality. Both woodworking and software engineering demand a harmonious blend of creativity and precision to yield a polished final product. The principles of thoughtful design and scrupulous execution resonate universally in these disciplines.
                </p>
                <h6 className="projectName">HARBOR VIEW</h6>
                <p> My experience in architecture significantly honed my design skills, instilling spatial awareness and the art of crafting functional, aesthetically pleasing spaces. Similarly, software development requires the creation of logical and user-friendly digital interfaces. In both domains
                </p>
                <h6 className="projectName">MOFFETT TOWERS II</h6>
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