import React from 'react';
import './App.css';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <form className="form">
          <fieldset className="req1">
            <label>
              Nome completo:
            <input required type="text" name="name" maxLength="40" />
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
