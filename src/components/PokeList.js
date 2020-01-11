import React from "react";
import "./styles/PokeList.css";
import PokeCell from "./PokeCell.js";
import { pokeClasses } from "../pokeClasses.js";

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell
        key={pokeClass.id}
        pokeClass={pokeClass}
        handleOnClick={handleOnClick}
      />
    );
  });
  return <section className="poke-list">{cells}</section>;
};

export default PokeList;
