import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return value.map((item) => <li>{item}</li> )
}

const tasks = ['Estudar React', 'Limpar e-mails', 'Fazer almoço', 'Lavar louça', 'Ver aula'];

function App() {
  return Task(tasks);
}

export default App;
