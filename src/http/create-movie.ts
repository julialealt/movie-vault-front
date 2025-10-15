import { axiosInstance } from "@/lib/axios"

interface CreateMovieRequest {
  title: string
  synopsis: string
  cover: File
  rating: number
}

export async function createMovie({
  title,
  synopsis,
  cover,
  rating,
}: CreateMovieRequest) {
  const data = new FormData()

  data.append('title', title)
  data.append('synopsis', synopsis)
  data.append('cover', cover)
  data.append('rating', String(rating))

  const response = await axiosInstance.post('/movies', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}
