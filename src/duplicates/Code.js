import React, {useEffect, useState, useRef} from 'react';

function Code(props) {

    const codeInput = useRef(null)

    const highlightText = () => { 
        codeInput.current.select()
    }

    // const [str, setStr] = useState({
    //     ...props.code
    // })

    // useEffect(()=> { 

    // }, [props.code])
    
    return (
        <> 
        {/* <div>
            background: {props.code.background}
        </div> */}
            {/* <textarea value={props.code}/> */}
            <textarea 
                ref={codeInput}
                onClick={highlightText}
                style={{width: "500px"}} 
                value={`background: ${props.code.background}; \n-moz-background: ${props.code.background}; \n-webkit: ${props.code.background}`}
            />
        </>
    );
}

export default Code;
/*
background: {props.code.background}
{props.code.background}
{props.code.MozBackground}
{props.code.WebkitBackground}

*/