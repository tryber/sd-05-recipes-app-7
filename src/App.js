import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import HeaderProvider from './context/Providers/HeaderProvider';

import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsByIngredient from './pages/ExploreFoodsByIngredient';
import ExploreDrinksByIngredient from './pages/ExploreDrinksByIngredient';
import ExploreFoodsByLocal from './pages/ExploreFoodsByLocal';
import Profile from './pages/Profile';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipesDone from './pages/RecipesDone';

function App() {
  return (
    <HeaderProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/comidas/:id/in-progress" component={FoodInProgress} />
          <Route path="/comidas/:id" component={FoodDetails} />
          <Route path="/comidas" component={Foods} />
          <Route path="/bebidas/:id/in-progress" component={DrinkInProgress} />
          <Route path="/bebidas/:id" component={DrinkDetails} />
          <Route path="/bebidas" component={Drinks} />
          <Route path="/explorar/comidas/ingredientes" component={ExploreFoodsByIngredient} />
          <Route path="/explorar/bebidas/ingredientes" component={ExploreDrinksByIngredient} />
          <Route path="/explorar/comidas/area" component={ExploreFoodsByLocal} />
          <Route path="/explorar/comidas" component={ExploreFoods} />
          <Route path="/explorar/bebidas" component={ExploreDrinks} />
          <Route path="/explorar" component={Explore} />
          <Route path="/receitas-favoritas" component={FavoriteRecipes} />
          <Route path="/receitas-feitas" component={RecipesDone} />
          <Route path="/perfil" component={Profile} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </HeaderProvider>
  );
}

export default App;
