import React, { Component, Fragment } from 'react';
import Car from './Cars';

class Mycars extends Component{

    state = {
        voitures: [
            {name: 'Ford', color:'Red', year: '2000'},
            {name: 'Mercedes', color:'Black', year: '2010'},
            {name: 'Peugeot', color:'Green', year: '2018'},
        ]
    }

    addTenYear = () => {
        const updatedstate = this.state.voitures.map((param) => {
            return param.year -= 10;
        })

        this.setState({
            updatedstate
        })
    }
    // noCopy = () => {
    //     alert('Mercie de ne pas copier ceci');
    // }

    addstyle = (e) => {
        //console.log(e.target);
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');
        } else {
            e.target.classList.add('styled');
        }
    }
    
    render(){
       // console.log(this)//permet de voir les élements se trouvant dans un props

       const year = new Date().getFullYear();
        return (
            <Fragment className="container">
              
                <h3 className="mt-4" onMouseOver={this.addstyle}>{this.props.title}</h3> {/* reaction lors du passage de la sourie */}
                <p >Réaliser une copie moderne</p>  {/* reaction pour une copie onCopy={this.noCopy}*/}

                <button onClick={this.addTenYear}>+10 ans</button>
                
                <table className="carsTable">
                    <tr>
                        <th>Marque</th>
                        <th>Age</th>
                        <th>Couleur</th>
                    </tr>
                
                    {
                        this.state.voitures.map((voiture,index) => {
                            return (
                                <Fragment key={index} >
                                    <Car name={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'}/>
                                </Fragment>
                            
                            )
                        })
                    }
                </table>
            </Fragment>
        )
    }
}

export default Mycars;