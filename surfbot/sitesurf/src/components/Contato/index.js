import React from "react";

//Components
import Button from "../../components/Button";
import Textfield from "../../components/TextField";

//Components Material ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { toast } from "react-toastify";

//Styled-Components
import { Contact, Form } from "./styled";

//Assets
import icones from "../../assets/bg-icones.svg";

export default function Contato() {
  const message = () => toast("Mensagem enviada com sucesso!");

  return (
    <Contact id="contato">
      <Typography variant="h2" m={3}>
        Contato
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Form>
              <Textfield
                color="background"
                variant="outlined"
                type="text"
                label="Nome"
                autoComplete="off"
                focused
              />
              <Textfield
                color="background"
                variant="outlined"
                type="text"
                label="Email"
                autoComplete="off"
                focused
              />
              <Textfield
                id="standard-multiline-static"
                label="Mensagem"
                multiline
                rows={4}
                variant="outlined"
              />
              <br></br>
              <br></br>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={message}
              >
                <Typography variant="body1">Enviar Mensagem</Typography>
              </Button>
            </Form>
          </Box>
        </Grid>
        <Grid item xs={3} md={3}>
          <Typography variant="h6">Endereço</Typography>
          <Typography variant="body1">Praia Mansa nº 47,</Typography>
          <Typography variant="body1">Rio de Janeiro - RJ</Typography>
          <Typography variant="body1">Procure a barraca vermelha</Typography>
          <a href="/#praia" alt="Link Praia" id="ver-mapa">
            Ver no mapa <ArrowForwardIcon color="error" />
          </a>
          <br></br>
          <Typography variant="h6">Email & Telefone</Typography>
          <Typography variant="body1">contato@surfbot.com</Typography>
          <Typography variant="body1">21 99999-9999</Typography>
          <br></br>
          <Typography variant="h6">
            <span></span>Horário
          </Typography>
          <Typography variant="body1">De sexta à Sábado</Typography>
          <Typography variant="body1">Das 06:00 às 14:00</Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <Box className="box-icones">
            <img src={icones} alt="Prancha" className="icones" />
          </Box>
        </Grid>
      </Grid>
    </Contact>
  );
}
