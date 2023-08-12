import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const rnumber = useRef(0);

  const numberUp = () => {
    setNumber(number + 1);
  };

  const rnumberUp = () => {
    rnumber.current = rnumber.current + 1;
  };

  return (
    <div className="App">
      <button onClick={numberUp}>useState로 변수를 +1</button>
      <h1>useState로 관리되는 변수는 {number}입니다.</h1>
      <p>상태 증가와 함께 렌더링도 된다</p>
      <hr></hr>

      <button onClick={rnumberUp}>useRef로 변수를 +1</button>
      <h1>useRef로 관리되는 변수는 {rnumber.current}입니다.</h1>
      <p>변수 변화는 되지만, 렌더링은 안된다.</p>
    </div>
  );
}

export default App;
