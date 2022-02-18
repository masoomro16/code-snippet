import React, {useRef} from 'react';

function Code(props) {

    const codeInput = useRef(null)

    const highlightText = () => { 
        codeInput.current.select()
    }

    return (
        <textarea 
            readOnly
            ref={codeInput}
            onClick={highlightText}
            value={`background: ${props.code.background}; \n-moz-background: ${props.code.background}; \n-webkit: ${props.code.background}`}
        />
    );
}

export default Code;
