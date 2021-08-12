import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';
import { getFirestore } from '../clientFactory';


const divStyle = {
    width: "100%",
    height: "180px",
    marginTop: "24px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
}


const Itemlist = ()  => {
    const [productoDb, setProductoDb] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("productos");

        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log("Sin resultado");
            }
            setProductoDb(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        }).catch((error) => {
            console.log("error buscando archivos");
            console.log(error)
        })
        
    }, [])
    
    return(
        <div style= {divStyle}>
            {productoDb.map(el => <Link className="linkProducto" to={`/detalleItem/${el.id}`}><Item nombreArt={el.nombre} urlImg={el.imageId} precio={el.precio} ></Item></Link> )}       
        </div>
    )
}   

export default Itemlist;
