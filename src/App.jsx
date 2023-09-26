import { useState } from "react";

function App() {
  const [curretGradient, setCurrentGradient] = useState("Press button to change Linear Gradient");

  function getRandomColors() {
    const hexCodes = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.trunc(Math.random() * hexCodes.length);
      color += hexCodes[randomNumber];
    }
    return color;
  }

  function handleBackground() {
    const color1 = getRandomColors();
    const color2 = getRandomColors();
    const randomDeg = Math.trunc(Math.random() * 360)
    const body = document.body
    body.style.background = `linear-gradient(${randomDeg}deg, ${color1},${color2})`
    setCurrentGradient(body.style.background)
  }

  return (
    <div className="app">
      <h1 className="title">{curretGradient}</h1>
      <button onClick={handleBackground} className="refresh-btn">Update Background Gradient</button>
    </div>
  );
}

export default App;
