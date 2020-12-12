import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component{
    
    render(){
       // console.log(this)//permet de voir les élements se trouvant dans un props
        return (
            <div className="container">
              
                    <h3 className="mt-4">{this.props.title}</h3>
                    <Car color="green">ford</Car>
                    <Car >Toyota</Car>
                    <Car color="red"></Car>

            </div>
        )
    }
}

export default Mycars;