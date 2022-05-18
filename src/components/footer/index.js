import React from 'react';
import { Container, Inner, Outer, Row, Column, Link, Title, Text, Break } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Outer = function FooterOuter({ children, ...restProps }) {
  return <Outer {...restProps}>{children}</Outer>;
};

Footer.Inner = function FooterInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
