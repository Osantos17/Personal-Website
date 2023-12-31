import "./Projects.css"
import styled from "styled-components";

export function Projects () {

  const LogoContainerContent = styled.div`
    height: 90vh;
  `;

  return(
    <div className="logoContainerContent">
      <LogoContainerContent>
        <div className="logoContainer">
          <div className="container text-center">
            <div className="row justify-content-evenly">
              <div className="col">
                <a href="https://park-planner.onrender.com/"><img className="campingLogo" src="/assets/camping.jpg"></img></a>
                <p className="desktop">DESKTOP VIEW ONLY</p>
              </div>
              <div className="col">
                <img className="aframeLogo" src="/assets/Aframe.jpg"></img>
                <p className="inProgress">IN PROGRESS</p>
              </div>
            </div>
          </div>
        </div>
      </LogoContainerContent>
    </div>
  )
}