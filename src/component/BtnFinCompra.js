import React from 'react';
import {Link} from 'react-router-dom'

const btnStyle ={
    display:"none",
    backgroundColor: "#61dafb"
}
const habilitado = {
    display:"inline-block",
    backgroundColor: "#61dafb"
}


function BtnFinCompra(props) {
    return(
        <button style={props.habilitado ? habilitado : btnStyle} onClick={props.clicked}><Link to={{pathname: "/cart", state: props.estado}}>{props.nombre}</Link></button>
    )
}

export default BtnFinCompra;