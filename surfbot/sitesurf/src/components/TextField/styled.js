import styled from "styled-components";
import BasicTextfield from "@mui/material/TextField";

export const Textfield = styled(BasicTextfield)`
  &.MuiTextField-root {
    width: ${props => props.width || '470px'};
    margin: ${props => props.margin};
    height: 50px;
    margin-bottom: 43px;
    background: #eff4f9;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
    border-radius: 5px;
  }
`;
