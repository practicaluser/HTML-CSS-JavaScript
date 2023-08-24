import './TodoInput.css';
import { useRef, useState, useContext } from 'react';
import { TodoDispatchContext } from '../../App';

const TodoInput = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      console.log('작동');
      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <div className="TodoInput">
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className="addTodo">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoInput;
