import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "../button"
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "../ui/alert-dialog"
import { useNavigate } from "react-router"
import { deleteMovie } from "@/http/delete-movie"
import { toast } from "sonner"

interface DeleteModalProps {
  movieId: string
  onClose: () => void
  isOnDetailsPage?: boolean
}

export function DeleteModal({ movieId, onClose, isOnDetailsPage }: DeleteModalProps) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutateAsync: deleteMovieFn, isPending } = useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] })
      queryClient.removeQueries({ queryKey: ['movie', movieId] })

      toast.success('Filme excluído com sucesso!')
      onClose()

      if (isOnDetailsPage) {
        navigate('/movies')
      }
    },
    onError: () => {
      toast.error('Ocorreu um erro ao excluir o filme')
    }
  })

  const handleDelete = async () => {
    await deleteMovieFn(movieId)
  }

  return (
    <AlertDialogContent className="bg-zinc-900 border-zinc-800 px-6 py-5">
      <AlertDialogHeader className="flex justify-between mb-4">
        <AlertDialogTitle className="text-white text-lg font-semibold">
          Excluir filme
        </AlertDialogTitle>
        <AlertDialogDescription>
          Tem certeza que deseja excluir este filme? <br />Essa ação não pode ser desfeita.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter className="mt-6">
        <AlertDialogCancel asChild>
          <Button
            variant="outlined"
            onClick={onClose}
            disabled={isPending}
          >
            Cancelar
          </Button>
        </AlertDialogCancel>

        <Button
          variant="delete"
          onClick={handleDelete}
          disabled={isPending}
        >
          Excluir
        </Button>
      </AlertDialogFooter>

    </AlertDialogContent>
  )
}
