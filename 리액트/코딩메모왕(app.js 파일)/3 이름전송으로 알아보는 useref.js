import React, { useRef, useState } from 'react';
import './App.css';

function Input() {
  const [name, setName] = useState('Guest');
  const [inputValue, setinputValue] = useState('');
  const inputchange = (event) => {
    setinputValue(event.target.value);
  };
  const btnChangeName = () => {
    setName(inputValue);
  };

  return (
    <div className="Input">
      <input type="text" value={inputValue} onChange={inputchange}></input>
      <button onClick={btnChangeName}>이름 전송</button>
      <h1>안녕하세요 {name}님</h1>
    </div>
  );
}

function UpgradeInput() {
  const [name, setName] = useState('Guest');
  const inputRef = useRef('');
  const refChange = () => {
    setName(inputRef.current.value);
  };

  return (
    <div className="UpgradeInput">
      <input type="text" ref={inputRef} onChange={refChange}></input>
      <h1>안녕하세요 {name}님</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Input />
      <hr></hr>
      <UpgradeInput />
    </div>
  );
}

export default App;
