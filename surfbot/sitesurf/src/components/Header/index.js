import React from "react";
import AppBar from "../AppBar/index.js";
import Box from '@mui/material/Box';

import { ContainerHeader, TopHeader, InfoAula } from "./styled.js";

function Header() {
  return (
    <ContainerHeader>
    <Box>
    <TopHeader>
        <InfoAula>Aula na Praia Mansa de Sexta à Domingo 06:00 as 14:00</InfoAula>
      </TopHeader>
    </Box>
      <AppBar/>
    </ContainerHeader>
  );
}

export default Header;