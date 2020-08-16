import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import ReactPaginate from "react-paginate";
import { GetPokemonList } from "../../store/actions/pokemonActions";
import { Link } from "react-router-dom";
import "./PokemonList.scss";

const PokemonList = (props: { history: string[] }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector<any, any>((state) => state.PokemonList);
  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };
  useEffect(() => {
    const Fetch = (page = 1) => {
      dispatch(GetPokemonList(1));
    };
    Fetch(1);
  }, [dispatch]);
  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading</p>;
    }
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="list-wrapper">
          {pokemonList.data.map((el: { name: string }, index: number) => {
            return (
              <div key={index} className="pokemon-item">
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>Ver</Link>
              </div>
            );
          })}
        </div>
      );
    }
    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
    return <p>Unable to get data</p>;
  };
  return (
    <div>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Busqueda"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          Buscar
        </button>
      </div>
      {ShowData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName="pagination"
        />
      )}
    </div>
  );
};

export default PokemonList;
