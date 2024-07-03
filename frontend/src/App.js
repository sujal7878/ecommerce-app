import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import ProductDetails from './routes/ProductDetails';
import Cart from './routes/Cart';
import Login from './routes/Login';
import Register from './routes/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
