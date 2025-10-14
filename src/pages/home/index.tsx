import { Clapperboard, Film, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { ContentContainer, Description, InputContainer, InputStyled, LogoContainer, PageContainer, Title, Top } from "./styles";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { CreateModal } from "@/components/create-modal";

export function Home() {
  const theme = useTheme()
  const navigate = useNavigate()

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <PageContainer>
      <Top>
        <LogoContainer>
          <Clapperboard size={24} color={theme.white} />
          <Title>movie.vault</Title>
        </LogoContainer>
        <Description>Sua coleção de filmes, organizada e sempre à mão!</Description>
      </Top>

      <ContentContainer>
        <InputContainer>
          <Film size={20} color={theme["zinc-400"]} />
          <InputStyled type="text" placeholder="Qual filme você assistiu hoje?" />
        </InputContainer>

        <AlertDialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <AlertDialogTrigger asChild>
            <Button><Plus size={16} color={theme.black} /> Adicionar filme</Button>
          </AlertDialogTrigger>

          <CreateModal />
        </AlertDialog>
      </ContentContainer>

      <Button variant="secondary" onClick={() => navigate("/movies")}>Explorar filmes</Button>
    </PageContainer>
  )
}