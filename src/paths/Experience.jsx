import "./Experience.css"

export function Experience () {
  return(
    <div className="experienceContainer">
      <div className="experiencePage">
        <div className="skills ">
          <h5 className="resumeHeader">SKILLS</h5>
          <div className="horizontalLine"></div>
          <div className="skillsBody">
            <span className="skillsLine"><strong className="bodyHeaader">LANGUAGES: </strong>Javascript, Python, C#, HTML, CSS, Ruby</span>
            <br />
            <span className="skillsLine"><strong className="bodyHeaader">FRAMEWORK/LIBRARIES: </strong>React, .NET, Bootstrap, Ruby on Rails</span>
            <br />
            <span className="skillsLine"><strong className="bodyHeaader">DATABASE/TOOLS: </strong>Postgres, APIs, Git, GitHub</span>
          </div>  
        </div>
        <div className="education">
          <h5 className="resumeHeader">EDUCATION</h5>
          <div className="horizontalLine"></div>
          <div className = "educationBody">
            <div className="bootcamp row">
              <div className="bodyHeaader col-auto me-auto">ACTUALIZE CODING BOOTCAMP | CERTIFICATE IN FULL STACK WEB DEVELOPMENT</div><div className="dates col-auto">Jul 2023 - Oct 2023</div>
            </div>
            <div className="details">
            A four-month full-stack web development bootcamp. Core technologies included Javascript, Ruby, Rails, and React.js. Special emphasis on API-driven development, version control with Git, professional tooling, team collaboration, and continual learning.
            </div>
            <div className="row">
              <div className="bodyHeaader col-auto me-auto">
                UNIVERSITY OF SAN FRANCISCO | BACHELOR OF ARTS IN ARCHITECTURE AND COMMUNITY DESIGN
              </div>
              <div className="dates col-auto">
                2014
              </div>
            </div>
          </div>  
        </div>
        <div className="employment">
          <h5 className="resumeHeader">EMPLOYMENT</h5>
          <div className="horizontalLine"></div>
          <div className="employmentBody ">
            <div className="desEmployment row ">
              <div className="bodyHeaader col-auto me-auto">
                DES ARCHITECTS + ENGINEERS
              </div>
              <div className="dates col-auto">
                Jan 2017 - Jun 2023
              </div>
            </div>
            <div className="drafter row">
              <div className="bodyHeaader2 col-auto me-auto">
                LEAD DRAFTER | BIM COORDINATOR
              </div> 
              <div className="dates col-auto">
                Jan 2020
              </div>
            </div>  
            <div className="DES">
              <div className="desDetails">
                - Produced 3D models for office wide use< br />
                - Lead Revit instructor for 150 person office< br />
                - Managed cloud models/worksharing, collaboration/data management products< br />
                - Guide team to create and complete design and construction documents< br /> 
              </div>
              <div className="designer row">   
                <div className="bodyHeaader2 col-auto me-auto">
                  DESIGNER
                </div> 
                <div className="dates col-auto">
                  Jan 2017
                </div>
              </div>
              <div className="desDetails">
                - Design multi-page layouts for city/clients showing Architectural design intent<br />
                - Collaborate with clients to establish a design direction<br />
                - Directly oversaw the renderings produced by the graphics team<br />
                - Sketch, brainstorm and critique with design team<br />
              </div>
            </div>  
            <div className="row">
              <strong className="bodyHeaader col-auto me-auto">
                CSDA DESIGN GROUP
              </strong> 
              <div className="dates col-auto">
                Jun 2014 - Dec 2017
              </div>
            </div>
            <div className="CSDA">
              <div className="desDetails">
                - Research and implement add-ins for Revit users<br />
                - Generate 3-D building from illustrations and concepts<br />
              </div>
            </div>  
          </div>
        </div>
      </div>  
    </div>
  )
}