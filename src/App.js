import React, {useState} from 'react';
import Input from './Input';
import PreviewBox from './PreviewBox';
import "./App.css"

function App(props) {
  const [colors, setColors] = useState(["#fbd2c8", "#df536c"])
  const [angle, setAngle] = useState(50)

  const newColor = () => { 
    setColors(prev=>[...prev, "#ffffff"])
  }

  const changeAngle = (e) => { 
    setAngle(e.target.value)
  }

  const changeColor = (id, color) => { 
    setColors(prevColors=>prevColors.map((current, index) => id===index ? color : current))
  }

  const inputs = colors.map((color, index) => <div key={index} className="color-input">
    <label >Color {index+1}</label>
    <span>{color}</span>
    <input 
      type="color" 
      value={color} 
      onChange={(e) => changeColor(index, e.target.value)} 
    />
  </div>)

  return (
    <>
      <h1>CSS Gradient Code Generator</h1>
      <div className="container">
        <PreviewBox colors={colors} angle={angle}/>
        <div className="inputs">
          <h2>Options</h2>
          {inputs}
          <button onClick={newColor}>+</button>
          <label>Angle </label><input name="angle" value={angle} type="number" onChange={changeAngle}/>
        </div>
      </div>      
    </>
  );
}

export default App;