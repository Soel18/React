import React from "react";
import { useGetPokemonList } from "../../../hooks/useGetPokemonList";
import PokemonCard from '../../PokemonCard/PokemonCard';
import { Grid } from "../../../shared/Grid/Grid";

const PokemonList: React.FC = () => {
  const { pokemonList, gotNextPage, gotPreviousPage } = useGetPokemonList();

  return ( 
    <Grid goTonextPage={gotNextPage} goTopreviousPage={gotPreviousPage}>
      {pokemonList?.map((pokemon) => (
        <PokemonCard 
          key={pokemon?.name} 
          pokemon={pokemon}  
        />
      ))}
      </Grid>
  )
};

export default PokemonList;