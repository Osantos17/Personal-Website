import "./Experience.css"

export function Experience () {
  return(
    <div className="rightBackground">
      <div className="experiencePage">
        <div className="skills ">
          <h5 className="resumeHeader">SKILLS</h5>
          <div className="horizontalLine"></div>
          <div className="skillsBody">
            <span className="skillsLine"><strong className="bodyHeaader">LANGUAGES: </strong>Javascript, HTML, CSS, Ruby</span>
            <br />
            <span className="skillsLine"><strong className="bodyHeaader">FRAMEWORK/LIBRARIES: </strong>React, Bootstrap, Ruby on Rails</span>
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
            <p className="details">
            A four-month full-stack web development bootcamp. Core technologies included Javascript, Ruby, Rails, and React.js. Special emphasis on API-driven development, version control with Git, professional tooling, team collaboration, and continual learning.
            </p>
            <span><strong className="bodyHeaader">UNIVERSITY OF SAN FRANCISCO | BACHELOR OF ARTS IN ARCHITECTURE AND COMMUNITY DESIGN</strong>2014</span>
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
                DRAFTER III | BIM COORDINATOR
              </div> 
              <div className="dates col-auto">
                Jan 2020
              </div>
            </div>  
            <div className="DES">
              <div className="desDetails">
                Produced 3D models for office wide use< br />
                Lead Revit instructor for 150 person office< br />
                Managed cloud models/worksharing, collaboration/data management products< br />
                Guide team to create and complete design and construction documents< br /> 
              </div>   
              <span><strong className="bodyHeaader">DESIGNER</strong> Jan 2017</span>
              <ul>
                <span>Design multi-page layouts for city/clients showing Architectural design intent</span>
                <span>Collaborate with clients to establish a design direction</span>
                <span>Sketch, brainstorm and critique with design team</span>
              </ul>
            </div>  
            <span><strong className="bodyHeaader">CSDA DESIGN GROUP</strong> Jun 2014 - Dec 2017</span>
            <div className="CSDA">
              <ul>
                <span>Research and implement add-ins for Revit users</span>
                <span>Generate 3-D building from illustrations and concepts</span>
              </ul>
            </div>  
          </div>
        </div>
      </div>  
    </div>
  )
}