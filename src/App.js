import React, { Component } from 'react';
import Mycars from './Components/Mycars';
import './App.css';

class App extends Component{

  state = {
    titre:'Mon catalogue voiture'
  }

  changeTitle = (e) => {
    // console.log(e.target)
    this.setState({       //methode permettant de changer les données de state
      titre:'Mon nouveau titre'
    })
  }

  changeViaParam = (titre) => {
    this.setState({
      titre
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre:param
    })
  }

  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre}/> 

        <button onClick={this.changeTitle} className="mt-3 btn btn-primary">Changer le nom en dur</button>
        <button onClick={()=>this.changeViaParam('Mon nouveau titre')} className="mt-3 btn btn-secondary ml-3">Changer le nom via param</button>
        <button onClick={this.changeViaBind.bind(this,'Title via Bind')} className="mt-3 btn btn-secondary ml-3">Changer le nom via bind </button>
      
      </div>
    );
  }
}

export default App;
