import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../../store/actions/pokemonActions";
import _ from "lodash";
import "./Pokemon.scss";
interface PokemonProps {}
const Pokemon = (props: { match: { params: { pokemon: any } } }) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector<any, any>((state) => state.Pokemon);
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, [dispatch, pokemonName]);
  const ShowData = () => {
    console.log(pokemonState);
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div className="pokemon-wrapper">
          <div className="item">
            <h2>Sprites</h2>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>
          <div className="item">
            <h2>Stats</h2>
            {pokeData.stats.map((el: { base_stat: number }) => {
              return <p>{el.base_stat}</p>;
            })}
          </div>
          <div className="item">
            <h2>Abilities</h2>
            {pokeData.abilities.map((el: { ability: { name: string } }) => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
        </div>
      );
    }
    if (pokemonState.loading) {
      return <p>Loading</p>;
    }
    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }
    return <p>Cant fetch pokemon</p>;
  };
  return (
    <div className="poke">
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};

export default Pokemon;
