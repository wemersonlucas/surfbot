import { Typography } from "@mui/material";
import React from "react";

import { FooterContainer } from "./styled";
import Box from '@mui/material/Box';

import prancha from '../../assets/prancha.png'

export default function Footer() {
  return (
    <FooterContainer>
      <Typography variant="body1">
      Surfnet 2021 - Alguns direitos reservados.
      </Typography>
      <Box>
       <img src={prancha} alt="Prancha"/>
      </Box>
    </FooterContainer>
  );
}

