import { Pencil, Star, Trash } from "lucide-react";
import { Button } from "../button";
import superman from "@/assets/superman.jfif"
import { Card, CardContent, CardFooter, Description, ImageStyled, Info, Title } from "./styles";
import { StarsContainer } from "@/pages/details/styles";
import { useNavigate } from "react-router";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import { DeleteModal } from "../delete-modal";
import { useState } from "react";
import { UpdateModal } from "../update-modal";

export function MovieCard() {
  const navigate = useNavigate()

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const stars = [
    { filled: true, color: "#FDC700" },
    { filled: true, color: "#FDC700" },
    { filled: true, color: "#FDC700" },
    { filled: true, color: "#FDC700" },
    { filled: false, color: "#717182" },
  ];

  return (
    <Card>
      <CardContent
        onClick={(e) => {
          e.stopPropagation()
          navigate("/movies/id")
        }}
      >
        <ImageStyled src={superman} />
        <Info>
          <Title>Superman</Title>
          <Description>
            O Superman é um super-herói fictício que aparece nas histórias em quadrinhos publicadas pela DC Comics. Criado por Jerry Siegel e Joe Shuster, ele fez sua primeira aparição na Action Comics #1 em 1938. Superman é conhecido por seus poderes extraordinários, incluindo superforça, voo, visão de calor e invulnerabilidade, além de sua identidade secreta como Clark Kent, um repórter do jornal Daily Planet.
          </Description>
          <StarsContainer>
            {stars.map((star, index) => (
              <Star
                key={index}
                fill={star.filled ? star.color : "none"}
                stroke={star.color}
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

          <UpdateModal />
        </AlertDialog>

        <AlertDialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="danger" style={{ padding: '8px' }}><Trash size={16} /></Button>
          </AlertDialogTrigger>

          <DeleteModal />
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
