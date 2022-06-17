import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Container = styled.div`
  nav {
    background-color: #17222d;
    padding: 0 4%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 8px 4%;
  }

  ul {
    display: flex;
    align-items: flex-start;
    margin-top: 4px;
    list-style: none;
  }
  li {
    padding: 4px;
  }
  li + li {
    margin-left: 8px;
  }
  li a {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-decoration: none;

    color: #ffffff;
  }
  li a:hover {
    border-bottom: 2px solid #ee2211;
    text-decoration: none;
  }
`;
