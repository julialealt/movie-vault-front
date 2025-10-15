import styled, { css } from "styled-components";
import { mixins } from "../../styles/mixins";

export const StyledButton = styled.button<{  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'danger' | 'icon' | 'delete' }>`
  display: inline-flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 8px;
  flex-shrink: 0;

  ${mixins.fonts.medium_h5};
  font-weight: 500;
  line-height: normal;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.primary};
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${props => props.variant === 'secondary' && css`
    background-color: ${props.theme.white};
    border: 1px solid ${props.theme["light-stroke"]};
  `}

  ${props => props.variant === 'tertiary' && css`
    background-color: transparent;
    border: 1px solid ${props.theme["dark-stroke"]};
    color: ${props.theme.white};
  `}

  ${props => props.variant === 'outlined' && css`
    background-color: transparent;
    border: 1px solid ${props.theme["zinc-300"]};
    color: ${props.theme["zinc-300"]};
  `}

  ${props => props.variant === 'danger' && css`
    background-color: transparent;
    border: 1px solid ${props.theme["dark-stroke"]};
    color: ${props.theme.red};
  `}

  ${props => props.variant === 'icon' && css`
    color: ${props.theme["zinc-400"]};
    padding: 8px;
    background-color: transparent;
    border: none;
  `}

  ${props => props.variant === 'delete' && css`
    background-color: ${props.theme.red};
    color: ${props.theme.white};
  `}
`