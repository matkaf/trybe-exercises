import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.handleUppercase = this.handleUppercase.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
      type: '',
    }
  }


  handleUppercase({ target }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    value = value.toUpperCase();
    
    this.setState({
      [name]: value,
    })
  }

  render() {

    return (
      <div className="App">
        <form className="form">
          <fieldset className="req1">
            <label>
              Nome completo:
            <input required type="text" name="name" maxLength="40" value={this.state.name} onChange={this.handleUppercase}/>
            </label>
            <label>
              E-mail:
              <input required type="email" name="email" maxLength="50"/>
            </label>
            <label>
              CPF (obrigatório):
              <input required type="text" name="cpf" maxLength="11" />
            </label>
            <label>
              Endereço:
              <input required type="text" name="address" maxLength="200" />
            </label>
            <label>
              Cidade:
              <input required type="text" name="city" maxLength="28" />
            </label>
            <label>
              Estado:
              <input required type="select" name="uf" />
            </label>
            <label>
              Tipo:
              <label>
                Casa
                <input type="radio" name="type" id="casa"/>
              </label>
              <label>
                Apartamento
                <input type="radio" name="type" id="apto" />
              </label>
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
