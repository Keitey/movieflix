import { APIKey } from "./configKey/key";


export const getMovies = async () => {
    const url = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR`)
    const json = await url.json()
    return json
}

export const getMovieDetail = async (id: any) => {
    const url = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR&page=1`)
    const json = await url.json()
    return json
}

