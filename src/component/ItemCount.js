import React from 'react';
import Btn from './Btn';
import BtnAddCart from './BtnAddCart';
import Resultado from './Resultado';
import BtnFinCompra from './BtnFinCompra';

const infoContenedor = {
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-around",
}

const styleContador = {
    height: "35px",
    display: "flex",
    flexDirection: "row",
    width: "100%",
}

const ItemCount = (props) => {
    
        return (
            <div style={infoContenedor}>
                <div style={styleContador}>
                    <Btn nombre="Resta" clicked={props.restarProducto}/>
                    <Resultado cuenta={props.initial}/>
                    <Btn nombre="Suma" clicked={props.sumarProducto}/>
                </div>
                <div>
                <BtnAddCart nombre="Agregar al carrito" clicked={props.informarCantidad}/>
                <BtnFinCompra estado={props.estado} habilitado={props.habilitado} nombre="Finalizar Compra" />
                </div>
            </div>
        )
}

export default ItemCount;