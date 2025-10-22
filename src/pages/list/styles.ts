import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #09090b;
  justify-content: flex-start;
  padding: 32px 64px;
  gap: 32px;
`

export const BookList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px 20px;
  padding-bottom: 32px;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme['zinc-300']};
`
