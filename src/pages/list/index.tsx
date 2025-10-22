import { MovieCard } from "@/components/movie-card"
import { BookList, Description, PageContainer } from "./styles"
import { Header } from "@/components/header"
import { useQuery } from "@tanstack/react-query"
import { listMovies } from "@/http/list-movies"
import { Empty } from "@/components/empty"

export function List() {
  const { data: movies, isLoading, isError } = useQuery({
    queryKey: ['movies'],
    queryFn: listMovies,
  })

  return (
    <PageContainer>
      <Header />

      {isLoading && <Description>Carregando filmes...</Description>}
      {isError && <Description>Erro ao carregar filmes</Description>}

      {movies && movies.length > 0 && (
        <BookList>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </BookList>
      )}

      {movies && movies.length === 0 && !isLoading && <Empty />}

    </PageContainer>
  )
}