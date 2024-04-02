import "./AboutMe.css"
import styled from "styled-components";

export function AboutMe () {

  const AboutMeBackground = styled.div`
  height: 90vh
  `;
  
  return (
    <div className="aboutMeBackground">
      <AboutMeBackground>
      <div className="aboutMe">
        <div className="profileContainer">
          <div className="profile">
            <img className="profilePic" src="/assets/Profile-white.jpg" alt="profile pic" />
          </div>
          <h2 className="name">ORLANDO</h2>
          <h3 className="titles">BIM / DESIGNER / DEVELOPER</h3>
        </div>
        <div className="logoContainer">
          <div className="written">
            <h6>[ BUILT WITH ]</h6>
          </div>
          <div className="codeLogos">
            <div className="grid text-center">
              <img className="logo" src='/assets/js.svg' alt="javascript" />
              <img className="logo" src='/assets/html.svg' alt="html" />
              <img className="logo react" src='/assets/react.svg' alt="react" />
              <img className="logo" src='/assets/css.svg' alt="css" />
              <img className="logo" src='/assets/bootstrap.png' alt="bootstrap" />
              <img className="logo" src='/assets/photoshop.svg' alt="photoshop" />
            </div>
          </div>
        </div>
      </div>
      </AboutMeBackground>
    </div>  
  )
}