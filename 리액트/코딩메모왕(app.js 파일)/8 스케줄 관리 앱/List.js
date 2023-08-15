import '../../App.css';
import Todo from './Todo';

function List({ items }) {
  return (
    <>
      {items.map((item) => (
        <Todo item={item} />
      ))}
    </>
  );
}

export default List;
