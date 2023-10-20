import "./Experience.css"

export function Experience () {
  return(
    <div className="rightBackground">
      <div className="experiencePage">
        <div className="skills ">
          <h5>SKILLS</h5>
          <div className="horizontalLine"></div>
          <span><strong>LANGUAGES:</strong> Javascript, HTML, CSS, Ruby</span>
          <br />
          <span><strong>FRAMEWORK/LIBRARIES: </strong>React, Bootstrap, Ruby on Rails</span>
          <br />
          <span><strong>DATABASE/TOOLS: </strong>Postgres, APIs, Git, GitHub</span>
        </div>
        <div className="education">
          <h5>EDUCATION</h5>
          <div className="horizontalLine"></div>
          <span><strong >ACTUALIZE CODING BOOTCAMP | CERTIFICATE IN FULL STACK WEB DEVELOPMENT</strong>Jul 2023 - Oct 2023</span>
          <p className="details">A four-month full-stack web development bootcamp. Core technologies included Javascript, Ruby, Rails, and React.js. Special emphasis on API-driven development, version control with Git, professional tooling, team collaboration, and continual learning.</p>
          <span><strong>UNIVERSITY OF SAN FRANCISCO | BACHELOR OF ARTS IN ARCHITECTURE AND COMMUNITY DESIGN</strong><p></p>2014</span>
        </div>
        <div className="experience">
          <h5>EXPERIENCE</h5>
          <div className="horizontalLine"></div>
          <span><strong>DES ARCHITECTS + ENGINEERS</strong> Jan 2017 - Jun 2023</span>
          <span><strong>JOB CAPTAIN | BIM COORDINATOR</strong> Jan 2020</span>
          <ul>
            <p className="details">Produced 3D models for office wide use</p>
            <p className="details">Lead Revit instructor for 150 person office</p>
            <p className="details">Managed cloud models/worksharing, collaboration/data management products</p>
            <p className="details">Guide team to create and complete design and construction documents</p>
          </ul>
          <span><strong>DESIGNER</strong> Jan 2017</span>
          <ul>
            <p>Design multi-page layouts for city/clients showing Architectural design intent</p>
            <p>Collaborate with clients to establish a design direction</p>
            <p>Sketch, brainstorm and critique with design team</p>
          </ul>
          <span><strong>CSDA DESIGN GROUP</strong> Jun 2014 - Dec 2017</span>
          <ul>
            <p>Research and implement add-ins for Revit users</p>
            <p>Generate 3-D building from illustrations and concepts</p>
          </ul>
        </div>
      </div>  
    </div>
  )
}