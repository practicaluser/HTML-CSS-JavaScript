import React, { useRef, useReducer, useCallback, useMemo } from 'react';
import './App.css';
import Header from './한 입 크기로 잘라먹는 리액트/할 일 관리 앱 만들기/Header';
import TodoInput from './한 입 크기로 잘라먹는 리액트/할 일 관리 앱 만들기/TodoInput';
import TodoList from './한 입 크기로 잘라먹는 리액트/할 일 관리 앱 만들기/TodoList';

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.newItem, ...state];
    case 'UPDATE':
      return state.map((it) =>
        it.id === action.targetID ? { ...it, isDone: !it.isDone } : it
      );
    case 'DELETE':
      return state.filter((it) => it.id !== action.targetID);
    default:
      return state;
  }
}

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래 널기',
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    createdDate: new Date().getTime(),
  },
];

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  //useMemo를 이용해 세 개의 객체를 묶고 App 컴포넌트가 리렌더되어도 다시 생성하지 않도록 한다.
  //useCallback을 적용한 함수 onUpdate, onDelete는 다시 생성되지 않으나, Props로 전달하기 위해
  //묶은 3개의 함수 객체는 다시 생성된다. 그래서 useMemo를 사용했다.

  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const idRef = useRef(3); //앞에 작성한 가짜 데이터의 id가 0,1,2여서 3으로 설정

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = useCallback((targetID) => {
    dispatch({
      type: 'UPDATE',
      targetID,
    });
  }, []);

  const onDelete = useCallback((targetID) => {
    dispatch({
      type: 'DELETE',
      targetID,
    });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoInput />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
