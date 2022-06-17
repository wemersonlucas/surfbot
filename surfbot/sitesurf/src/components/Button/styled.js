import styled from "styled-components";
import ButtonBasic from "@mui/material/Button";

export const Button = styled(ButtonBasic)`
  &.MuiButton-sizeSmall {
    width: 200px;
    height: 50px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    background: #EE2211;
    border-radius: 0px 5px 5px 0px;
  }
  &.MuiButton-sizeMedium {
    width: 230px;
    height: 40px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    background-color: #445566;
  }
  &.MuiButton-sizeLarge {
    width: 230px;
    height: 50px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    background-color: #445566;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;
