import styled, { createGlobalStyle } from 'styled-components';

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

export const Spinner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0);
  z-index: 4999;

  :after {
    content: '';
    position: absolute;
    top: 43%;
    left: 31.75%;
    background-image: url(/images/misc/spinner.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 75px;
    height: 75px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @media (min-width: 1000px) {
    :after {
      left: 15.5%;
    }
  }

  @media (min-width: 1440px) {
    :after {
      left: 17%;
    }
  }

  @media (min-width: 1680px) {
    :after {
      left: 17.5%;
    }
  }

  @media (min-width: 1920px) {
    :after {
      left: 17.75%;
    }
  }

  @media (min-width: 2560px) {
    :after {
      left: 18.35%;
    }
  }

  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }

  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Picture = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -22px;
`;
