import illustration from "../../assets/empty.svg"
import { Container, Description } from "./styles";

export function Empty() {
  return (
    <Container>
      <img src={illustration} />
      <Description>Nenhum filme adicionado ainda. Comece adicionando o primeiro filme!</Description>
    </Container>
  )
}