import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function Item(props) {
  return (
    <div class="card">
      <img src={props.url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">
          {props.email} <br></br>- Phone: {props.phone} <br></br>- Website:
          {props.website}
        </p>
        <a href="#" class="btn btn-primary">
          웹사이트 보고오기
        </a>
      </div>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  //useEffect가 한 번만 실행된다(원래는 []부분이 바뀌면 바뀔 때마다 렌더링해주지만, 현재는 바뀔 부분이 없다)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()) // =대신 =>넣어야 된다.
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {users.map((user) => (
        <Item
          url="https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMTIw/MDAxNTIwMDg1NzkyOTYy.MIbBg0K2ACwV0n6gGRm9ettGlwhzH2JLzOjau-LOQPAg.NFJflD9Ev_ExF4bYTP7kb0B1xPhpbGZmQpTL4u4_YuYg.JPEG.harden4882/75-Motivational-Michael-Jordan-Quotes.jpg?type=w800"
          name={user.name}
          email={user.email}
          phone={user.phone}
          website={user.website}
        />
      ))}
    </div>
  );
}

export default App;
