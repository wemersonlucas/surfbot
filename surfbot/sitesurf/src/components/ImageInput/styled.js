import styled from "styled-components";

import BgIntro from "../../assets/bg-intro.png";

export const ContainerMain = styled.main`
  background: url(${BgIntro}) center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  width: 100%;
  height: 400px;
  object-fit: fill;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: "Alice", sans-serif;
    font-size: 72px;
    font-weight: 400;
    margin-left: 45px;
  }
  form {
    display: flex;
    margin-right:171px
  }
  form input {
    border: #fff;
    border-radius: 8px 0 0 8px;
    background-color:#fff ;
    height: 35px;
    width: 290px;
    padding: 8px;
  }
`;