import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../constants/url';
import { PokemonListItem } from '../interfaces/PokemonListItem'; 

interface Pokemon {
    pokemon: PokemonListItem;
}

interface TypeListInfo {
    pokemon: Pokemon[];
}

const useGetPokemonListByType = (typeName: string) => {
    const sanitizedTypeName = typeName.replace(/^\$/, ""); // Elimina el símbolo '$' si está presente

    const { data, isLoading, error } = useQuery<TypeListInfo>({
        queryKey: ["pokemonListByType", sanitizedTypeName],
        queryFn: async () => {
            const response = await fetch(`${BASE_URL}/type/${sanitizedTypeName}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }   
            return response.json();
        },
    });

    return {
        pokemonList: data?.pokemon ?? [],
        isLoading,
        error: error?.message ?? null,
    };
};

export default useGetPokemonListByType;