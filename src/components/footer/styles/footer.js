import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Outer = styled.div`
  width: 100%;
  background: black;
  padding: 70px 20px 0 40px;

  @media (min-width: 1000px) {
    padding: 70px 0;
  }
`;

export const Inner = styled.div`
  
  display: flex;
  padding: 0px 30px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  position: relative;
  left: 3%;

  @media (min-width: 1000px) {
    padding: 70px 0;
    left: 5%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
