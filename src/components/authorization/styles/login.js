import styled from 'styled-components';


// Outer Div
export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 10vh;
  height: 80vh;

  background: rgba(0,0,0,.2);

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

// Info Div
export const InfoContainer = styled.div`
order: 2;
width: 100%;
background-color: #000;
display: flex;
flex-direction: column;
justify-content: center;
padding: 25px 5% 50px;

@media (min-width: 1000px) {
  order: 1;
  width: 50%;
  padding: 25px 3%;
}
`

// Info Headline = h2
export const Headline = styled.h2`
  font-size: 24px;
  letter-spacing: 0.07em;
  color: #dedede;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

// Info Text
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.6em;
  letter-spacing: 0.07em;
  color: #dedede;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

//GalleryButton
export const GalleryButton = styled.a`
  max-width: 50%;
  border-radius: 50px;
  display: block;
  text-decoration: none;
  margin-top: 35px;
  align-self: center;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 12px 25px;
  font-size: 18px;
  border: 0;
  cursor: pointer;
  outline: none;

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

// Form Container
export const FormContainer = styled.div`
order: 1;
background: rgba(0,0,0,.4);
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding: 25px 5% 65px;


@media (min-width: 1000px) {
  order: 2;
  width: 50%;
  padding: 0px 5px 5px 15px;
}
`

// Form
export const Form = styled.form`
  display: block;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Form.Group = div to hold the form inputs
export const Group = styled.div`
min-width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
`

// Form.Text = h1 Login / Sign Up / Forgot Password, etc
export const FormHeadline = styled.h1`
  text-align: center;
  color: white;
  font-size: 36px;
  color: #dedede;
  letter-spacing: .05em;
  font-weight: bold;

@media (max-width: 600px) {
  font-size: 16px;
  line-height: 22px;
}
`

// Form.Label
export const Label = styled.p`
font-size: 14px;
color: #dedede;
text-align: center;

@media (max-width: 600px) {
  font-size: 16px;
  line-height: 22px;
}
`
// Error
export const Error = styled.div`
  color: #ff0000;
`

// Form.Control
export const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  margin: 15px 0;
  width: 100%;
  border: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(0,0,0,0);
  color: white;
  outline: none;  
`;

// Spacer
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;


// Text Div
export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;  
  margin-top: 30px;
`;

// Info Text
export const Link = styled.a`
  font-size: 16px;
  line-height: 1.6em;
  letter-spacing: 0.07em;
  color: #777;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #dedede;
  }
  
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;





