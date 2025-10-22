import { useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star, Upload, X } from "lucide-react"
import { Button } from "../button"
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "../ui/alert-dialog"
import { useTheme } from "styled-components"
import { z } from "zod"
import type { Movie } from "@/types/movie"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { updateMovie } from "@/http/update-movie"
import { extractFilenameFromKey } from "@/utils/extract-file-name"

const MAX_FILE_SIZE = 50 * 1024 * 1024
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/webp"]

const updateMovieFormSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  synopsis: z.string().min(1, 'A sinopse é obrigatória'),
  cover: z
    .instanceof(FileList)
    .refine((files) => files.length === 0 || files?.[0]?.size <= MAX_FILE_SIZE, `Tamanho máximo de 50MB.`)
    .refine(
      (files) => files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Formato de arquivo inválido"
    ).nullable().optional(),
  rating: z.number().min(0).max(5),
})

type UpdateMovieForm = z.infer<typeof updateMovieFormSchema>

const stars = [1, 2, 3, 4, 5]

interface UpdateModalProps {
  movie: Movie
  onClose: () => void
}

export function UpdateModal({ movie, onClose }: UpdateModalProps) {
  const theme = useTheme()
  const queryClient = useQueryClient()

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<UpdateMovieForm>({
    resolver: zodResolver(updateMovieFormSchema),
    defaultValues: {
      title: movie.title,
      synopsis: movie.synopsis,
      rating: movie.rating,
    },
  })

  const coverFile = watch('cover')
  const coverFileName = useMemo(() => {
    return coverFile && coverFile.length > 0 ? coverFile[0].name : null
  }, [coverFile])

  const currentCoverFilename = useMemo(() => {
    return extractFilenameFromKey(movie.coverKey)
  }, [movie.coverKey])

  const { mutateAsync: updateMovieFn } = useMutation({
    mutationFn: updateMovie,
    onSuccess: (updatedMovie) => {
      queryClient.invalidateQueries({ queryKey: ['movies'] })
      queryClient.setQueryData(['movie', movie.id], updatedMovie)
      toast.success('Filme atualizado com sucesso!')
      onClose()
    },
    onError: () => {
      toast.error('Ocorreu um erro ao atualizar o filme')
    },
  })

  async function handleUpdateMovie(data: UpdateMovieForm) {
    await updateMovieFn({
      movieId: movie.id,
      title: data.title,
      synopsis: data.synopsis,
      cover: data.cover && data.cover.length > 0 ? data.cover[0] : undefined,
      rating: data.rating,
    })
  }

  return (
    <AlertDialogContent className="bg-zinc-900 border-zinc-800 px-6 py-5">
      <AlertDialogHeader className="mb-4 flex flex-row items-center justify-between">
        <AlertDialogTitle className="text-lg font-semibold text-white">
          Editar filme
        </AlertDialogTitle>
        <AlertDialogCancel asChild>
          <Button
            variant="icon"
            onClick={() => {
              onClose()
              reset()
            }}
          >
            <X size={20} />
          </Button>
        </AlertDialogCancel>
      </AlertDialogHeader>

      <form
        onSubmit={handleSubmit(handleUpdateMovie)}
        className="flex flex-col gap-4"
      >
        <div className="grid gap-1.5">
          <Label htmlFor="title" className="font-medium text-zinc-400">
            Título
          </Label>
          <Input
            id="title"
            placeholder="Digite o título do filme"
            className="h-12 rounded-lg border-zinc-800 bg-zinc-950 placeholder:text-zinc-500 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors hover:border-zinc-700 text-white"
            {...register('title')}
          />
          {errors.title && (
            <p className="text-red-500 text-xs">{errors.title.message}</p>
          )}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="cover-upload" className="font-medium text-zinc-400">
            Capa
          </Label>
          <label
            htmlFor="cover-upload"
            className="flex h-12 w-full cursor-pointer items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 transition-colors hover:border-zinc-700 text-white"
          >
            <Upload className="h-4 w-4" />
            <span className="flex-1 text-sm">
              {coverFileName || currentCoverFilename}
            </span>
            <input
              id="cover-upload"
              type="file"
              className="sr-only"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              {...register('cover')}
            />
          </label>
          {errors.cover && (
            <p className="text-xs text-red-500">{errors.cover.message}</p>
          )}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="synopsis" className="font-medium text-zinc-400">
            Sinopse
          </Label>
          <Textarea
            id="synopsis"
            placeholder="Descreva brevemente o filme"
            className="h-[120px] resize-none rounded-lg border-zinc-800 bg-zinc-950 placeholder:text-zinc-500 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors hover:border-zinc-700 text-white"
            {...register('synopsis')}
          />
          {errors.synopsis && (
            <p className="text-xs text-red-500">{errors.synopsis.message}</p>
          )}
        </div>

        <Controller
          name="rating"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <div className="grid gap-1.5">
              <Label className="font-medium text-zinc-400">Avaliação</Label>
              <div className="flex items-center gap-2">
                {stars.map(starValue => (
                  <button
                    key={starValue}
                    type="button"
                    onClick={() => field.onChange(starValue)}
                    className="cursor-pointer text-zinc-500 transition-colors duration-500 ease-in"
                  >
                    <Star
                      size={20}
                      fill={starValue <= field.value ? theme.yellow : 'transparent'}
                      stroke={starValue <= field.value ? theme.yellow : 'currentColor'}
                    />
                  </button>
                ))}
                {field.value > 0 &&
                  <span
                    className="flex items-center gap-2 text-xs leading-none font-medium text-zinc-600 cursor-pointer px-1 hover:text-zinc-700 transition-colors"
                    onClick={() => field.onChange(0)}
                  >
                    Limpar
                  </span>
                }
              </div>
              {errors.rating && (
                <p className="text-xs text-red-500">{errors.rating.message}</p>
              )}
            </div>
          )}
        />

        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                onClose()
                reset()
              }}
            >
              Cancelar
            </Button>
          </AlertDialogCancel>
          <Button type="submit" disabled={isSubmitting}>Salvar alterações</Button>
        </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  )
}