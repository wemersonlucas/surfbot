import styled from "styled-components";

export const PraiaContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 130px;
  margin: 50px 4%;
`;

export const BoxLeft = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  #fotoMap {
    max-width: 548px;
    margin-top: -32px;
    margin-left: 4%;
  }
  .como-chegar {
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    span {
      display: inline-block;
      width: 8px;
      height: 8px;
      border: 2px solid #ee2211;
      border-radius: 50%;
    }
    h4 {
      margin-left: 8px;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
  .como-ir {
    display: block;
    margin-top: 10px;
    margin-left: 20px;
    p:before {
      content: " ";
      display: inline-block;
      width: 8px;
      height: 2px;
      background-color: #1188ee;
      margin-right: 6px;
      margin-bottom: 4px;
    }
    p {
      color: #aaaaaa;
      font-weight: bold;
      span {
        color: #000000;
      }
    }
  }
`;

export const BoxRight = styled.div`
  div {
    max-width: 470px;
  }
  h2 {
    font-family: "Alice", sans-serif;
    font-size: 72px;
    font-weight: 400;
    margin-right: 45px;;
    max-width: 470px;
    span {
      color: #1188ee;
    }
  }
  .container-item {
    margin: 42px 0;
  }
  .item-praia {
    display: flex;
    align-items: center;
    padding: 26px 0;
    border-top: 2px solid #eff4f9;
    span {
      font-size: 24px;
      margin-left: 30px;
    }
  }
  .item-praia:last-child {
    border-bottom: 2px solid #eff4f9;
  }
  p {
    color: #17222d;
    font-size: 18px;
    line-height: 26px;
    margin-right:61px;
  }
`;

export const Aulas = styled.div`
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

  img {
    width: 230px;
    height: 65.33px;
  }
  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    margin-right: 80px;
  }
  span {
    color: #ff3726;
  }

    a {
      color: #445566;
      border-bottom: 2px solid #ee2211;
      text-decoration: none;
      width:88px ;
      transition: 200ms;
    }
    a:hover {
      color: #ee2211;
    }
  
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #eff4f9;
  padding: 8px 4%;
  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #445566;
  }
  .items-aulas {
    display: flex;
    justify-content: space-around;
  }
  .aula {
    background-color: #ffffff;
    color: #445566;
    font-family: "Nunito", sans-serif;
    padding: 40px 0;
    background: #ffffff;
    box-shadow: 0px 5px 5px rgba(187, 204, 221, 0.4),
      0px 10px 10px rgba(187, 204, 221, 0.4);
    border-radius: 5px;
    h3 {
      font-size: 24px;
      margin: 8px 0;
      text-align: center;
    }
    span {
      color: #1188ee;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
    a {
      display: block;
    }
  }
  .plano-aula {
    border-top: 2px solid #eff4f9;
    border-bottom: 2px solid #eff4f9;
    max-width: 230px;
    margin: 0 auto;
    padding: 30px 0;
    p {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 34px;

      color: #445566;
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 2px solid #ff3726;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }
  .valor {
    max-width: 230px;
    margin-bottom: 20px;
    span {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;

      color: #1188ee;
    }
  }

  .pranchas {
    display: flex;
    justify-content: center;
    margin-top: -47px !important;
    margin: 5px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 370px;
  height: 414px;
  margin: 30px;
  background: #ffffff;
  box-shadow: 0px 5px 5px rgba(187, 204, 221, 0.4),
    0px 10px 10px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
`;
