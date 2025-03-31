import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BASE_URL } from "../constants/url";
import { PokemonListItem } from "../interfaces/PokemonListItem";

interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

export const useGetPokemonList = () => {
    const [url, setUrl] = useState(`${BASE_URL}/pokemon?limit=36`);

    const { data, isLoading, error } = useQuery<PokemonList>({
        queryKey: ["pokemonList", url],
        queryFn: async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }
    });

    const gotNextPage = () => {
        if (data?.next) {
            setUrl(data.next);
        }
    }

    const gotPreviousPage = () => {
        if (data?.previous) {
            setUrl(data.previous);
        }
    }

    return {
        pokemonList: data?.results ?? [],
        isLoading,
        error: error?.message ?? null,
        gotNextPage: data?.next ? gotNextPage : undefined,
        gotPreviousPage: data?.previous ? gotPreviousPage : undefined
    };

};