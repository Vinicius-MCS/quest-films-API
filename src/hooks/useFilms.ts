import { useQuery } from '@tanstack/react-query';
import type { DataResponse } from '../types/types.ts'

const FetchFilms = async (): Promise<DataResponse> => {
    const response = await fetch(`https://ghibli-api.vercel.app/api/films`)

    if(!response.ok) throw new Error("Erro ao buscar os filmes")

    return response.json();
}

export function useFilms() {
    return useQuery<DataResponse>({
        queryKey: ["films"],
        queryFn: () => FetchFilms()
    })
}

