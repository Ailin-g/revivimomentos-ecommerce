import React, { Component } from 'react';
import ItemCount from './ItemCount';
// import { ProviderCartContext } from '../context/context'

const tarjeta = {
    width: "250px",
    height : "500px",
    backgroundColor: "#fff",
    borderRadius: "15px"
}
const tarjSuperior = {
    width: "100%",
    height: "45px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid #272f3d"
}
const titulo = {
    fontSize: "210%",
    margin: "0"
}
const tarjInferior = {
    width: "100%",
    height: "380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    borderBottom: "1px solid #000"
}
const imgProducto = {
    height: "auto",
    width: "100%",
    margin: "0",
    borderBottom: "2px solid #272f3d"
}
const precioProducto = {
    fontSize: "110%",
    color: "red",
    margin: "8px 0 0 0",
    fontWeight: "bold",
    marginLeft: "8px",
    alignSelf: "center"
}
const infoProducto = {
    display:"flex",
    flexDirection: "column",
}
const descripcionProducto = {
    margin: "5 0"
}

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: this.props.cantidad,
            initial: 1,
            habilitado: false,
            nombreProd: this.props.nombreArt,
            precioProd: this.props.precio,
        }
    }

    sumarProducto = () => {
        if(this.state.initial < this.state.cantidad) {
            this.setState({ initial: this.state.initial + 1})
        } 
    }
    restarProducto = () => {
        if(this.state.initial > 0) {
            this.setState({initial: this.state.initial - 1})
        }
    }
    informarCantidad = () => {
        alert(`Se agregarán al carrito ${this.state.initial} unidades`);
        this.habilitarBoton();
    }
    habilitarBoton = () => {
        if(this.state.habilitado === false) {
            this.setState({habilitado: true})
        }
    }

    render() {

        return(
            // <ProviderCartContext value={{state: this.state}}>
                <div style={tarjeta}>
                    <div style={tarjSuperior}>
                        <p style={titulo}>{this.props.nombreArt}</p>
                    </div>
                    <div style={tarjInferior}>
                        <img style={imgProducto} src={`/img/${this.props.urlImg}`} alt="Producto"></img>
                        <div style={infoProducto}>
                            <p style={precioProducto}>{this.props.precio}</p>
                            <p style={descripcionProducto}>{this.props.descripcion}</p>
                        </div>
                    </div>
                    <ItemCount estado={this.state} stock={this.state.stock} initial={this.state.initial} sumarProducto={this.sumarProducto} restarProducto={this.restarProducto} informarCantidad={this.informarCantidad} habilitado={this.state.habilitado}/>
                </div>
            // </ProviderCartContext>
        )
    }
}

export default ItemDetail;