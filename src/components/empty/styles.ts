import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 30px;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme['zinc-300']};
`