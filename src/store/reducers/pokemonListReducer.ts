import { PokemonTypes } from "../types/pokemonTypes";
const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0,
};
const PokemonListReducer = (
  state = DefaultState,
  action: { type: PokemonTypes; payload: any }
) => {
  switch (action.type) {
    case PokemonTypes.POKEMON_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case PokemonTypes.POKEMON_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to fetch data",
      };
    case PokemonTypes.POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
        count: action.payload.count,
      };
    default:
      return state;
  }
};
export default PokemonListReducer;
