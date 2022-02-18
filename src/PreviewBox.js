import React, {useState, useEffect} from 'react';
import Code from './Code';

function PreviewBox(props) {

    const [gradientStyle, setGradientStyle] = useState({
        background: `linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})`,
        MozBackground: `linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})`, 
        WebkitBackground: `linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})`
    })

    useEffect(()=> { 
        setGradientStyle(prev=>{ 
            let newStr = props.colors.slice(1).reduce((final,acc)=>{
                return `${final}, ${acc}`
            }, `${props.colors[0]} `)

            return { 
                background: `linear-gradient(${props.angle}deg, ${newStr})`,
                MozBackground: `linear-gradient(${props.angle}deg, ${newStr})`,
                WebkitBackground: `linear-gradient(${props.angle}deg, ${newStr})`
            }
        })
    }, [props.colors, props.angle])

    return (
        <div className="preview-box">
            <div style={{...gradientStyle,  width: "500px", height: "200px"}}>
            </div>
            <Code code={gradientStyle}/>
            
        </div>
    );
}

export default PreviewBox;

// const styleSelector = "background:"
// const browserPrefixes = ["", "-moz-", "-webkit-"] // browser prefixes for linear gradients

// let codeSnippet = browserPrefixes.map(prefix => { 
//     return (`${prefix}${styleSelector} ${newColor};`)
// })

// newColor:`linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`
// growing string using reduce

// `linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})`
