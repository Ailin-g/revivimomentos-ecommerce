import React from 'react';

const btnStyle = {
    display: "none"
}
const habilitado = {
    display: "inline-block"
}

function BtnAddCart (props) {
    return (
        <button style={ props.habilitado ? btnStyle : habilitado} onClick={props.clicked}>{props.nombre}</button>
    )
}

export default BtnAddCart;