import React from 'react';
import { Header } from '../components/index';

import Link from 'next/link'

// This is the logic for the small header that contains the logo and the login button

export function HeaderContainer({ children }) {
  return (
    <Header> 
        <Header.Frame>
          <Link href={`/`}>
            <a><Header.Logo src='../logo.png' alt="iArt" /></a>
          </Link>
          <Link href={`/login`}>
            <a><Header.ButtonLink>Login</Header.ButtonLink></a>
          </Link>
        </Header.Frame>
        {children}
    </Header>
  );
}
