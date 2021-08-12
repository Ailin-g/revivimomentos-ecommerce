import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../component/ItemDetail';
import Spinner from '../component/Spinner';
import { getFirestore } from '../clientFactory';


const detailContainer = {
    width: "100%",
    minHeight: "90vh",
    background: "#272f3d",
    display:"flex",
    padding: "16px 0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"

}
const getItems= async(id) =>{
    const db = getFirestore();
    const itemCollection = db.collection('productos');
    const oneItem = itemCollection.doc(id) 
    return oneItem.get();
   }
function DetalleItem()  {
    
    const { id } = useParams();
    const [producto, setProducto] = useState();
        useEffect(() => {
            getItems(id)
              .then((doc) => {
                if(doc.exists){
                    setProducto({id: doc.id, ...doc.data()})
                }
              })
              return;
          }, [id]);
          if(producto) {
              return (
                  <div style={detailContainer}>
                      <ItemDetail nombreArt={producto.nombre} urlImg={producto.imageId} precio={producto.precio} descripcion={producto.descripción} cantidad={producto.cantidad}></ItemDetail>
                  </div>
              )
              } else {
                return (
                    <div style={detailContainer}>
                        <Spinner/>
                    </div>
                )
          }
}

export default DetalleItem;