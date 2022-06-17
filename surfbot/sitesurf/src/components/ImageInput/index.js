import React from "react";

// Components
import Button from "../../components/Button";

//Components Material UI
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography } from "@mui/material";

// Styled Components
import { ContainerMain } from "./styled";

export default function ImageInput() {
  return (
    <ContainerMain>
      <Typography variant="h1">Escola de Surf</Typography>
      <form action="">
        <TextField id="outlined-basic" placeholder="Email" variant="outlined" />
        <Button size="small" variant="contained" endIcon={<ArrowForwardIcon />}>
          <a href="/matricula" alt="Link Matricula" id="matricule-se">
            Matricule-se
          </a>
        </Button>
      </form>
    </ContainerMain>
  );
}
