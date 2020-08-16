import React from "react";
import "./App.scss";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import PokemonList from "../PokemonList/PokemonList";
import Pokemon from "../Pokemon/Pokemon";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Inicio</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
