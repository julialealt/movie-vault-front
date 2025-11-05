import { Clapperboard, Plus } from "lucide-react";
import { Description, HeaderContainer, HeaderTop, LogoContainer, Title } from "./styles";
import { useTheme } from "styled-components";
import { Button } from "../button";
import { useNavigate } from "react-router";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import { CreateModal } from "../create-modal";
import { useState } from "react";

interface HeaderProps {
  variant?: 'primary' | 'secondary';
}

export function Header({ variant = 'primary' }: HeaderProps) {
  const theme = useTheme()
  const navigate = useNavigate()

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderTop>
        <LogoContainer onClick={() => navigate('/')}>
          <Clapperboard size={20} color={theme.white} />
          <Title>movie.vault</Title>
        </LogoContainer>

        {variant === 'primary' && (
          <AlertDialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <AlertDialogTrigger asChild>
              <Button><Plus size={16} color={theme.black} /> Adicionar filme</Button>
            </AlertDialogTrigger>

            <CreateModal onClose={setIsCreateModalOpen} />
          </AlertDialog>)}
      </HeaderTop>

      {variant === 'primary' && <Description>Sua coleção de filmes, organizada e sempre à mão!</Description>}
    </HeaderContainer>
  )
}