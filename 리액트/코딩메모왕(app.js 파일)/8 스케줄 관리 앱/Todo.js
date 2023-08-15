import { useState } from 'react';
import '../../App.css';

function Todo({ item }) {
  const style1 = { color: 'black' };
  const style2 = { color: 'lightgray', textDecorationLine: 'line-through' };

  const [isChecked, setIsChecked] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const hChecked = () => {
    setIsChecked(!isChecked);
  };

  const hHide = () => {
    setIsHidden(false);
  };

  return (
    <p>
      {isHidden && <input type="checkbox" onChange={hChecked}></input>}

      {isHidden && (
        <span style={isChecked ? style2 : style1}>
          {item.name}
          {isChecked && <button onClick={hHide}>숨기기</button>}
        </span>
      )}
    </p>
  );
}

export default Todo;
