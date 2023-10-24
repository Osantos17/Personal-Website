import "./Experience.css"

export function Experience () {
  return(
    <div className="rightBackground">
      <div className="experiencePage">
        <div className="skills ">
          <h5 className="resumeHeader">SKILLS</h5>
          <div className="horizontalLine"></div>
          <div className="skillsBody">
            <span><strong className="bodyHeaader">LANGUAGES: </strong>Javascript, HTML, CSS, Ruby</span>
            <br />
            <span><strong className="bodyHeaader">FRAMEWORK/LIBRARIES: </strong>React, Bootstrap, Ruby on Rails</span>
            <br />
            <span><strong className="bodyHeaader">DATABASE/TOOLS: </strong>Postgres, APIs, Git, GitHub</span>
          </div>  
        </div>
        <div className="education">
          <h5 className="resumeHeader">EDUCATION</h5>
          <div className="horizontalLine"></div>
          <div className = "educationBody">
            <span className="bootcamp">
              <span><strong className="bodyHeaader">ACTUALIZE CODING BOOTCAMP | CERTIFICATE IN FULL STACK WEB DEVELOPMENT</strong><h6 className="dates">Jul 2023 - Oct 2023</h6></span>
            </span>
            <div className="details">A four-month full-stack web development bootcamp. Core technologies included Javascript, Ruby, Rails, and React.js. Special emphasis on API-driven development, version control with Git, professional tooling, team collaboration, and continual learning.</div>
            <span><strong className="bodyHeaader">UNIVERSITY OF SAN FRANCISCO | BACHELOR OF ARTS IN ARCHITECTURE AND COMMUNITY DESIGN</strong>2014</span>
          </div>  
        </div>
        <div className="employment">
          <h5 className="resumeHeader">EMPLOYMENT</h5>
          <div className="horizontalLine"></div>
          <div className="employmentBody">
            <span><strong className="bodyHeaader">DES ARCHITECTS + ENGINEERS</strong> Jan 2017 - Jun 2023</span>
            <div><strong className="bodyHeaader">JOB CAPTAIN | BIM COORDINATOR</strong> Jan 2020</div>
            <div className="DES">
              <ul>
                <span className="details">Produced 3D models for office wide use</span>
                <span className="details">Lead Revit instructor for 150 person office</span>
                <span className="details">Managed cloud models/worksharing, collaboration/data management products</span>
                <span className="details">Guide team to create and complete design and construction documents</span>
              </ul>
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