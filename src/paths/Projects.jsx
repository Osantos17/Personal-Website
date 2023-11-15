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
                <a href="#"><img className="campingLogo" src="/assets/camping.jpg"></img></a>
              </div>
              <div className="col">
                <a href="#"><img className="aframeLogo" src="/assets/Aframe.jpg"></img></a>
                <p className="inProgress">IN PROGRESS</p>
              </div>
            </div>
          </div>
        </div>
      </LogoContainerContent>
    </div>
  )
}