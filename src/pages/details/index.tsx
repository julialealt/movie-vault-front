import { Pencil, Star, Trash } from "lucide-react"
import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Content, ImageStyled, Info, Main, PageContainer, Title, Top, Description, Bottom, Right, StarsContainer } from "./styles"
import { useNavigate, useParams } from "react-router"
import { useTheme } from 'styled-components'
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { UpdateModal } from '@/components/update-modal'
import { DeleteModal } from '@/components/delete-modal'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getMovie } from '@/http/get-movie'
import { generateStars } from '@/utils/generate-stars'

export function Details() {
  const { id: movieId } = useParams<{ id: string }>()

  const theme = useTheme()
  const navigate = useNavigate()

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const { data: movie, isLoading, isError } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie(movieId!),
    enabled: !!movieId,
  })

  const handleCloseModals = () => {
    setIsUpdateModalOpen(false)
    setIsDeleteModalOpen(false)
  }

  if (isLoading) return <PageContainer><Header variant="secondary" /><Description>Carregando detalhes...</Description></PageContainer>
  if (isError || !movie) return <PageContainer><Header variant="secondary" /><Description>Erro ao carregar detalhes ou filme não encontrado.</Description></PageContainer>

  const stars = generateStars(movie.rating)
  const coverUrl = `${import.meta.env.VITE_S3_BASE_URL}/${movie.coverKey}`

  return (
    <PageContainer>
      <Header variant="secondary" />
      <Main>
        <Content>
          <ImageStyled src={coverUrl} alt={`Capa do filme ${movie.title}`} />
          <Info>
            <Top>
              <Title>{movie.title}</Title>
              <StarsContainer>
                {stars.map((star, index) => (
                  <Star
                    key={index}
                    size={20}
                    fill={star.filled ? theme.yellow : 'transparent'}
                    stroke={star.filled ? theme.yellow : theme['zinc-500']}
                  />
                ))}
              </StarsContainer>
            </Top>
            <Description>{movie.synopsis}</Description>
          </Info>
        </Content>

        <Bottom>
          <Button variant="outlined" onClick={() => navigate('/movies')}>Voltar</Button>
          <Right>
            <AlertDialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
              <AlertDialogTrigger asChild>
                <Button variant="tertiary"><Pencil size={16} /> Editar</Button>
              </AlertDialogTrigger>

              <UpdateModal
                movie={movie}
                onClose={handleCloseModals}
              />
            </AlertDialog>

            <AlertDialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
              <AlertDialogTrigger asChild>
                <Button variant="danger"><Trash size={16} /> Excluir</Button>
              </AlertDialogTrigger>

              <DeleteModal
                movieId={movie.id}
                isOnDetailsPage
                onClose={handleCloseModals}
              />
            </AlertDialog>
          </Right>
        </Bottom>
      </Main>
    </PageContainer>
  )
}