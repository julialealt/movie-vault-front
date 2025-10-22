import { axiosInstance } from "@/lib/axios"

export async function deleteMovie(movieId: string): Promise<void> {
  await axiosInstance.delete(`/movies/${movieId}`)
}
