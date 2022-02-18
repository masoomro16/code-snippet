import React from 'react';

function Input(props) {
    return (
        <>
            <input 
                type="color" 
                value={props.color} 
                onChange={(e) => props.changeColor(props.id, e.target.value)} 
            />
        </>
    );
}

export default Input;