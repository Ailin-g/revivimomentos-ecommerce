import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import ProviderCartContext from './context/context'

import './sass/App.scss';

import Pagina from './container/Pagina';
import DetalleItem from './container/DetalleItem';
import Catalogo from './container/Catalogo';
import Cart from './container/Cart';

class App extends Component {
  
  render() {

    let secciones = (
      <Switch>
        <Route path="/detalleItem/:id" component={DetalleItem}/>
        <Route path="/catalogo" component={Catalogo}/>
        <Route path="/cart" component={Cart}/>
        <Redirect to="/catalogo"/>
      </Switch>
    )

    return (
      // <ProviderCartContext value={{}}>
        <div>
          <Pagina>{secciones}</Pagina>
        </div>
      // </ProviderCartContext>
    )
  }
}

export default App;
