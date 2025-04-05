import React, { useMemo } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import { useParams } from "react-router-dom";
import { getMainPokemonType } from "../../utils/getMainPokemonType";
import { capotalizeFirstLetter } from "../../utils/capitilizerFirstLetter";
import { convertLibsTokg } from "../../utils/convertLbsToKg";
import { convertInchesToCm } from "../../utils/convertInchesToCm";
import { PokemonSprites } from "../../PokemonSprites.tsx/PokemonSprites";
import { TypeIcons } from "../../shared/Typeicons/Typeicons";

export const PokemonInfo = () => {
    const { pokemonName } = useParams();
    const { pokemonData } = useGetPokemon(pokemonName);
    const mainType = useMemo(
        () => pokemonData && getMainPokemonType(pokemonData),
        [pokemonData]   
    );

    return (
        <div className="flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg">
            <div
                className={`${mainType}-background w-72 h-72 rounded-l-lg items-center`}
                >
                <img
                    src={pokemonData?.sprites?.front_default}
                    alt={pokemonData?.name ?? ""}
                    className="mx-auto w-72 h-72"
                />
            </div>
            <div className="flex flex-col grow p-5 gap-3">
                <div className="relative flex">
                    <h1 className="text-3xl">
                        {capotalizeFirstLetter(pokemonData?.name ?? "")}
                    </h1>
                    <TypeIcons type={pokemonData?.types ?? []}/>
                </div>
                <h1 className="text-3xl">{capotalizeFirstLetter(pokemonData?.name ?? "")}</h1>
                <span>{`Weight: ${convertLibsTokg(pokemonData?.Weight ?? 0)} kg`}</span>
                <span>{`Height: ${convertInchesToCm(pokemonData?.height ?? 0)} cm`}</span>
                <PokemonSprites pokemonName={pokemonName} />
            </div>            
        </div>
    );
}; 

{/*  */}