import styled from 'styled-components';


// Outermost Group of all Rows & Entities 
export const Group = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  @media (min-width: 1000px) {
    margin-top: 55px;
  }

  @media (min-width: 1440px) {
    margin-top: 165px;
  }

  @media (min-width: 1680px) {
    margin-top: 55px;
  }

  @media (min-width: 1920px) {
    margin-top: 215px;
  }

  @media (min-width: 2560px) {
    margin-top: 175px;
  }
`;

// Row Titles
export const Title = styled.h2`
  font-family: EBGaramond;
  font-size: 22px;
  color: #c5c5c5;
  font-weight: bold;
  margin: 0 56px -3px;
`;

// Rows of Entities under each Row Title
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  
  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type 
    margin-bottom: 0;
  }
`;

// Container inside of row - this allows the meta box below image
export const Row = styled.div`
  display: flex;
  flex-direction:column;
  height: 275px;
  padding-top: 20px;
  overflow-x: auto;
  margin-right: 30px;

  @media (min-width: 1000px) {
    margin-right: 56px;
  }
`;

// Each individual gallery tile
export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

// Similar to Entity but this has the hover effect
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  background-color: #131313;
  border-left: 1px solid rgba(120, 120, 120, .3);
  border-right: 1px solid rgba(120, 120, 120, .3);
  border-top: 1.5px solid rgba(120, 120, 120, 9);
  box-shadow: 0px 0px 1px 1px rgba(120, 120, 120, .3);
  
  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  &:first-of-type {
    margin-left: 30px;

    @media (min-width: 1000px) {
      margin-left: 56px;
    }
  }

  &:last-of-type {
    margin-right: 30px;

    @media (min-width: 1000px) {
      margin-right: 56px;
    }
  }
`;

// showHero for each entity
export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 225px;
  cursor: pointer;
  height: auto;
  margin: 0;
  position: relative;
  left 1px;
 `;

// Gallery Name in Meta Box defined below
export const SubTitle = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  padding-left: 3%;
`;

// Box below the image in each entity
export const Meta = styled.div`
  display: flex;
  min-width: 101%;
  height: 80px;
  position: absolute;
  bottom: -80px;
  justify-content: flex-start
  align-items: center;
  padding-left: 2%;
  background-color: #131313;
  border-left: .5px solid rgba(120, 120, 120, .1);
  border-right: .5px solid rgba(120, 120, 120, .1);
  border-bottom: .5px solid rgba(120, 120, 120, .1);
  box-shadow: 0px 0px 1px 1px rgba(120, 120, 120, .3);

  > ${SubTitle} {
      align-self: center;
      margin-left: 3%;
      max-width: 65%;
  }
  `;

// Container for Gallery Logo in Meta Box
export const MetaLogoContainer = styled.div`
  flex-basis: 30%;
  // use padding control the size of the logo
  padding: 5%;
  align-self: center;
  `;

// Gallery Logo in Meta Box
export const MetaLogo = styled.img`
  object-fit: cover;  
`;

// Container that appears below the entity on click
// The picture included in the Feature is a background url here
export const Feature = styled.div`
  display: flex;
  flex-direction: row; 
  background: black
  background-size: auto;
  position: relative;
  padding: 5px;
  height: auto;
  background-position-x: right;
  background-color: black;
  border-top: 1px solid rgba(120, 120, 120, .3);
  border-bottom: 1px solid rgba(120, 120, 120, .3);

  @media (min-width: 1000px) { 
    background: url(${({ src }) => src});
    background-color: black;
    background-repeat: no-repeat;
    background-position: right;
    background-size: 50%;
    padding: 50px 5px 23px;
    height: 625px;
  }

  @media (min-width: 1440px) {
    padding-left: 12px;
  }

  @media (min-width: 1680px) {
    padding-left: 0px;
  }
`;

// Content block for all info in Feature
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 56px;
  width: 100%;
  line-height: normal;

  @media (min-width: 1000px) {
    margin: 30px 30px 30px 25px;
    width: 45%;
    height: 550px;
  }

  @media (min-width: 1440px) {
    height: 450px;
  }

  @media (min-width: 1680px) {
    width: 50%;
    padding: 0 7% 0 5%;
  }


  @media (min-width: 2560px) {
    width: 50%;
  }
`;

// Logo in Feature
export const FeatureLogo = styled.img`
  object-fit: cover;
  align-self: center; 
  width: 100px;
  height: 100px 
`;

// Gallery / Museum Name in Feature
export const FeatureTitle = styled(Title)`
  margin-left: 0;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: .07em;
  margin: 25px 0 5px;
  text-align: center;
`;

// Show Title in Feature
export const FeatureCaption = styled(Title)`
  margin-left: 0;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: .07em;
  margin: 20px 0 -5px;
  text-align: center;
  color: #999;
`;

// Artist(s) Name(s) in Feature
// was export const FeatureCallOut = styled.h2`
export const FeatureSubtitle = styled.h2`
  color: #999;
  font-size: 16px;
  line-height: 1.3em;
  letter-spacing: .05em;
  text-transform: uppercase;
  text-align: center;
  font-weight: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 20px 0 7px;
`;

// Show Dates in Feature
export const FeatureSubtitleCaption = styled.p`
  font-size: 14px;
  margin-top: 5px;
  color: #9a9a9a;
  line-height: 1.6em;
  letter-spacing: .07em;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
`;

// showDescription in Feature
export const FeatureText = styled.p`
  font-size: 16px;
  color: #777;
  line-height: 1.6em;
  letter-spacing: .07em;
  text-align: center;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0px;
`;

// Button to close Feature
export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }

  @media (min-width: 1000px) {
    top: 2.5%;
  }

  @media (min-width: 1440px) {
    top: 20px;
  }
`;

// All Go Buttons in any card
export const GoButton = styled.button`
  width: 105px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #ff0000;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin: 25px auto;
  outline: none;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }

  @media (min-width: 1000px) {
    width: 95px;
    padding: 10px 0;
  }
`;

