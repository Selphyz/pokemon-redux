import axios from "axios";
import { PokemonTypes } from "./../types/pokemonTypes";

export const GetPokemonList = (page: number) => async (
  dispatch: (arg0: { type: PokemonTypes; payload?: any }) => void
) => {
  try {
    dispatch({
      type: PokemonTypes.POKEMON_LIST_LOADING,
    });
    const perPage = 15;
    const offset = page * perPage - perPage;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );
    dispatch({
      type: PokemonTypes.POKEMON_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PokemonTypes.POKEMON_LIST_FAIL,
    });
  }
};
export const GetPokemon = (pokemon: string) => async (
  dispatch: (arg0: {
    type: PokemonTypes;
    payload?: any;
    pokemonName?: string;
  }) => void
) => {
  try {
    dispatch({
      type: PokemonTypes.POKEMON_SINGLE_LOADING,
    });
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({
      type: PokemonTypes.POKEMON_SINGLE_SUCCESS,
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: PokemonTypes.POKEMON_SINGLE_FAIL,
    });
  }
};
