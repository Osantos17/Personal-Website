import "./AboutMe.css"

export function AboutMe () {

  return (
  <div className="rightBackground">
    <div className="profile">
      <img className="profilePic" src="src/assets/Profile-white.jpg" alt="profile pic" />
    </div>
    <div className="written">
      <h6>[ BUILT WITH ]</h6>
    </div>
    <div className="codeLogos">
      <div className="grid text-center">
        <img className="logo" src='src/assets/js.svg' alt="javascript" />
        <img className="logo" src='src/assets/html.svg' alt="html" />
        <img className="logo react" src='src/assets/react.svg' alt="react" />
        <img className="logo" src='src/assets/css.svg' alt="css" />
        <img className="logo" src='src/assets/bootstrap.png' alt="bootstrap" />
        <img className="logo" src='src/assets/photoshop.svg' alt="photoshop" />
      </div>
    </div>
      <h2 className="name">ORLANDO S.</h2>
      <h3 className="titles">DESIGNER / WOODWORKER / DEVELOPER</h3>
  </div>
  )
}