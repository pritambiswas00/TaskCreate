import React, { useEffect, useRef, useState } from "react";
import "./Canvas.scss";
type Props = {
  children?:JSX.Element|JSX.Element[];
};
const Canvas: React.FC<Props> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      let t = 0;
      const ctx = canvasRef.current.getContext("2d");
      const run = () => {
        for (let i = 0; i <= 35; i++) {
          for (let j = 0; j <= 35; j++) {
            color(i, j, red(i, j, t), green(i, j, t), blue(i, j, t));
          }
        }
        t = t + 0.12;
        window.requestAnimationFrame(run);
      };
      const color = (
        x: number,
        y: number,
        r: number,
        g: number,
        b: number
      ): void => {
        ctx!.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx!.fillRect(x, y, 1, 1);
      };
      const red = function (x: number, y: number, t: number): number {
        return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
      };

      const green = function (x: number, y: number, t: number): number {
        return Math.floor(
          192 +
            64 *
              Math.sin(
                (x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300
              )
        );
      };

      const blue = function (x: number, y: number, t: number): number {
        return Math.floor(
          192 +
            64 *
              Math.sin(
                5 * Math.sin(t / 9) +
                  ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
              )
        );
      };
      run();
    }
  },);
  return (
      <div className="canvas">
      <canvas width={"25px"} height={"38px"} ref={canvasRef} className="wrapper"/>
       <div className="canvas-inner">
       {props.children}
       </div>
      </div>
  );
};

export default Canvas;
