import React from "react";

import {
  Container,
  ContainerMain,
  BoxTitle,
  BoxContainer,
  BoxField,
  BoxRadio,
  BoxCard,
  CardBody,
  CardContainer,
  BoxLeft,
  BoxRigth,
  ContainerInput
} from "./styled";

import Box from "@mui/material/Box";
import { Textfield } from "../../components/TextField/styled";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "../../components/Button";
import LockIcon from "@mui/icons-material/Lock";
import Divider from "@mui/material/Divider";
import { toast } from "react-toastify";

import prancha from "../../assets/prancha.svg";

export default function Matricula() {
  const message = () => toast("Matricula realizada com sucesso!");
  return (
    <ContainerMain>
      <Container>
        <BoxTitle>
          <Typography variant="h1">Matricule-se</Typography>
        </BoxTitle>
        <BoxContainer>

        <ContainerInput>
        <BoxLeft>
          <Textfield
            id="standard-multiline-static"
            label="Nome"
            variant="outlined"
            width="570px"
          />
          <Textfield
            id="standard-multiline-static"
            label="Email"
            variant="outlined"
            width="570px"
          />
          <Textfield
            id="standard-multiline-static"
            label="CPF"
            variant="outlined"
            placeholder="111.111.111.01"
            width="570px"
          />
          <BoxField>
            <Box>
              <Textfield
                id="standard-multiline-static"
                label="Endereço"
                variant="outlined"
                width="270px"
                margin="10px"
              />
              <Textfield
                id="standard-multiline-static"
                label="Estado"
                variant="outlined"
                placeholder="Rua, Número e Bairro"
                select
                width="270px"
                margin="10px"
              />
            </Box>
            <Box className="box-input">
              <Box>
                <Textfield
                  id="standard-multiline-static"
                  label="Cep"
                  variant="outlined"
                  placeholder="22.222-000"
                  width="270px"
                  margin="10px"
                />
                <Textfield
                  id="standard-multiline-static"
                  label="Cidade"
                  variant="outlined"
                  width="270px"
                  margin="10px"
                  select
                />
              </Box>
            </Box>
          </BoxField>
          </BoxLeft>
          <BoxRigth>
        <BoxCard>
          <Typography variant="body2" mt={2} id="titleCard">
            Escolha o Plano
          </Typography>
          <BoxRadio>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="infantil"
                control={<Radio />}
                label="Infantil"
                checked
                id="radio"
                margin="10px"
              />
              <FormControlLabel
                value="adulto"
                control={<Radio />}
                label="Adulto"
                margin="10px"
                id="radios"
              />
              <FormControlLabel
                value="profissional"
                control={<Radio />}
                label="Profissional"
                margin="10px"
                id="radios"
              />
            </RadioGroup>
          </BoxRadio>
          <CardContainer>
            <CardBody>
              <Box className="pranchas">
                <img src={prancha} alt="Prancha" className="pranchas" />
              </Box>
              <Typography
                variant="h2"
                sx={{ fontSize: 24 }}
                color=" #445566;"
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
            </CardBody>
          </CardContainer>
        </BoxCard>
          </BoxRigth>
          </ContainerInput>  
          
          <Typography variant="body1" color="primary">
            Forma de pagamento
          </Typography>
        </BoxContainer>
        <BoxRadio>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="cartao"
              control={<Radio />}
              label="Cartão de Crédito"
              checked
              id="radio"
              margin="10px"
            />
            <FormControlLabel
              value="boleto"
              control={<Radio />}
              label="Boleto bancário"
              margin="10px"
            />
          </RadioGroup>
        </BoxRadio>
        <BoxContainer>
          <BoxField>
            <Box className="box-input">
              <Box>
                <Textfield
                  id="standard-multiline-static"
                  label="Nome no cartão"
                  placeholder="Nome Impresso no Cartão"
                  variant="outlined"
                  width="270px"
                  margin="10px"
                />
                <Textfield
                  id="standard-multiline-static"
                  label="Mês"
                  variant="outlined"
                  width="120px"
                  select
                  margin="10px"
                />
                <Textfield
                  id="standard-multiline-static"
                  label="Ano"
                  variant="outlined"
                  width="120px"
                  select
                  margin="10px"
                />
              </Box>
              <Box className="endereco">
                <Textfield
                  id="standard-multiline-static"
                  label="Número do Cartão"
                  placeholder="5555 5555 5555 5555"
                  variant="outlined"
                  width="270px"
                  margin="10px"
                />
                <Textfield
                  id="standard-multiline-static"
                  label="Código de Segurança"
                  placeholder="XXX"
                  variant="outlined"
                  select
                  width="270px"
                  margin="10px"
                />
              </Box>
            </Box>
          </BoxField>
          <Typography variant="body1">
            Seu cartão será debitado em R$ 49,00
          </Typography>
          <Button onClick={message}variant="contained" size="large" id="button">
            <Typography variant="body1">Realizar Matricula</Typography>
          </Button>
          <Typography variant="body2" mt={2}>
            <LockIcon color="success" size="small" /> Informações seguras e
            criptografadas
          </Typography>
        </BoxContainer>
      </Container>
    </ContainerMain>
  );
}
