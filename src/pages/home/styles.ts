import bg from "@/assets/bg.svg"
import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  justify-content: center;
  padding: 120px 40px;

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1033.852px;
    height: 640px;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Title = styled.span`
  ${mixins.fonts.semibold_h1};
  color: ${props => props.theme.white};
`

export const Description = styled.p`
  ${mixins.fonts.medium_h4};
  color: ${props => props.theme["zinc-400"]};
`

export const ContentContainer = styled.div`
  display: flex;
  width: 720px;
  height: 64px;
  align-items: center;
  gap: 20px;
  padding: 0 16px 0 24px;
  background-color: ${props => props.theme["zinc-900"]};
  border-radius: 12px;
  border: 1px solid ${props => props.theme["dark-stroke"]};
  justify-content: space-between;

  transition: box-shadow 0.3s;

  &:hover {
    ${mixins.shadow.level3};
  }
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
`

export const InputStyled = styled.input`
  ${mixins.fonts.regular_h4};
  background-color: transparent;
  color: ${props => props.theme.white};
  border: none;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme["zinc-400"]};
  }

  &:focus {
    outline: none;
  }
`