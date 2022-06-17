import styled from "styled-components";

import backgroundBlockquote from "../../assets/bg-onda.png";

export const BlockquoteContainer = styled.blockquote`
  background: url(${backgroundBlockquote}) center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  width: 100%;
  height: 480px;
  object-fit: fill;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "Alice";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 74px;
    text-align: center;
    max-width: 639px;
    height: 149px;

    color: #ffffff;
  }
  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #ffffff;
  }
`;
