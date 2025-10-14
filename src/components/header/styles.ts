import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

export const HeaderTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`

export const Title = styled.span`
  ${mixins.fonts.semibold_h2};
  color: ${props => props.theme.white};
`

export const Description = styled.p`
  ${mixins.fonts.medium_h4};
  color: ${props => props.theme["zinc-400"]};
`