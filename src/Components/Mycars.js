import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component{

    noCopy=()=>{
        alert('Mercie de ne pas copier ceci');
    }

    addstyle=(e)=>{
        console.log(e);
    }
    
    render(){
       // console.log(this)//permet de voir les élements se trouvant dans un props
        return (
            <div className="container">
              
                    <h3 className="mt-4" onMouseOver={this.adstyle}>{this.props.title}</h3> {/* reaction lors du passage de la sourie */}
                    <p onCopy={this.noCopy}>Réaliser une copie moderne</p>  {/* reaction pour une copie */}
                    <Car color="green">ford</Car>
                    <Car >Toyota</Car>
                    <Car color="red"></Car>

            </div>
        )
    }
}

export default Mycars;