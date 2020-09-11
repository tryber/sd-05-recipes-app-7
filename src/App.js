import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import HeaderProvider from './context/Providers/HeaderProvider';
import FoodProvider from './context/Providers/FoodProvider';

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
    <FoodProvider>
      <HeaderProvider>
        <BrowserRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/comidas" component={Foods} />
          <Route exact path="/bebidas" component={Drinks} />
          <Route exact path="/comidas/:id" component={FoodDetails} />
          <Route exact path="/bebidas/:id" component={DrinkDetails} />
          <Route path="/comidas/:id/in-progress" component={FoodInProgress} />
          <Route path="/bebidas/:id/in-progress" component={DrinkInProgress} />
          <Route exact path="/explorar" component={Explore} />
          <Route exact path="/explorar/comidas" component={ExploreFoods} />
          <Route exact path="/explorar/bebidas" component={ExploreDrinks} />
          <Route path="/explorar/comidas/ingredientes" component={ExploreFoodsByIngredient} />
          <Route path="/explorar/bebidas/ingredientes" component={ExploreDrinksByIngredient} />
          <Route path="/explorar/comidas/area" component={ExploreFoodsByLocal} />
          <Route path="/perfil" component={Profile} />
          <Route path="/receitas-feitas" component={RecipesDone} />
          <Route path="/receitas-favoritas" component={FavoriteRecipes} />
        </BrowserRouter>
      </HeaderProvider>
    </FoodProvider>
  );
}

export default App;
