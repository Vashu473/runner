import { useEffect } from "react";
import "../../assets/utilities/css/hero.css";
import injectStyle from "../../assets/utilities/inject/inject";
const Obstacle = ({ left, up, display, setObstacle }) => {
  useEffect(() => {
    if (display) {
      setTimeout(() => {
        document.getElementById("laser").remove();
        setObstacle(false);
      }, 1000);
    }
  }, [display]);
  const beam = `
  @-webkit-keyframes move {
    100% {
      left: 1050px;
    }
  }
`;
  injectStyle(beam);
  return (
    <div>
      <img
        src="img/laser.gif"
        alt="laser"
        id="laser"
        style={{
          display: display ? "block" : "none",
          left: left,
          top: up,
          WebkitAnimation: "move",
          WebkitAnimationDuration: "1s",
          WebkitAnimationIterationCount: 1,
        }}
      />
    </div>
  );
};
export default Obstacle;
