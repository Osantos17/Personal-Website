import './interests.css'
import styled from "styled-components";

export function Interests() {
  const WoodContent = styled.div`
    height: 24vh;
    width: 105vh;
    overflow-x: auto;
  `;

  const ArchContent = styled.div`
    height: 25vh;
    width: 105vh;
    overflow-x: auto;
  `;

  const SketchContent = styled.div`
  height: 25vh;
  width: 80%;
  overflow-x: auto;
  `;

  return (
    <div className="rightBackground">
      <div className="containerWood">
        <h3 className="imgCategory">WOODWORKING</h3>
        <WoodContent>
          <div className="imagesContainer">
            <img className="images" src="./src/assets/Wood/crib.jpg" alt="crib" />
            <img className="images" src="./src/assets/Wood/fire.jpg" alt="fire" />
            <img className="images" src="./src/assets/Wood/coop.jpg" alt="coop" />
            <img className="images" src="./src/assets/Wood/table.jpg" alt="table" />
            <img className="images" src="./src/assets/Wood/wine.jpg" alt="wine" />
            <img className="images" src="./src/assets/Wood/changing.jpg" alt="changing" />
            <img className="images" src="./src/assets/Wood/shelf.jpg" alt="shelf" />
            <img className="images" src="./src/assets/Wood/stool.jpg" alt="stool" />
            
          </div>
        </WoodContent>
      </div>
      <div className="containerArch"> 
        <h3 className="imgCategory">ARCHITECTURE</h3>
        <ArchContent>
          <div className="imagesContainer">
            <img className="images" src="./src/assets/Architecture/ishinomaki.png" alt="ishinomaki" />
            <img className="images" src="./src/assets/Architecture/hayward.jpg" alt="hayward" />
            <img className="images" src="./src/assets/Architecture/bayhouse.png" alt="bayhouse" />
            <img className="images" src="./src/assets/Architecture/hinto.png" alt="hinto" />
            <img className="images" src="./src/assets/Architecture/collage.png" alt="collage" />
          </div>
        </ArchContent>
      </div>
      <div className="containerSketch"> 
        <h3 className="imgCategory">SKETCHES</h3>
        <SketchContent>
          <div className="imagesContainer">
            <img className="images" src="./src/assets/Wood/crib.jpg" alt="crib" />
            <img className="images" src="./src/assets/Wood/fire.jpg" alt="fire" />
            <img className="images" src="./src/assets/Wood/wine.jpg" alt="wine" />
            <img className="images" src="./src/assets/Wood/coop.jpg" alt="coop" />
            <img className="images" src="./src/assets/Wood/table.jpg" alt="table" />
          </div>
        </SketchContent>
      </div>  
    </div>
  );
}
