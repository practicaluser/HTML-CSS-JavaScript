import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(100);

  const btnClick = () => {
    setNumber(number + 1);
  };

  return (
    <div className="App">
      <button onClick={btnClick}>Plus one</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
