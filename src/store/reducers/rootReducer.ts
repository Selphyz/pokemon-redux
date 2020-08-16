import { combineReducers } from "redux";
import PokemonListReducer from "./pokemonListReducer";
import PokemonReducer from "./pokemonReducer";

export interface RootState {
  PokemonList: any;
  Pokemon: any;
}
const RootReducer = combineReducers<RootState>({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonReducer
});
export default RootReducer;
