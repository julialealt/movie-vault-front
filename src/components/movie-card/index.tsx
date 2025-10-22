import { Pencil, Star, Trash } from "lucide-react"
import { Button } from "../button"
import { Card, CardContent, CardFooter, Description, ImageStyled, Info, Title } from "./styles"
import { StarsContainer } from "@/pages/details/styles"
import { useNavigate } from "react-router"
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog"
import { DeleteModal } from "../delete-modal"
import { useState } from "react"
import { UpdateModal } from "../update-modal"
import type { Movie } from "@/types/movie"
import { useTheme } from "styled-components"
import { generateStars } from "@/utils/generate-stars"

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate()
  const theme = useTheme()

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const stars = generateStars(movie.rating)
  const coverUrl = `${import.meta.env.VITE_S3_BASE_URL}/${movie.coverKey}`

  const handleNavigateToDetails = () => {
    navigate(`/movies/${movie.id}`)
  }

  const handleCloseModals = () => {
    setIsUpdateModalOpen(false)
    setIsDeleteModalOpen(false)
  }

  return (
    <Card>
      <CardContent onClick={handleNavigateToDetails}>
        <ImageStyled src={coverUrl} alt={`Capa do filme ${movie.title}`} />
        <Info>
          <Title>{movie.title}</Title>
          <Description>{movie.synopsis}</Description>
          <StarsContainer>
            {stars.map((star, index) => (
              <Star
                key={index}
                fill={star.filled ? theme.yellow : "none"}
                stroke={star.filled ? theme.yellow : theme["zinc-500"]}
                size={16}
              />
            ))}
          </StarsContainer>
        </Info>
      </CardContent>

      <CardFooter>
        <AlertDialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="tertiary" style={{ padding: '8px' }}><Pencil size={16} /></Button>
          </AlertDialogTrigger>

          <UpdateModal
            movie={movie}
            onClose={handleCloseModals}
          />
        </AlertDialog>

        <AlertDialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="danger" style={{ padding: '8px' }}><Trash size={16} /></Button>
          </AlertDialogTrigger>

          <DeleteModal
            movieId={movie.id}
            onClose={handleCloseModals}
          />
        </AlertDialog>
      </CardFooter>
    </Card>
  )
}
