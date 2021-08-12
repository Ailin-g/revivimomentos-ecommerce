import React, { Component } from 'react';
import ItemList from '../component/ItemList';

class Catalogo extends Component {

    render () {

        return (
            <div className="catalogo">
                <ItemList/>
            </div>
        )
    }
}

export default Catalogo;