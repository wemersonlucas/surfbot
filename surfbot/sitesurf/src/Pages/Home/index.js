import React from "react";

import Contato from "../../components/Contato";
import ImageInput from "../../components/ImageInput";
import Aulas from "../../components/Aulas";

import { Container } from "./styled";

export default function Home() {
  return (
    <Container>
      <ImageInput/>
      <Aulas/>
      <Contato />
    </Container>
  );
}
