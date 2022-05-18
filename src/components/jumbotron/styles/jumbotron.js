import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  line-height: 1.1;
  margin-bottom: 8px;
  color: #aaa;

  @media (min-width: 1000px) {
    font-size: 50px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  color: #aaa;

  @media (min-width: 1000px) {
    font-size: 26px;
  }
`;

export const Image = styled.img`
  max-width: 90%;
  height: auto;
  margin-top: 3vh;
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
