// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension";
// import RootReducer from "./reducers/rootReducer";

// const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default Store;

import { combineReducers } from "redux";
import PokemonListReducer from "./reducers/pokemonListReducer";
import PokemonReducer from "./reducers/pokemonReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonReducer,
});
const Store = configureStore({ reducer: reducers });
export default Store;
