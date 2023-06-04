import logo from './logo.svg';
import './App.css';

import React, { useContext } from "react";
import { TreesContext } from "./";

function App() {
  const received = useContext(TreesContext);
  console.log(received);
  return(
<ul>
  {received.map(obj => (
      <li key={obj.id}>{obj.type}</li>
  )
  )}
</ul>
  )
}

export default App;
