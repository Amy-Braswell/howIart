import React, { useState } from 'react';

import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Image,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  GoButton,
  Text,
  Feature,
  Logo,
  SubTitle,
  FeaturedExhibitContainer,
  FeaturedExhibitContainerImg,
  MetaInfoContainer,
  MetaLogo
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
      <Logo {...restProps} />
  );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      {/* <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search current shows"
        active={searchActive}
        data-testid="search-input"
        label="search"
      /> */}
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};


Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.GoButton = function HeaderGoButton({ children, ...restProps }) {
  return <GoButton {...restProps}>{children}</GoButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Header.Image = function HeaderImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Header.MetaLogo = function HeaderMetaLogo({ ...restProps }) {
  return <Image {...restProps} />;
};

Header.FeaturedExhibitContainer = function HeaderFeaturedExhibitContainer({ children, ...restProps }) {
  return <FeaturedExhibitContainer {...restProps}>{children}</FeaturedExhibitContainer>;
};

Header.FeaturedExhibitContainerImg = function HeaderFeaturedExhibitContainerImg({ children, ...restProps }) {
  return <FeaturedExhibitContainerImg {...restProps}>{children}</FeaturedExhibitContainerImg>;
};

Header.MetaInfoContainer = function HeaderMetaInfoContainer({ children, ...restProps }) {
  return <MetaInfoContainer {...restProps}>{children}</MetaInfoContainer>;
};
