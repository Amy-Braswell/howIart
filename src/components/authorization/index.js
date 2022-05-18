import React, { useState } from 'react';

import {
    Outer,
    InfoContainer,
    Headline,
    Text,
    GalleryButton,
    FormContainer,
    Form,
    Group,
    FormHeadline,
    Error,
    Label,
    Input,
    Break,
    LinkContainer,
    Link
} from './styles/login'


export default function Authorization({ children, ...restProps }) {
    return (
      <Outer {...restProps}>
        {children}
      </Outer>
    );
  }


    Authorization.InfoContainer = function AuthorizationInfoContainer({ children, ...restProps }) {
        return <InfoContainer {...restProps}>{children}</InfoContainer>;
    };
    Authorization.Headline = function AuthorizationHeadline({ children, ...restProps }) {
        return <Headline {...restProps}>{children}</Headline>;
    };
    Authorization.Text = function AuthorizationText({ children, ...restProps }) {
        return <Text {...restProps}>{children}</Text>;
    };
    Authorization.GalleryButton = function AuthorizationGalleryButton({ children, ...restProps }) {
        return <GalleryButton {...restProps}>{children}</GalleryButton>;
    };
    Authorization.FormContainer = function AuthorizationFormContainer({ children, ...restProps }) {
        return <FormContainer {...restProps}>{children}</FormContainer>;
    };
    Authorization.Form = function AuthorizationForm({ children, ...restProps }) {
        return <Form {...restProps}>{children}</Form>;
    };
    Authorization.Group = function AuthorizationGroup({ children, ...restProps }) {
        return <Group {...restProps}>{children}</Group>;
    };
    Authorization.FormHeadline = function AuthorizationFormHeadline({ children, ...restProps }) {
        return <FormHeadline {...restProps}>{children}</FormHeadline>;
    };
    Authorization.Label = function AuthorizationLabel({ children, ...restProps }) {
        return <Label {...restProps}>{children}</Label>;
    };
    Authorization.Error = function AuthorizationError({ children, ...restProps }) {
        return <Error {...restProps}>{children}</Error>;
    };
    Authorization.Input = function AuthorizationInput({ children, ...restProps }) {
        return <Input {...restProps}>{children}</Input>;
    };
    Authorization.Break = function AuthorizationBreak({ children, ...restProps }) {
        return <Break {...restProps}>{children}</Break>;
    };
    Authorization.LinkContainer = function AuthorizationLinkContainer({ children, ...restProps }) {
        return <LinkContainer {...restProps}>{children}</LinkContainer>;
    };
    Authorization.Link = function AuthorizationLink({ children, ...restProps }) {
        return <Link {...restProps}>{children}</Link>;
    };


