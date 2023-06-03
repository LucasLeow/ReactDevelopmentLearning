import logo from './logo.svg';
import './App.css';

function App(props) {
  return(
  <div>
    <h1> {props.name} has a height of {props.height} </h1>
  </div>
  )
}

export default App;
