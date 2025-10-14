import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star, Upload, X } from "lucide-react";
import { Button } from "../button";
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "../ui/alert-dialog";
import { useTheme } from "styled-components";

const stars = [1, 2, 3, 4, 5];

export function CreateModal() {
  const theme = useTheme();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <AlertDialogContent className="bg-zinc-900 border-zinc-800 px-6 py-5">
      <AlertDialogHeader className="flex flex-row items-center justify-between mb-4">
        <AlertDialogTitle className="text-white text-lg font-semibold">
          Adicionar filme
        </AlertDialogTitle>
        <AlertDialogCancel asChild>
          <Button variant="icon"><X size={20} /></Button>
        </AlertDialogCancel>
      </AlertDialogHeader>

      <div className="flex flex-col gap-4">

        <div className="grid gap-2">
          <Label className="text-zinc-400 font-medium">Título</Label>
          <Input
            placeholder="Digite o título do filme"
            className="h-12 bg-zinc-950 border-zinc-800 placeholder:text-zinc-500 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
          />
        </div>

        <div className="grid gap-2">
          <Label className="text-zinc-400 font-medium">Capa</Label>
          <label
            htmlFor="cover-upload"
            className="h-12 w-full bg-zinc-950 rounded-lg border border-zinc-800 px-3 py-2 flex items-center gap-2 cursor-pointer hover:border-zinc-700 transition-colors"
          >
            <Upload className="w-4 h-4 text-zinc-500" />
            <span className="flex-1 text-zinc-500 text-sm">
              Faça o upload da capa do filme
            </span>
            <input id="cover-upload" type="file" className="sr-only rounded-lg" />
          </label>
        </div>

        <div className="grid gap-2">
          <Label className="text-zinc-400 font-medium">Sinopse</Label>
          <Textarea
            placeholder="Descreva brevemente o filme"
            className="h-[120px] bg-zinc-950 border-zinc-800 placeholder:text-zinc-500 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
          />
        </div>

        <div className="grid gap-2">
          <Label className="text-zinc-400 font-medium">Avaliação</Label>
          <div className="flex items-start gap-2">
            {stars.map((starValue) => (
              <button
                key={starValue}
                type="button"
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                className="text-zinc-500 transition-colors duration-500 ease-in cursor-pointer"
              >
                <Star
                  size={20}
                  fill={starValue <= (hover || rating) ? theme.yellow : 'transparent'}
                  stroke={starValue <= (hover || rating) ? theme.yellow : 'currentColor'}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <AlertDialogFooter className="mt-6">
        <AlertDialogCancel asChild>
          <Button variant="secondary">Cancelar</Button>
        </AlertDialogCancel>

        <Button>Adicionar</Button>
      </AlertDialogFooter>

    </AlertDialogContent>
  );
}