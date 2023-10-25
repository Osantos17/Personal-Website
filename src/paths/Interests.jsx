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
  width: 105vh;
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
            <img className="images" src="./src/assets/Architecture/1150.png" alt="1150" />
            <img className="images" src="./src/assets/Architecture/851.png" alt="851" />
            <img className="images" src="./src/assets/Architecture/harbor.png" alt="harbor" />
            <img className="images" src="./src/assets/Architecture/skyline.png" alt="skyline" />
            <img className="images" src="./src/assets/Architecture/ishinomaki.png" alt="ishinomaki" />
            <img className="images" src="./src/assets/Architecture/hayward.jpg" alt="hayward" />
            <img className="images" src="./src/assets/Architecture/hinto.png" alt="hinto" />
          </div>
        </ArchContent>
      </div>
      <div className="containerSketch"> 
        <h3 className="imgCategory">SKETCHES</h3>
        <SketchContent>
          <div className="imagesContainer">
            <img className="images" src="./src/assets/Sketches/bowl.jpeg" alt="bowl" />
            <img className="images" src="./src/assets/Sketches/invite.jpg" alt="invite" />
            <img className="images" src="./src/assets/Sketches/vase.jpeg" alt="vase" />
            <img className="images" src="./src/assets/Sketches/plant.jpg" alt="plant" />
            <img className="images" src="./src/assets/Sketches/wave.jpg" alt="wave" />
            <img className="images" src="./src/assets/Sketches/bayhouse.png" alt="bayhouse" />
          </div>
        </SketchContent>
      </div>  
    </div>
  );
}
