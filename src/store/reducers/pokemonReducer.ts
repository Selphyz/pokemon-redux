import { PokemonTypes } from '../types/pokemonTypes';

const DefaultState = {
  loading: false,
  data: {},
  errorMsg: '',
};

const PokemonReducer = (state = DefaultState, action: { type: PokemonTypes; pokemonName?: any; payload: any }) => {
  switch (action.type) {
    case PokemonTypes.POKEMON_SINGLE_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case PokemonTypes.POKEMON_SINGLE_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to find pokemon',
      };
    case PokemonTypes.POKEMON_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};
export default PokemonReducer;
