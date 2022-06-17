import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #445566;
    font-family: "Alice";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 82px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  .box-icones {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #ver-mapa {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-decoration: none;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #445566;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 43px;

`;
