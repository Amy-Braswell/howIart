import React, { useState, useContext, createContext } from 'react'
import {
  Container,
  Group,
  Row,
  Title,
  SubTitle,
  Feature,
  FeatureTitle,
  FeatureCaption,
  FeatureSubtitle,
  FeatureSubtitleCaption,
  FeatureText,
  FeatureClose,
  FeatureLogo,
  GoButton,
  Content,
  Meta,
  Entities,
  Item,
  Image,
  MetaLogoContainer
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Row = function CardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Caption = function CardCaption({ children, ...restProps }) {
  return <Caption {...restProps}>{children}</Caption>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};


Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.GoButton = function CardGoButton({ children, ...restProps }) {
  return <GoButton {...restProps}>{children}</GoButton>;
};

Card.Item = function CardItem({ item, children, textInput, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.MetaLogo = function CardMetaLogo({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.MetaLogoContainer = function CardMetaLogoContainer({ children, ...restProps }) {
  return <MetaLogoContainer {...restProps}>{children}</MetaLogoContainer>;
};

Card.FeatureLogo = function CardFeatureLogo({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

  

  return showFeature ? (
     <Feature {...restProps} src={itemFeature.walkthroughStill}>
    
      <Content>
          <FeatureLogo src={itemFeature.gallery.logo} alt={itemFeature.gallery.name} />
          <FeatureTitle>{itemFeature.gallery.name}</FeatureTitle>
          <FeatureCaption>{itemFeature.title}</FeatureCaption>
          <FeatureSubtitle>{itemFeature.artist}</FeatureSubtitle>
          <FeatureSubtitleCaption>{itemFeature.date}</FeatureSubtitleCaption>
          <FeatureText>{itemFeature.showDescription}</FeatureText>
          <FeatureTitle>COMING SOON</FeatureTitle>
          <FeatureClose onClick={() => setShowFeature(false)}>
            <img src="/images/icons/close.png" alt="Close" />
          </FeatureClose>

        {children}

      </Content>
    </Feature>
  ) : null;
};