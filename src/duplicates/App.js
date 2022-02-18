import React, {useState} from 'react';
import Input from './Input';
import PreviewBox from './PreviewBox';
import "./App.css"

function App(props) {
  const [colors, setColors] = useState(["#fbd2c8", "#da7a8b"])
  const [colorCount, setColorCount] = useState(colors.length)
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

  // const inputArr = colors.map((color, index)=> <Input 
  //   key={index+color} 
  //   color={color} 
  //   id={index} 
  //   changeColor={changeColor}
  // />)

  const inputArr = colors.map((color, index)=> <Input 
    key={index+color} 
    color={color} 
    id={index} 
    changeColor={changeColor}
  />)

  const inputs = colors.map((color, index) => <input 
    key={index} 
    type="color" 
    value={color} 
    onChange={(e) => changeColor(index, e.target.value)} 
  />)

  // use objects?? color1, color2 as key to reference it!! to make it instant
  return (
    <div className="container">
      <h1>CSS Gradient Code Generator</h1>
      <PreviewBox colors={colors} angle={angle}/>
      {/* {inputArr} */}
      {inputs}
      <input name="angle" value={angle} type="number" onChange={changeAngle}/>
      <button onClick={newColor}>New Color</button>
      {/* <button>Generate Gradient CSS Code</button> */}
    </div>      
  );
}

export default App;