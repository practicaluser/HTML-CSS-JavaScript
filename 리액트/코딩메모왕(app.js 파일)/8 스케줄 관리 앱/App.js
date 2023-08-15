import { useState, useRef } from 'react';
import './App.css';
import List from './코딩메모왕/8 스케줄 관리 앱/List';

function App() {
  const inputText = useRef();
  const key = useRef(0);

  const [items, setItems] = useState([
    {
      id: 0,
      name: '구독하기',
      date: '오늘까지',
    },
  ]);

  const hInput = () => {
    key.current = key.current + 1;

    setItems((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: key.current,
          name: inputText.current.value,
          date: '오늘까지',
        },
      ];
    });
  };

  return (
    <div className="App">
      <input ref={inputText}></input>
      <button onClick={hInput}>스케줄 입력</button>
      <hr></hr>
      <List items={items} />
    </div>
  );
}

export default App;
