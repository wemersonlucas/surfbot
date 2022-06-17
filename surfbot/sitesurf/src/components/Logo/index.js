import React from "react";
import { Box } from "./styled";
import logo from "../../assets/logo-surfbot.svg";

export default function Logo() {
  return (
    <Box>
      <img src={logo} alt="logo" />
    </Box>
  );
}