import React from 'react';

const pStyle = {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    margin: "0 0",
    textAlign: "center"
}

const Resultado = (props) => {
    return (
        <p style={pStyle}>{props.cuenta}</p>
    )
}

export default Resultado;