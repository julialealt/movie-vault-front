import { axiosInstance } from "@/lib/axios"
import type { Movie } from "@/types/movie"

interface GetMovieResponse {
  movie: Movie
}

export async function getMovie(movieId: string): Promise<Movie> {
  const response = await axiosInstance.get<GetMovieResponse>(`/movies/${movieId}`)
  return response.data.movie
}
