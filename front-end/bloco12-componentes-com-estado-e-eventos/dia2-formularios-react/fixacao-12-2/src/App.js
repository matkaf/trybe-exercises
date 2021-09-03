import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      idade: 0,
      ajg: false,
      job: '',
    }

  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value
    this.setState({
      [name]: value,
    });
      console.log(target);
  }

  render() {
    return (
      <div className="App">
        <h1>Formulário de Fixação</h1>
        <form className="form">
          <label>
            Digite seu nome: 
            <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange}/>
          </label>
          <label>
            Digite sua idade: 
            <input type="number" name="idade" value={this.state.idade} onChange={this.handleChange} />
          </label>
          <label>
            Gratuidade?
            <input type="checkbox" name="ajg" onChange={this.handleChange} />
          </label>
          <label>
            Escreva sobre você: 
            <textarea type="text" name="job" onChange={this.handleChange} />
          </label>
        </form>
      
      </div>
    )};
}

export default App;
