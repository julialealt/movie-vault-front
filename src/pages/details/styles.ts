import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #09090b;
  justify-content: flex-start;
  padding: 32px 64px;
  gap: 32px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
`

export const ImageStyled = styled.img`
  height: 360px;
  width: 271px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid ${props => props.theme["movie-stoke"]};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  gap: 20px;
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
`

export const Title = styled.span`
  ${mixins.fonts.semibold_h2};
  color: ${props => props.theme.white};
`

export const Description = styled.p`
  ${mixins.fonts.medium_h4};
  color: ${props => props.theme["zinc-300"]};
`

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 0;
  gap: 20px;
`

export const Right = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`
