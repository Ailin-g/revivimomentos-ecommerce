import React, { Component } from 'react'

import NavBar from '../component/navBar';

class Pagina extends Component {

    render () {

        return (
            <div>
                <NavBar/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Pagina;