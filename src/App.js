import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import DrinkDetails from './pages/DrinkDetails';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/comidas" component={Foods} />
      <Route exact path="/bebidas" component={Drinks} />
      <Route path="/explorar" component={Explore} />
      <Route path="/perfil" component={Profile} />
      <Route path="/bebidas/:id" component={DrinkDetails} />
    </BrowserRouter>
  );
}

export default App;
