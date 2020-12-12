import React, { Component } from 'react';
import Mycars from './Components/Mycars';
import './App.css';

class App extends Component{

  state = {
    titre:'Mon catalogue voiture'
  }

  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre}> </Mycars>
      </div>
    );
  }
}

export default App;
