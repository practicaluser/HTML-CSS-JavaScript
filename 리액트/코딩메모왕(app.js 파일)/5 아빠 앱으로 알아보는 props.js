import React, { useRef, useState } from 'react';
import './App.css';

function Child(props) {
  const [money, setMoney] = useState(0);

  const getMoney = () => {
    setMoney(money + 5);
  };

  return (
    <div className="Child">
      <h1>여기는 Child인 {props.name} 앱 입니다.</h1>
      <button onClick={getMoney}>용돈 주세요.</button>
      <p>용돈을 {money}만큼 받았습니다.</p>
      <p>아빠 월급은 {props.papamoney - money}만원 입니다.</p>
      <hr></hr>
    </div>
  );
}

function App() {
  const [papamoney, setPapamoney] = useState(0);

  const getSalary = () => {
    setPapamoney(papamoney + 700);
  };

  return (
    <div className="App">
      <h1>여기는 아빠 앱입니다.</h1>
      <button onClick={getSalary}>아빠 월급날</button>
      <p>월급 계좌의 잔액은 {papamoney}만원 입니다.</p>
      <hr></hr>
      <Child papamoney={papamoney} name="제니" />
      <Child papamoney={papamoney} name="아이유" />
    </div>
  );
}

export default App;
