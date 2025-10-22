import { axiosInstance } from "@/lib/axios"
import type { Movie } from "@/types/movie"

interface ListMoviesResponse {
  movies: Movie[]
}

export async function listMovies(): Promise<Movie[]> {
  const response = await axiosInstance.get<ListMoviesResponse>('/movies')
  return response.data.movies
}
