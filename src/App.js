import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/">
          <div className="align">
            <AddProduct />
          </div>
        </Route>

        <Route path="/products">
          <div>
            <Products />
          </div>
        </Route>

      </Router>
      
     
    </div>
  );
}

export default App;
