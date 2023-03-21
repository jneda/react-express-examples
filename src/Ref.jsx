import React, { useEffect, useRef } from "react";

export default function App() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const padding = 25;
    const size = 250;
    const width = 600;
    const height = 400;

    const randomLow = () => Math.floor(Math.random() * 128);
    const randomMid = () => Math.floor(Math.random() * 128 + 63);
    const randomHigh = () => Math.floor(Math.random() * 128 + 127);

    for (let i = 1; i < 5; i++) {
      ctx.fillStyle = `rgba(${randomLow()}, ${randomMid()}, ${randomHigh()}, ${
        i * 0.125
      }`;
      ctx.fillRect(padding * i, padding * i, size, size);
    }
  }, []);

  return (
    <canvas
      style={{
        backdropFilter: "saturate(200%)",
      }}
      ref={canvasRef}
      height={400}
      width={600}
    />
  );
}
