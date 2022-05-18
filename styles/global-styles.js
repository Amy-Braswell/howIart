import { createGlobalStyle } from 'styled-components';

// added map background and background-size to html
export const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

:root {
--amplify-primary-color: #ff0000; 
--amplify-primary-tint: #ff0000;
--amplify-primary-shade: #ff0000;
}

*, *:before, *:after {
    box-sizing: border-box;
}

html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: -apple-system, Roboto, sans-serif;
    letter-spacing: 0.06em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: url('https://res.cloudinary.com/amy-braswell/image/upload/e_brightness:-89/v1603234930/iArt-Chicago/Chicago_Bkgrnd_ycg0h7.jpg');
    background-color: rgba(0,0,0,.9);
    background-size: 900px;
    color: #666666;
    font-size: 16px;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.auth-button {
background: #e50914;
color: #fff;
cursor: pointer;
margin-bottom: 0;
text-transform: uppercase;
width: 100%;
border-radius: 5px;
height: 35px;
border-color: transparent;
box-shadow: 0px;
outline: none;
transition: 0.15s;
text-align: center;
&:active {
  background-color: #f1ac15;
}
&:hover {
  background: #f40612;
}

.white {
    color: white !important;
}

input:-webkit-autofill,  
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
input:-internal-autofill-selected
  {
    border: 1px solid white;
    border-top: none;
    border-left: none;
    border-right: none;
    resize: none;
    font-size: 16px;
    border-radius: 0;
    -webkit-box-shadow: none;
    -webkit-text-fill-color: white;
    color: white;
    box-shadow: 0 0 1000px 1000px  rgba(13,13,13,1) inset;
    outline: none;
    background-color: red !important;
  } 
  
  .opt-input:-webkit-autofill,  
  .opt-input:-webkit-autofill:hover, 
  .opt-input:-webkit-autofill:focus,
  .opt-input:-internal-autofill-selected
  {
    border: 1px solid white;
    border-top: none;
    border-left: none;
    border-right: none;
    resize: none;
    font-size: 16px;
    border-radius: 0;
    -webkit-box-shadow: none;
    -webkit-text-fill-color: black;
    color: white;
    box-shadow: 0 0 1000px 1000px  rgba(255,255,255,1) inset;
    outline: none;
    background-color: black;
  }
`

