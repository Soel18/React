import { PokemonData } from "../interfaces/PokemonData";

interface PokemonType {
    slot: number;
    type: {
        name: string;
    };
}

export const getMainPokemonType = (pokemonData: PokemonData): string => {
  return pokemonData.types[0]?.type.name ?? "unknown"; // Get the first type or return 'unknown'
};

{/* export const getMainPokemonType = (pokemon: PokemonData & { type: PokemonType[] }): string | undefined => 
    pokemon.type.find(type => type.slot === 1)?.type.name; */} 