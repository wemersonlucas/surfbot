import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;

  background: #eff4f9;

  h1 {
    font-family: "Alice";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 82px;

    color: #445566;
    margin-top: 18px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 30px;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #445566;
  }

  #button {
    background-color: #1188ee;
  }
`;

export const BoxField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BoxRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 45px;

  #radio {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #bbccdd;
    margin: 6px;
  }

  #radios {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 6px;
  }
`;
export const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 464px;
  height: 580px;
  background: #eff4f9;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 5px;

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #445566;
  }
`;

export const BoxTitleCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  color: #445566;
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

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxRigth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 50px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
