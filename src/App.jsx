import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Obstacle from "./components/Obstacle/Obstacle";
function App() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  const [movement, setMovement] = useState({
    up: height - 200,
    left: 50,
  });
  const { up, left } = movement;
  const [obstacle, setObstacle] = useState(false);
  const [exp, setExp] = useState(0);
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key == "ArrowUp") {
        setMovement((prev) => {
          return {
            ...prev,
            up: 0 <= prev.up ? prev.up - 10 : prev.up,
          };
        });
      } else if (event.key == "ArrowDown") {
        setMovement((prev) => {
          return {
            ...prev,
            up: height > prev.up ? prev.up + 10 : prev.up,
          };
        });
      } else if (event.key == "ArrowLeft") {
        setMovement((prev) => {
          return {
            ...prev,
            left: 0 <= prev.left ? prev.left - 10 : prev.left,
          };
        });
      } else if (event.key == "ArrowRight") {
        setMovement((prev) => {
          return {
            ...prev,
            left: width > prev.left ? prev.left + 10 : prev.left,
          };
        });
      } else if (event.key == " ") {
        setMovement((prev) => {
          return {
            up: height > prev.up && 0 <= prev.up ? prev.up - 50 : prev.up,
            left:
              height > prev.left && 0 <= prev.left ? prev.left + 50 : prev.left,
          };
        });
      } else if (event.key == "Enter") {
        setObstacle(true);
      }
    });
    let expTime = setInterval(() => {
      setExp((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(expTime);
    };
  }, [obstacle]);
  return (
    <div id="app-container">
      <div className="exp">{exp}</div>
      {obstacle && (
        <Obstacle
          left={left + 150}
          up={up + 60}
          display={obstacle}
          setObstacle={setObstacle}
        />
      )}
      <Hero up={up} left={left} />
    </div>
  );
}

export default App;
