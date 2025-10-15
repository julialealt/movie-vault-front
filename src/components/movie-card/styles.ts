import { mixins } from "@/styles/mixins";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 230px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid #27272A;
  background: #09090B;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    ${mixins.shadow.level2}
    transform: scale(1.03) translateY(-5px);
  }
`

export const CardContent = styled.div`
  display: flex;
  height: 456px;
  padding: 16px 16px 0 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  cursor: pointer;
`

export const ImageStyled = styled.img`
  height: 260px;
  width: 196px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid ${props => props.theme["movie-stoke"]};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`

export const Title = styled.h2`
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`

export const Description = styled.p`
  color: #D4D4D8;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;

  min-height: 60px;
`

export const StartsContainer = styled.div`
  display: flex;
  height: 16px;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`

export const CardFooter = styled.div`
  display: flex;
  padding: 8px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`