import { ReactP5Wrapper } from "react-p5-wrapper";
import type p5 from "p5";

const Sketch = (p: p5) => {
  let totalPoints = 550;      
  let angleIncrement = 3;    
  let radiusIncrement = 0.3;
  let canvasSize = totalPoints * radiusIncrement + 200; 

  p.setup = () => {
    const cnv = p.createCanvas(canvasSize, canvasSize);
    cnv.addClass("canvas-class");
    p.angleMode(p.DEGREES);
    p.stroke(255);
    p.noFill();
  };

  p.draw = () => {
    p.background("#1D201F");

    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(p.frameCount * 0.4);
    p.scale(0.9);

    drawSpiral();
    p.pop();
  };

  function drawSpiral() {
    let angle = 0;
    let radius = 0;

    p.beginShape();
    for (let i = 0; i < totalPoints; i++) {
      const offset = 0.05 * radius * p.sin(p.frameCount * 0.05 + i * 0.1);
 
      const x = radius * p.cos(angle);
      const y = radius * p.sin(angle);

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
      className="flex justify-center items-center"
    >
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
};

export default Spiral;
