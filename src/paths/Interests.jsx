import './Interests.css'
import styled from "styled-components";

export function Interests() {
  const WoodContent = styled.div`
    height: 25vh;
    width: 90%;
    overflow-x: scroll;
  `;

  const ArchContent = styled.div`
    height: 25vh;
    width: 90%;
    overflow-x: scroll;
  `;

  const SketchContent = styled.div`
  height: 25vh;
  width: 90%;
  overflow-x: scroll;
  `;

  return (
    <div className="interestsContainer">
      <div className="containerWood">
        <WoodContent>
          <div className="imagesContainer">
            <h3 className="imgCategory">WOODWORKING</h3>
            <img className="images" src="/assets/Wood/crib.jpg" alt="crib" />
            <img className="images" src="/assets/Wood/fire.jpg" alt="fire" />
            <img className="images" src="/assets/Wood/coop.jpg" alt="coop" />
            <img className="images" src="/assets/Wood/table.jpg" alt="table" />
            <img className="images" src="/assets/Wood/wine.jpg" alt="wine" />
            <img className="images" src="/assets/Wood/changing.jpg" alt="changing" />
            <img className="images" src="/assets/Wood/shelf.jpg" alt="shelf" />
            <img className="images" src="/assets/Wood/stool.jpg" alt="stool" />
          </div>
        </WoodContent>
      </div>
      <div className="containerArch"> 
        <ArchContent>
          <div className="imagesContainer">
            <h3 className="imgCategory">ARCHITECTURE</h3>
            <img className="images" src="/assets/Architecture/1150.png" alt="1150" />
            <img className="images" src="/assets/Architecture/851.png" alt="851" />
            <img className="images" src="/assets/Architecture/harbor.png" alt="harbor" />
            <img className="images" src="/assets/Architecture/skyline.png" alt="skyline" />
            <img className="images" src="/assets/Architecture/ishinomaki.png" alt="ishinomaki" />
            <img className="images" src="/assets/Architecture/hayward.jpg" alt="hayward" />
            <img className="images" src="/assets/Architecture/hinto.png" alt="hinto" />
          </div>
        </ArchContent>
      </div>
      <div className="containerSketch"> 
        <SketchContent>
          <div className="imagesContainer">
            <h3 className="imgCategory">SKETCHES</h3>
            <img className="images" src="/assets/Sketches/bowl.jpeg" alt="bowl" />
            <img className="images" src="/assets/Sketches/invite.jpg" alt="invite" />
            <img className="images" src="/assets/Sketches/vase.jpeg" alt="vase" />
            <img className="images" src="/assets/Sketches/plant.jpg" alt="plant" />
            <img className="images" src="/assets/Sketches/wave.jpg" alt="wave" />
            <img className="images" src="/assets/Sketches/bayhouse.png" alt="bayhouse" />
          </div>
        </SketchContent>
      </div>  
    </div>
  );
}
