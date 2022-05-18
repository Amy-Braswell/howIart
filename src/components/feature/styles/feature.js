import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 5vh 45px 15vh;


  @media (min-width: 1000px) {
    font-size 28px;
    padding: 15vh 45px 25vh;
  }

  @media (min-width: 1440px) {
    font-size 28px;
    padding: 35vh 45px 40vh;
  }

  @media (min-width: 1680px) {
    font-size 28px;
    padding: 40vh 45px 42vh;
  }

  @media (min-width: 1920px) {
    font-size 28px;
    padding: 45vh 45px 48vh;
  }

  @media (min-width: 2560px) {
    font-size 28px;
    padding: 50vh 45px 90vh;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 800px;
  margin: auto;
  font-family: EBGaramond;
  font-size: 40px;
  font-weight: bold;

  @media (min-width: 1000px) {
    font-size: 55px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: normal;
  margin: 10px auto;

  @media (min-width: 1000px) {
    font-size 28px;
  }
`;
