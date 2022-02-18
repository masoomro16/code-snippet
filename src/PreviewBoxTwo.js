import React, {useState, useEffect} from 'react';

function PreviewBox(props) {

    const [gradientStyle, setGradientStyle] = useState({
        background: `linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})`,
        MozBackground: `linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})`, 
        WebkitBackground: `linear-gradient(${props.angle}deg, ${props.colors[0]}, ${props.colors[1]})`
    })

    useEffect(()=> { 
        console.log("RUN: useEffect")
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
    console.log("RENDER: PreviewBox")
    return (
        <div style={{...gradientStyle,  width: "500px", height: "500px", border: "1px solid #000"}}>
            {console.log("RENDER: Component!!")}
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
