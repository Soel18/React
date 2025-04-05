import React, { useMemo } from "react";
import { useGetPokemon } from "../../interfaces/PokemonData";
import { PokemonListItem } from "../../interfaces/PokemonListItem";
import { getMainPokemonType } from "../../utils/getMainPokemonType";
import { Label } from "../../shared/Label/Label";
import { capotalizeFirstLetter } from "../../utils/capitilizerFirstLetter";
import { FavoriteButton } from "../../shared/Button/FavoriteButton";
import { useNavigate } from "react-router";
import { TypeIcons } from "../../shared/Typeicons/Typeicons";

interface PokemonCardProps {
    pokemon?: PokemonListItem;
    pokemonId?: number;
    //key: string;
  
}  

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, pokemonId }) => {
    const { pokemonData } = useGetPokemon(pokemon?.name, pokemonId);
    const mainType = useMemo(() => pokemonData && getMainPokemonType(pokemonData), [pokemonData]);
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/pokemon/${pokemonData?.name}`);
    };


    return (
        <div className={`${mainType}-background relative w-56 h-56 rounded-lg shadow-lg p-4 cursor-pointer`}>
            <FavoriteButton pokemonId={pokemonData?.id ?? 0}/>
            <TypeIcons type={pokemonData?.types ?? []}/>
            <div className="flex flex-col items-center mx-auto text-center" onClick={onClick}>
                <Label>{pokemonData?.name ? capotalizeFirstLetter(pokemonData?.name) : ''}</Label>
                <img
                    className="mx-auto w-40 h-40 justify-center"
                    src={pokemonData?.sprites?.front_default}
                    alt={pokemonData?.name ?? ""}
                />
            </div>
        </div>
    );
};

export default PokemonCard;
