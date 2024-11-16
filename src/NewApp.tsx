import { useState } from "react"

export function App2() {
  const [position, setPosition] = useState({
    top: "300px",
    left: "460px"
  })

  const [color, setColor] = useState("#000");

  return (
    <div style={{ 
      height: "100vh", 
      background: "#1AC0C6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>Gostaram da aula?</h1>
      <button style={{
        font: "16px", 
        padding: "10px 16px", 
        border: "1px solid", 
        position: "absolute",
        transition: "0.4s",
        background: color,
        ...position
      }}
      onMouseEnter={() => {
        const top = Math.floor(Math.random() * (450 - 50 + 1)) + 50;
        const left = Math.floor(Math.random() * (750 - 50 + 1)) + 50;

        setPosition({
          top: `${top}px`,
          left: `${left}px`
        })
        const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setColor(newColor);
      }}
      >
        Não
      </button>
    </div>
  )
}