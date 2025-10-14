import { MovieCard } from "@/components/movie-card";
import { BookList, PageContainer } from "./styles";
import { Header } from "@/components/header";

export function List() {
  return (
    <PageContainer>
      <Header />
      {/* <Empty /> */}
      <BookList>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </BookList>
    </PageContainer>
  )
}