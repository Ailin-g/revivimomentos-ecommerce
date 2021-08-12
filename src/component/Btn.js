import React from 'react';

const btnStyle = {
    backgroundColor: "#61dafb"
}

function Btn (props) {
    return (
        <button style={btnStyle} onClick={props.clicked}>{props.nombre}</button>
    )
}

export default Btn;