import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component{
    render(){
        return (
            <div>
                <h3>Catalogue de voiture</h3>
                <Car/>
            </div>
        )
    }
}

export default Mycars;