import React, {useState} from 'react';

function Input(props) {

    // const [color, setColor] = useState(props.color)

    // const changeColor = (e) => { 
    //     // setColor(e.target.value)
    //     props.changeColor(props.id, e.target.value)
    // } 

    return (
        <>
            <input 
                type="color" 
                value={props.color} 
                onChange={(e) => props.changeColor(props.id, e.target.value)} 
            />
            {/* <p>{props.color}</p>
            <div style={{width: "100px", height: "100px", background: `${props.color}`}}></div> */}
        </>
    );
}

export default Input;