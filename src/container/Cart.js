import React, { Component } from 'react'
import Btn from '../component/Btn';
// import cartContext from '../context/context';
import { getFirestore } from '../clientFactory';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';

const seccionCarrito = {
    width: "100%",
    minHeight: "90vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#272f3d"
}
const cartStyle = {
    margin: "48px 0 0 0",
    backgroundColor: "#a7a7a7",
    display: "flex",
    flexDirection: "Column",
    borderRadius: "5px",
    fontSize: "120%"
}
const articuloStyle = {
    width: "250px",
    display: "flex",
    flexDirection: "row"
}
const nomProdStyle = {
    width: "40%",
    margin:"5px 0"
}
const cantProdStyle = {
    width: "30%",
    margin:"5px 0"
}
const precioProdStyle = {
    width: "30%",
    margin:"5px 0"
}
const cabecera = {
    width: "250px",
    display: "flex",
    flexDirection: "row"
}
const cabeceraNombre = {
    width: "40%",
}
const cabeceraDetalle = {
    width: "30%"
}

const generarOrden = (datosOrden) => {

    const db = getFirestore();
    const collection = db.collection('ordenes');
    const infoOrden = {
        Comprador: {
            email: datosOrden.email,
            nombre: datosOrden.nombre,
            telefono: datosOrden.telefono
        },
        items: {
            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
            total: datosOrden.total,
            infoItem: datosOrden.detalleItems
        }
    }
    collection.add(infoOrden).then(({ id }) => {
        console.log(id);
    })
    .catch(err => {
        console.log(err);
    });
    //agregar la actualizacion de la coleccion de items, haciendo que se actualize el stock item por item con un map y un update
    // const updStock = db.collection('productos');
    // datosOrden.detalleItems.forEach( el => {
    //     const itemActualizado = updStock.doc(el.id);

    //     const actualizarStock = itemActualizado.update({
    //         cantidad: cantidad - el.cantidad
    //     });
    //     actualizarStock.then(() => {
    //         console.log("actualizacion exitosa")
    //     })
    //     .catch(err => {
    //         console.log("error", err);
    //     });
    // });    
}

class Cart extends Component {

    // static contextType = cartContext;

    constructor(props) {
        super(props);
        this.state = {
            cartVacio: false,
            activarGenerador: false,
            emailCliente: "",
            nombreCliente: "",
            telefonoCliente: 1122334455,
            totalCompra: 0,
            arrayItems: [],
            articulos: [],
        }
    }

    handleChangeNombre(event) {
        this.setState({nombreCliente: event.target.value})
    }
    handleChangeMail(event) {
        this.setState({emailCliente: event.target.value})
    }
    handleChangeTelefomo(event) {
        this.setState({telefonoCliente: event.target.value})
    }
    
    shouldComponentUpdate() {

    }

    render() {
        
        let datosProducto = this.props.location.state;

        this.setState( this.state.articulos, () => {
            this.state.articulos.push(
                <div style={articuloStyle}>
                    <p style={nomProdStyle}>{datosProducto.nombreProd}</p>
                    <p style={cantProdStyle}>{datosProducto.precioProd}</p>
                    <p style={precioProdStyle}>{datosProducto.initial}</p>
                </div>
            );
        })


    const ordenGenerada = () => {
        
        const datosOrden = {
            email: this.state.emailCliente,
            nombre: this.state.nombreCliente,
            telefono: this.state.telefonoCliente,
            total: this.state.totalCompra,
            detalleItems: this.state.arrayItems,
        }
        
        generarOrden(datosOrden);
    }
    
    
    let infoCarrito =  (
        <div style={cartStyle}>
            <div style={cabecera}>
                <div style={cabeceraNombre}>Producto</div>
                <div style={cabeceraDetalle}>Cantidad</div>
                <div style ={cabeceraDetalle}>Precio</div>
            </div>
            {this.state.articulos}
            <form action={this.setState({activarGenerador: true})}>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" value={this.state.nombreCliente} onChange={this.handleChangeNombre} required></input>
                <label for="email">Email</label>
                <input type="email" name="email" value={this.state.emailCliente} onChange={this.handleChangeMail} required></input>
                <label for="telefono">Telefono</label>
                <input type="number" name="telefono" value={this.state.telefonoCliente} onChange={this.handleChangeTelefomo} required></input>
                <input type="submit" value="Siguiente"></input>
            </form>
            {this.activarGenerador ? <Btn nombre="Generar orden" clicked={ordenGenerada()}></Btn> : <Btn nombre="Completar datos!"></Btn>}

        </div>
    );
    const carritoVacio = (
        <div style={cartStyle}>
            <p>carritoVacio!</p>
            <Link to="/catalogo"><Btn nombre="ir a productos!"></Btn></Link>
        </div>
    )
    let cartFinal;

    if(this.cartVacio) {
        cartFinal = infoCarrito
    } else {
        cartFinal = carritoVacio
    }

    return (
        <div style={seccionCarrito}>
            {cartFinal}
            {console.log(this.state.articulos)}
            {console.log(datosProducto)}
        </div>
    )
}

}

export default Cart;