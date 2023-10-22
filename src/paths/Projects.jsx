import "./Projects.css"

export function Projects () {
  return(
    <div className="rightBackground">
      <div className="row">
        <div className="col">
          <a href="#"><img className="campingLogo" src="src/assets/camping.jpg"></img></a>
        </div>
        <div className="col">
          <a href="#"><img className="aframeLogo" src="src/assets/Aframe.jpg"></img></a>
        </div>
      </div>
     <p className="inProgress">IN PROGRESS</p>
    </div>
  )
}