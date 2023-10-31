import "./Projects.css"

export function Projects () {
  return(
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
  )
}