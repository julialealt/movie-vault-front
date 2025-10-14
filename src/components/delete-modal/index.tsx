import { Button } from "../button";
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "../ui/alert-dialog";

export function DeleteModal() {
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
          <Button variant="outlined">Cancelar</Button>
        </AlertDialogCancel>

        <Button variant="delete">Excluir</Button>
      </AlertDialogFooter>

    </AlertDialogContent>
  );
}