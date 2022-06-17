import React from "react";
import { Container} from "./styled";
import logo from "../../assets/logo-surfbot.svg";

export default function MenuItems() {
  return (
    <Container>
     <nav>
        <a href="/">
          <img src={logo} alt="Logo Surfbot" />
        </a>
        <ul>
          <li>
            <a href="/#praia" alt="Link Praia">
              Praia
            </a>
          </li>
          <li>
            <a href="/#aulas" alt="Link Aulas">
              Aulas
            </a>
          </li>
          <li>
            <a href="/#contato" alt="Link Contato">
              Contato
            </a>
          </li>
          <li>
            <a href="/matricula" alt="Link Matricula" id="matricule-se">
              Matricule-se
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
