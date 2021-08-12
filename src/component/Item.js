import React from 'react';

const tarjeta = {
    width: "250px",
    height: "180px",
    backgroundColor: "#fff",
    borderRadius: "10px"
}
const tarjSuperior = {
    width: "100%",
    heigth: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
} 

const titulo = {
    fontSize: "140%",
    margin: "0",
    color: "#000"
    }

const tarjInferior = {
    width: "100%",
    height: "75%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center"
}
const imgProducto = {
    height: "100%",
    width: "auto",
    margin: "0",
    borderRadius: "0 0 0 10px"

}
 const precioProducto = {
     fontSize: "110%",
     color: "blue",
     margin: "0",
     fontWeight: "bold",
     marginLeft: "8px",
 }
const contProd = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const Item = (props)  => {
   
    return(
        <div style={tarjeta}>
            <div style={tarjSuperior}>
                <p style={titulo}>{props.nombreArt}</p>
            </div>
            <div style={tarjInferior}>
                <img style={imgProducto} src={`/img/${props.urlImg}`} alt="Producto"></img>
                <div style={contProd}>
                    <p style={precioProducto} >{props.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;
