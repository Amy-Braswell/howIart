
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 10px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const Input = styled.input`
  max-width: 400px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 45px;
  max-height: 45px;
  box-sizing: border-box;
  outline: none;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  max-height: 45px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 15px;
  font-size: 18px;
  border: 0;
  cursor: pointer;
  outline: none;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: #dedede;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;