import './App.css';
import React from 'react';





class App extends React.Component {

  constructor() {
    super()
    this.clique = this.clique.bind(this)
    this.state = {
      numClicks: 0,
      className: "btnGreen"
    }
  }

  clique() {
    // console.log(className);
    this.setState((previousState, _props) => ({
      numClicks: previousState.numClicks + 1,
    }))
    
  }

  render() {
    return (
      <div className="App">
        <button className={this.state.className} onClick={this.clique}> {this.state.numClicks} </button>
      </div>
    );
  }
}

export default App;
