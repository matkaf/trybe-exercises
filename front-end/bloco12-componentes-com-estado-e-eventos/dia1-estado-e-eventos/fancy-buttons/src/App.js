import './App.css';
import React from 'react';

function clique() {
  console.log('Clicou');
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={clique}> Clique aqui! </button>
      </div>
    );
  }
}

export default App;
