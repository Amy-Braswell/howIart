import styled from 'styled-components';


// Header Background 
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

// Container for Text over image background of Header
export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    margin: 0 0px;
  }
`;


// Link for Dropdown Link
export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  position: relative;
  top: 7px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

// Container for SignOut Button in Dropdown
export const Group = styled.div`
  display: flex;
  align-items: center;
`;

// WAS ORIGINALLY ABOVE SEARCH
export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  outline: none
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
    outline: none;
  }
`;


// DIV CONTAINING SEARCH ICON / BAR
export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

// SEARCH ICON
export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const ButtonLink = styled.button`
  display: block;
  background-color: #e50914;
  width: 100px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 16px;
  border-radius: 3px;
  padding: 8px 14px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  outline: none;

  &:hover {
    background: #f40612;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

// Dropdown Navigation
export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 25px 25px;
  width: 200px;
  top: 45px;
  right: 5px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link} {
      cursor: pointer;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
    outline: none;
  }

  p {
    cursor: auto;
    font-size: 16px;
    margin-left: 15px;
    margin-bottom: 15px;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  position: absolute;
  top: 1%;
  right: 2%;
  width: 50px;
  height: 50px;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Feature = styled(Container)`
  flex-direction: row;
  align-items: normal;
  width: 100%;
  position: absolute;
  top: 33vh;

  
  @media (min-width: 1000px) {
    flex-direction: column;
    align-items: normal;
    left: -1%;
    top: 20vh;
    width: 50%;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: normal;
    left: -1%;
    top: 30vh;
    width: 50%;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.6em;
  letter-space: .05em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Logo = styled.img`
  height: 36px;
  width: 90px;
  max-width: 90px;
  margin-right: 40px;
  position: absolute;
  top: 2%;
  left: 5%;
  cursor: pointer;
  @media (min-width: 1449px) {
    height: 45px;
    width: 112px;
    max-width: 112px;
  }
`;

export const GoButton = styled.button`
  width: 105px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #ff0000;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  margin: 25px 0 25px 3%;
  outline: none;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }

  @media (min-width: 1024px) {
    width: 95px;
    padding: 10px 0;
  }
`;

// NEW ---
// BACKGROUND PICTURE FOR BROWSE PAGE - FEATURED EXHIBIT
export const FeaturedExhibitContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 90vh;
overflow: hidden;
margin-bottom: -15vh;

@media (min-width: 1024px) {
  margin-bottom: -15vh;
}

@media (min-width: 1045px) {
  margin-bottom: -10vh;
}

@media (min-width: 1200px) {
  margin-bottom: -7vh;
}

@media (min-width: 1440px) {
  margin-bottom: -17vh;
}

@media (min-width: 1680px) {
  margin-bottom: -1vh;
}

@media (min-width: 1920px) {
  margin-bottom: -22vh;
}

@media (min-width: 2560px) {
  margin-bottom: -16vh;
}

`;

export const FeaturedExhibitContainerImg = styled.img`
width: 100%;
height: 100%;
background-color: black;
object-fit: cover;
opacity: .9;

@media (min-width: 1024px) {
  width: 100%;
  height: auto;
}


`;

export const SubTitle = styled.p`
  font-size: 28px;
  text-transform: uppercase;
  color: #c5c5c5;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  padding-left: 3%;
`;

// use padding control the size of the logo
  export const MetaLogoContainer = styled.div`
  flex-basis: 100%;
  padding: 5%;
  align-self: center;
  border-radius: 100%;

  @media (min-width: 1000px) {
    flex-basis: 20%;
    padding: 5%;
  }

  @media (min-width: 1440px) {
    flex-basis: 20%;
    position: relative;
    left 10%
  }

  @media (min-width: 1680px) {
    flex-basis: 20%;
    position: relative;
    left 15%
  }

  @media (min-width: 2560px) {
    flex-basis: 20%;
    position: relative;
    left 22%
  }


  `;

// BROUGHT IN SO METALOGO WILL WORK - OTHERWISE ERROR ABOUT RENDERING IMAGES OCCURS
// THIS WILL CHANGE THE SIZE OF THE LOGO!
export const Image = styled.img`
width: 100%;
max-width: 75px;
height: auto;
margin-left: 3%;
margin-bottom: 2%;

@media(min-width: 1000px) {
  max-width: 125px;
}

`;

export const MetaLogo = styled.img` 
`;

export const MetaInfoContainer = styled.div`
padding: 10px 5%;
align-self: flex-start;
text-align: left;
width: 100%;

@media(min-width: 1000px) {
  padding: 10px 5%;
  align-self: center;
  text-align: center;
  width: 40%;
}

@media(min-width: 1440px) {
  padding: 10px 5%;
}

@media(min-width: 1680px) {
  padding: 10px 5%;
}

@media(min-width: 1920px) {
  padding: 10px 5%;
}


> ${SubTitle} {
  align-self: center;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.07em;
  margin-top: 20px;
}

> ${FeatureCallOut} {
font-size: 24px;
letter-spacing: 0.07em;
margin-left: 3%;
align-self: center;

@media(min-width: 1024px) {
  font-size: 36px;
}

@media(min-width: 1440px) {
  font-size: 40px;
  margin-left: 3%;
}

}

> ${Text} {
align-self: center;
margin-left: 3%;
font-size: 16px;
text-transform: uppercase;
}

@media (min-width: 1000px) {
  flex-basis: 80%;
  text-align: left;
}

`;

