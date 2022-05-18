import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Authorization, Header } from '../components'



export default function ConfirmChangePassword() {
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault();
    router.push('/login')
  }

  return (
    <>
    <Header bg={false}> 
      <Header.Frame>
        <Link href={`/`}>
          <a><Header.Logo src='../logo.png' alt="iArt" /></a>
        </Link>
      </Header.Frame>
    </Header>
    <Authorization>
      <Authorization.InfoContainer>
        <Authorization.Headline>Gallery, meet iArt</Authorization.Headline>
        <Authorization.Text>    
          We offer the only virtual tours that actually increase your visibility and drive traffic 
          back to your website without interfering with the way you do business. We look forward to hearing from you today!
        </Authorization.Text>
        <Authorization.GalleryButton href="mailto:amy@iart-gallerywalks.com">
          Contact
        </Authorization.GalleryButton>
      </Authorization.InfoContainer>

      <Authorization.FormContainer>
        <Authorization.Form onSubmit={handleSubmit}>
          <Authorization.FormHeadline>Success</Authorization.FormHeadline>
          <Authorization.Text>    
            Your password has been successfully updated! 
          </Authorization.Text>

          <button type="submit" className="auth-button">
            Confirm
          </button>

        </Authorization.Form>
      </Authorization.FormContainer>
    </Authorization>
    </>
  );
  
}
