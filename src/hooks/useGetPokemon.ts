import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../constants/url';

const useGetPokemon = (pokemonName?: string, pokemonId?: number) => {
    const { data: pokemonData, isLoading, error } = useQuery({  
        queryKey: ['pokemon', pokemonName, pokemonId],
        queryFn: async () => {
            const response = await fetch(
                `${BASE_URL}/pokemon/${pokemonName || pokemonId}`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        },
    });
    return { pokemonData, isLoading, error: error?.message ?? null };
};

export default useGetPokemon;