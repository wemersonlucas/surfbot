import React from "react";

//Components
import Button from "../../components/Button";

//Components Material ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Assets
import fotoLocal from "../../assets/foto-local.png";
import fotoMap from "../../assets/foto-mapa.png";
import snadalhas from "../../assets/sandalhas.svg";
import coco from "../../assets/coco.svg";
import boia from "../../assets/boia.svg";
import ondas from "../../assets/ondas.svg";
import prancha from "../../assets/prancha.svg";

//Styled-Components
import {
  PraiaContainer,
  Aulas,
  CardContainer,
  BoxLeft,
  BoxRight,
  CardBody,
} from "./styled";
import Blockquote from "../Blockquote";

export default function Praia() {
  return (
    <>
      <PraiaContainer>
        <BoxLeft>
          <Box id="praia">
            <img src={fotoLocal} alt="Foto da Escola" />
            <img id="fotoMap" src={fotoMap} alt="Foto da localização " />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.338230228704!2d-43.377160984404135!3d-23.011350247397022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1655471987083!5m2!1spt-BR!2sbr"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="fotoMap"></iframe> */}
          </Box>
          <Box className="como-chegar">
            <span></span>
            <Typography variant="h4">Como Chegar:</Typography>
          </Box>
          <Box className="como-ir">
            <Typography variant="body1">
              <span>Carro</span> pela via Lúcio costa sentido Barra
            </Typography>
            <Typography variant="body1">
              <span>Ônibus</span> linhas 2333, 138, 189 e 170
            </Typography>
            <Typography variant="body1">
              <span>Metrô</span> linha azul sentido Zona Sul
            </Typography>
          </Box>
        </BoxLeft>

        <BoxRight>
          <Typography variant="h2">
            <span>Aulas</span> em uma das melhores praias do <span>Rio</span>.
          </Typography>
          <Box className="container-item">
            <Box className="item-praia">
              <img src={snadalhas} alt="Sandalhas" />
              <span>8 km da costa</span>
            </Box>
            <Box className="item-praia">
              <img src={coco} alt="Côco" />
              <span>Restaurante à beira mar</span>
            </Box>
            <Box className="item-praia">
              <img src={boia} alt="Bóia salva vidas" />
              <span>Salva vidas a cada 300m</span>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1">
              Como cidade capital, abriga na zona chamada Plateau, promontório à
              beira-mar, edifícios públicos e outras construções de importância,
              como o Palácio Presidencial, construído no fim do século XIX para
              ser a residência do governador português. Como cidade capital,
              abriga na zona chamada Plateau, promontório à beira-mar, edifícios
              públicos e outras construções de importância, como o Palácio
              Presidencial, construído no fim do século XIX para ser a
              residência do governador português.
            </Typography>
            <br></br>
            <Typography variant="body1">
              Como cidade capital, abriga na zona chamada Plateau, promontório à
              beira-mar, edifícios públicos e outras construções de importância,
              como o Palácio Presidencial, construído no fim do século XIX para
              ser a residência do governador português. Como cidade capital,
              abriga na zona chamada Plateau, promontório à beira-mar, edifícios
              públicos e outras construções de importância, como o Palácio
              Presidencial, construído no fim do século XIX para ser a
              residência do governador português.
            </Typography>
          </Box>
        </BoxRight>
      </PraiaContainer>
      <Aulas id="aulas">
        <Grid xs={12} md={12}>
          <img src={ondas} alt="Ondas" />
          <Typography variant="h2" m={3}>
            Aulas
          </Typography>
        </Grid>
      </Aulas>
      <CardContainer>
        <CardBody>
          <Box className="pranchas">
            <img src={prancha} alt="Prancha" className="pranchas" />
          </Box>
          <Typography
            variant="h2"
            sx={{ fontSize: 24 }}
            color="# #445566;"
            gutterBottom
          >
            Infantil
          </Typography>
          <Divider />
          <Box className="plano-aula">
            <Typography>
              <span></span> Público entre 5 e 15 anos
            </Typography>
            <Typography variant="body1">
              <span></span> Equipamentos fornecidos
            </Typography>
            <Typography variant="body1">
              <span></span> Horários de Sex. à Sab.
            </Typography>
            <Typography variant="body1">
              <span></span> 2 horas seguidas de aula
            </Typography>
          </Box>
          <Box className="valor">
            <span>R$ 49,00 / AULA</span>
          </Box>
          <Button variant="contained" endIcon={<ArrowForwardIcon />}>
            <a href="/matricula" alt="Link Matricula" id="matricule-se">
              Matricule-se
            </a>
          </Button>
        </CardBody>

        <CardBody>
          <Box className="pranchas">
            <img src={prancha} alt="Prancha" className="pranchas" />
            <img src={prancha} alt="Prancha" className="pranchas" />
          </Box>
          <Typography
            variant="h2"
            sx={{ fontSize: 24 }}
            color="# #445566;"
            gutterBottom
          >
            Adulto
          </Typography>
          <Divider />
          <Box className="plano-aula">
            <Typography variant="body1">
              <span></span> Público entre 16 e 80 anos
            </Typography>
            <Typography variant="body1">
              <span></span> Equipamentos fornecidos
            </Typography>
            <Typography variant="body1">
              <span></span> Horários de Sex. à Sab.
            </Typography>
            <Typography variant="body1">
              <span></span> 3 horas seguidas de aula
            </Typography>
          </Box>
          <Box className="valor">
            <span>R$ 69,00 / AULA</span>
          </Box>
          <Button variant="contained" endIcon={<ArrowForwardIcon />}>
            <a href="/matricula" alt="Link Matricula" id="matricule-se">
              Matricule-se
            </a>
          </Button>
        </CardBody>

        <CardBody>
          <Box className="pranchas">
            <img src={prancha} alt="Prancha" className="pranchas" />
            <img src={prancha} alt="Prancha" className="pranchas" />
            <img src={prancha} alt="Prancha" className="pranchas" />
          </Box>
          <Typography
            variant="h2"
            sx={{ fontSize: 24 }}
            color="# #445566;"
            gutterBottom
          >
            Profissional
          </Typography>
          <Divider />
          <Box className="plano-aula">
            <Typography>
              <span></span> Experiência de 3 anos no surf
            </Typography>
            <Typography variant="body1">
              <span></span> Você deve trazer o equipamento
            </Typography>
            <Typography variant="body1">
              <span></span> Horários de Sex. à Sab.
            </Typography>
            <Typography variant="body1">
              <span></span> 4 horas seguidas de aula
            </Typography>
          </Box>
          <Box className="valor">
            <span>R$ 99,00 / AULA</span>
          </Box>
          <Button
            variant="contained"
            size="medium"
            endIcon={<ArrowForwardIcon />}
          >
            <a href="/matricula" alt="Link Matricula" id="matricule-se">
              Matricule-se
            </a>
          </Button>
        </CardBody>
      </CardContainer>
      <Aulas>
        <Grid item xs={12} md={12}>
          <Typography variant="body1" m={3}>
            Possui um grupo com mais de <span>3 pessoas?</span>
            <br></br>
            Entre <a href="#contato">em contato</a> para um desconto
            personalizado.
          </Typography>
        </Grid>
        <Blockquote />
      </Aulas>
    </>
  );
}
