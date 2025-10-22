import { axiosInstance } from "@/lib/axios"
import type { Movie } from "@/types/movie"

export interface UpdateMovieRequest {
  movieId: string
  title?: string
  synopsis?: string
  cover?: File | null
  rating?: number
}

interface UpdateMovieResponse {
  movie: Movie
}

export async function updateMovie({
  movieId,
  title,
  synopsis,
  cover,
  rating,
}: UpdateMovieRequest): Promise<Movie> {
  const data = new FormData()

  if (title !== undefined) data.append('title', title)
  if (synopsis !== undefined) data.append('synopsis', synopsis)
  if (rating !== undefined) data.append('rating', String(rating))
  if (cover) data.append('cover', cover)

  const response = await axiosInstance.put<UpdateMovieResponse>(`/movies/${movieId}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data.movie
}
