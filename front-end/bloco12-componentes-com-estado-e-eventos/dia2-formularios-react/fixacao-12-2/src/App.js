import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Formulário de Fixação</h1>
        <form>
          <label>
            Digite seu nome:
            <input type="text" name="nome" />
          </label>
          <label>
            Digite sua idade:
            <input type="number" name="idade" />
          </label>
          <label>
            Escreva sobre você:
            <textarea />
          </label>
        </form>
      
      </div>
    )};
}

export default App;
