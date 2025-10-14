import movie from '../../assets/superman.jfif'
import { Pencil, Star, Trash } from "lucide-react";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Content, ImageStyled, Info, Main, PageContainer, Title, Top, Description, Bottom, Right, StarsContainer } from "./styles";
import { useNavigate } from "react-router";
import { useTheme } from 'styled-components';
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { UpdateModal } from '@/components/update-modal';
import { DeleteModal } from '@/components/delete-modal';
import { useState } from 'react';

export function Details() {
  const theme = useTheme()
  const navigate = useNavigate()

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <PageContainer>
      <Header variant="secondary" />
      <Main>
        <Content>
          <ImageStyled src={movie} />
          <Info>
            <Top>
              <Title>Superman</Title>
              <StarsContainer>
                <Star size={20} fill={theme.yellow} color={theme.yellow} />
                <Star size={20} fill={theme.yellow} color={theme.yellow} />
                <Star size={20} fill={theme.yellow} color={theme.yellow} />
                <Star size={20} fill={theme.yellow} color={theme.yellow} />
                <Star size={20} fill={theme['zinc-500']} color={theme['zinc-500']} />
              </StarsContainer>
            </Top>
            <Description>
              Um herói movido pela crença e pela esperança na bondade da humanidade. Em Superman, acompanhamos a jornada do super-herói em tentar conciliar suas duas personas: sua herança extraterrestre como kryptoniano e sua vida humana, criado como Clark Kent (David Corenswet) na cidade de Smallville no Kansas. Dirigido por James Gunn, o novo filme irá reunir personagens, heróis e vilões clássicos da história de Superman, como Lex Luthor (Nicholas Hoult), Lois Lane (Rachel Brosnahan), Lanterna Verde (Nathan Fillion), Mulher-Gavião (Isabela Merced), entre outros. O chamado de Superman será colocado à prova através de uma série de novas aventuras épicas e diante de uma sociedade que enxerga seus valores de justiça e verdade como antiquados.
            </Description>
          </Info>
        </Content>

        <Bottom>
          <Button variant="outlined" onClick={() => navigate('/movies')}>Voltar</Button>
          <Right>
            <AlertDialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
              <AlertDialogTrigger asChild>
                <Button variant="tertiary"><Pencil size={16} /> Editar</Button>
              </AlertDialogTrigger>

              <UpdateModal />
            </AlertDialog>

            <AlertDialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
              <AlertDialogTrigger asChild>
                <Button variant="danger"><Trash size={16} /> Excluir</Button>
              </AlertDialogTrigger>

              <DeleteModal />
            </AlertDialog>
          </Right>
        </Bottom>
      </Main>
    </PageContainer>
  )
}