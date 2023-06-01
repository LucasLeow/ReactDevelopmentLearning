import './App.css';
import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(initialValue) // reset value
  ]
}

function App() {

  const [test, changeTest] = useState();
  console.log(test);
  const [titleProp, resetTitle] = useInput(""); // initial state is empty
  const[hexProp, resetHex] = useInput("#000000");

const submit = (event) => {
  event.preventDefault(); // prevent page from refreshing
  alert(`Selected Color: ${titleProp.value} \n Selected Hex: ${hexProp.value}`)
 resetTitle();
  resetHex();

};

  return (

    <form onSubmit = {submit}>
      <input {...titleProp} placeholder="Color title..."/>
      <input {...hexProp} type="color"/>
      <button>ADD</button>
      
    </form>
  );
}

export default App;
