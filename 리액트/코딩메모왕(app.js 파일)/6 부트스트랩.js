import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item(props) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="card">
        <img
          src="https://1801889e95b1f9bf.kinxzone.com/webfile/product/1/1274/qgd6j10084j7.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <Item name="iPhone 12" />
      <Item name="iPhone SE" />
      <Item name="iPhone 7" />
      <Item name="iPhone 13" />
      <Item name="iPhone 6s" />
      <Item name="iPhone XR" />
    </div>
  );
}

export default App;
