import { ReactP5Wrapper } from "react-p5-wrapper";
import type p5 from "p5";

const Sketch = (p: p5) => {
  let totalPoints = 550;      
  let angleIncrement = 3;    
  let radiusIncrement = 0.3;

  p.setup = () => {
    p.createCanvas(600, 600, "webgl"); 
    p.angleMode(p.DEGREES);
    p.noFill();
    p.stroke(255);
  };

  p.draw = () => {
    p.background(0, 20);
    p.rotateZ(p.frameCount * 0.1);
    p.scale(0.9);
    drawSpiral();
  };

  function drawSpiral() {
    let angle = 0;
    let radius = 0;

    p.beginShape();
    for (let i = 0; i < totalPoints; i++) {
      const x = radius * p.cos(angle);
      const y = radius * p.sin(angle);

      const offset = 10 * p.sin(p.frameCount * 0.05 + i * 0.1);

      p.vertex(x + offset, y + offset);

      angle += angleIncrement;
      radius += radiusIncrement;
    }
    p.endShape();
  }
};

const Spiral = () => {
  return (
    <div
      id="spiral-animation"
      className="bg-black w-full h-[600px] flex justify-center items-center"
    >
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
};

export default Spiral;
