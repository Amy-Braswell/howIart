import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'

import jumboData from '../fixtures/jumbo.json';
import Jumbotron from '../components/jumbotron';
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { Feature, OptForm } from '../components/index'
import { HeaderContainer } from '../containers/header'
import { SignUp } from '../components/reduxFeatures/Redux/actions/user'


const Index = () => { 

  const initialState = {
    email: ''
  };

  const dispatch = useDispatch()
  const router = useRouter()

  const [state, setState] = useState(initialState);
  const {email} = state

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(SignUp(email))
    router.push('/register')
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <Head>
        <title>iArt Gallery Walks</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      </Head>

      <header>
        <HeaderContainer>
          <Feature>
            <Feature.Title>Endless hours of art.</Feature.Title>
            <Feature.SubTitle>Anytime. Anywhere. </Feature.SubTitle>
            <OptForm onSubmit={handleSubmit}>
              <OptForm.Input 
                aria-describedby="emailAddressHelp"
                className="opt-input"
                placeholder="Email address"
                type="email"
                name="email"
                value={state.email}
                onChange={handleInput} 
              />
              <OptForm.Button type="submit">Show Me</OptForm.Button>
              <OptForm.Break />
              <OptForm.Text>Ready to Explore? Enter your email to create your free membership.</OptForm.Text>
            </OptForm>
          </Feature>
        </HeaderContainer>
      </header>

      <main>
        <Jumbotron.Container>
          {jumboData.map((item) => (
            <Jumbotron key={item.id.toString()} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          ))}
        </Jumbotron.Container>

        <FaqsContainer />
      </main>
      
      <footer>
        <FooterContainer />
      </footer>
    </>
  )
}

export default Index
