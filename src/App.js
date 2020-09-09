import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Foods from './pages/Foods';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/comidas">
        <Foods />
      </Route>
    </BrowserRouter>
  );
}

export default App;
