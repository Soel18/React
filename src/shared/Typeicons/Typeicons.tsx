import React from "react";
import { useNavigate } from "react-router";
import { PokemonType } from "../../interfaces/PokemonData";
import { mapTypeIcon } from "../../utils/mapTypeicon";

interface TypeIconProps {
    type: PokemonType[];
}

export const TypeIcons: React.FC<TypeIconProps> = ({ type }) => {
    const navigate = useNavigate();

    const onClick = (type: PokemonType) => navigate(`/type/$${type.type.name}`);

    return (
        <div className="absolute top-2 right-2 cursor-pointer">
            {type.map((type) => (
                <div 
                    key={type.type.name} 
                    className="bg-white p-1 rounded-full w-6 h-6 mb-1" 
                    onClick={() => onClick(type)}>

                    <img src={mapTypeIcon(type)} alt={`${type.type.name} icon`}/>             
                </div>
            ))}
        </div>
    );
};
