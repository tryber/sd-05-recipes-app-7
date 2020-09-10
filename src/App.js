import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import FoodDetails from './pages/FoodDetails';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/comidas" component={Foods} />
      <Route path="/comidas/:id" component={FoodDetails} />
      <Route path="/bebidas" component={Drinks} />
      <Route path="/explorar" component={Explore} />
      <Route path="/perfil" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
