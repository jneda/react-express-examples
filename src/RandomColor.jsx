import { useState } from "react";
import "./RandomColor.css";

function randomColor() {
  return `#${Math.random().toString().slice(-6)}`;
}

function Card(props) {
  return (
    <div
      className={"card"}
      style={{
        padding: "20px",
        textAlign: "center",
        color: "white",
        background: props.color,
      }}
    >
      {props.children}
    </div>
  );
}

export default function App() {
  const [color, setColor] = useState("hotpink");

  return (
    <div className={"app"} style={{ padding: "20px" }}>
      <Card color={color}>
        <input
          type={"button"}
          value={`Get a random color: ${color}`}
          onClick={() => setColor(randomColor)}
        />
      </Card>
    </div>
  );
}
