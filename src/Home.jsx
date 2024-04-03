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

                  Enrolling in the Actualize coding bootcamp was a pivotal decision. Initially driven by personal ambition, I quickly realized the immense potential of integrating coding skills into the realm of Building Information Modeling (BIM). Since obtaining my certification, I have been exploring Python and C#, a versatile programming language renowned for its applications in Revit automation.

                  <br /><br />

                  Currently preparing for the ARE 5.0 exams, my career aspiration is to become a Data Center Architect. By combining my proficiency in Revit with programming, I aspire to not only elevate my own capabilities but also empower my peers. I am poised and enthusiastic to embark on this new chapter in my professional journey.
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
                  Throughout my tenure as an Architect, I have excelled in the BIM space, adeptly crafting complex families, applying templates, and filters to streamline Revit project development. Now, I am poised to take it even a step further and implement Revit automation, enhancing my impact on project outcomes.
                </p>
                <p>
                  Embarking on my career journey as a designer, I swiftly assumed the mantle of the office's go-to Revit expert. I started creating office-wide template views and curated a bespoke family library, laying the foundation for efficient project workflows. Transitioning roles after 2.5 years, I undertook the responsibility of instructing the design team in Revit, equipping them with the skills to generate production-ready models. Collaborating closely with the graphics team, I facilitated IFC exports for 3D Max renderings, refining our visual presentation capabilities. With a transition to the production department, I embraced the role of BIM Coordinator, overseeing the management of the Revit Family library, view templates, and filters. From steering the modeling strategy for large-scale projects to serving as the go-to troubleshooter, I thrived in every facet of Revit utilization.
                </p> 
                <p>
                  Now I am looking forward to taking another step in expertise in Revit and applying automation through programming. By taking the experience I gained from my completion of the Actualize Coding Bootcamp, I am excited to begin applying my new skillset. I am currently looking for a new role that shares my beliefs in the pursuit of technological innovation.
                </p>
              </div>)}
              {clickControl.interests && (
              <div className="myinterests">
                <h6 className="projectName">SOUTHLINE</h6>
                <p> 
                  Having six 6-7 Story Office/Tech/Life Science buildings, 3 garages, and an amenities building. Phase 1 only consisted of two buildings, amenities, and a parking garage. While coordinating phase 1, we still needed to consider the future phases. For this project, I set up project and site coordinates, the modeling approach for the office buildings, loading/maintaining all families, and many other Revit duties. Throughout the lifespan of this project, I would spend most of my time in BIM 360 coordinating uploads and consumption, folder structure, and permissions.
                </p>
                <h6 className="projectName">HARBOR VIEW</h6>
                <p> 
                  This site contains three 6-7 story buildings, a garage, and an amenities building. I took on the usual BIM tasks of setting up the site coordinates and coordinating that with consultants, BIM 360 set up, and selecting teams for each structure. The design of these buildings had a lot of curvature compared to typical buildings, so a lot of my time for this campus was spent ensuring accuracy and assisting the teams. A highlight of mine is creating an accurate 3D exterior pattern which consisted of 4 patterns, 3 colors on a curved surface; I managed to achieve this with a railing. 
                </p>
                <h6 className="projectName">MOFFETT TOWERS II</h6>
                <p> 
                  Five 8-story buildings, three garages, and a single amenities reside on this site. For this project, I coordinated the garages and a hotel that was unfortunately put on permanent hold at 95% CD. This was prior to BIM 360, so we used plug-ins to clean our models and coordinate and using Box as our folder structure to coordinate with our consultants. 
                </p>
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