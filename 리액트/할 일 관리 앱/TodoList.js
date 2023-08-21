import { useContext, useMemo, useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { TodoStateContext } from '../../App';

const TodoList = () => {
  // const storeData = useContext(TodoContext);
  const todo = useContext(TodoStateContext); //App 컴포넌트가 객체 데이터가 아닌 배열 그 자체를 전달해서 구조분해 할당으로 todo를 꺼내면 오류가 발생한다.
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ''
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>TodoList 🍀</h4>
      <div>총개수: {totalCount}</div>
      <div>완료된 할 일: {doneCount}</div>
      <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
        className="searchbar"
      ></input>
      <div className="lists">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
TodoList.defaultProps = {
  todo: [],
};
export default TodoList;
