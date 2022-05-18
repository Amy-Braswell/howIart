import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Auth } from "aws-amplify";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Validate from '../utils/FormValidation'
import { Authorization, Header, Spinner } from '../components';
import { SignIn } from '../components/reduxFeatures/Redux/actions/user'
import { Loading, Loaded } from '../components/reduxFeatures/Redux/actions/loading'
import { SetError, ClearError } from '../components/reduxFeatures/Redux/actions/error'


export default function Signup() {
  const initialState = {
    nickname: "", // nickname attribute
    username: "", // actually an email
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  };

  const dispatch = useDispatch()
  const router = useRouter()

  const [state, setState] = useState(initialState);
  const [newUser, setNewUser] = useState(null);

  const error = useSelector(state => state.error)
  const loading = useSelector(state => state.loading)
  const user = useSelector(state => state.user)
  let userEmail = ''
  if (user) {userEmail = user.attributes.email}

  function clearErrorState(){
    dispatch(ClearError())
  }

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  }

  async function handleSubmit(event, userEmail) {
    event.preventDefault();
    clearErrorState()
      const validationError = Validate(event, state);
      if (validationError) {
        dispatch(SetError(validationError))
      } else {
        try {
          dispatch(Loading())
          try {
            const newUser = await Auth.signUp({
              username: state.username, // actually an email
              password: state.password,
              attributes: {
                nickname: state.nickname
              }
            });
            setNewUser(newUser)
            dispatch(Loaded())
          } catch (e) {
            dispatch(Loaded())
            dispatch(SetError(e.message))
          }
        } catch (e) {
          dispatch(Loaded())
          dispatch(SetError(e.message))
        }
      }
    }


  async function handleConfirmationSubmit(event) {
    event.preventDefault()
    clearErrorState()
    const validationError = Validate(event, state);
    if (validationError) {
        dispatch(SetError(validationError))
    } else {
      try {
        dispatch(Loading())
        try {
          await Auth.confirmSignUp(state.username, state.confirmationCode)
          const {username} = await Auth.signIn(
            state.username, 
            state.password
          )
          dispatch(SignIn(username))
          router.push("/browse")
          dispatch(Loaded())
        } catch (e) {
          dispatch(Loaded())
          dispatch(SetError(e.message))
        }
      }  catch (e) {
        dispatch(Loaded())
        dispatch(SetError(e.message))
      }
    }
  }

  function renderConfirmationForm() {
    return (
      <>
      <Header bg={false}> 
        <Header.Frame>
          {/* <Link href={`/`}> */}
            <Header.Logo src='../logo.png' alt="iArt" />
          {/* </Link> */}
        </Header.Frame>
      </Header>
      <Authorization>
        <Authorization.InfoContainer>
            <Authorization.Headline>Gallery, meet iArt</Authorization.Headline>
            <Authorization.Text>    
               We offer the only virtual tours that actually increase your visibility and drive traffic 
              back to your website without interfering with the way you do business. We look forward to hearing from you today!
            </Authorization.Text>
            <Authorization.GalleryButton type="submit">
                Contact
            </Authorization.GalleryButton>
        </Authorization.InfoContainer>
        

        <Authorization.FormContainer>
          {loading && <Spinner />}
          <Authorization.Form onSubmit={handleConfirmationSubmit}>
            <Authorization.FormHeadline>Confirmation Code</Authorization.FormHeadline>
              {error ? 
                  <Authorization.Error>{error}</Authorization.Error>
                :
                ''
              }
            <Authorization.Group controlId="confirmationCode">
              <Authorization.Input
                aria-describedby="confirmationCodeHelp"
                type="tel"
                name="confirmationCode"
                id="confirmationCode"
                placeholder="Enter code"
                value={state.confirmationCode}
                onChange={handleInput}
              />
              <Authorization.Text>Please check your email for the code. The code may be in your spam folder.</Authorization.Text>
            </Authorization.Group>

            <button type="submit" className="auth-button">
              Confirm
            </button>

          </Authorization.Form>
        </Authorization.FormContainer> 
      </Authorization>
      </>
    );
  }

  function renderForm() {
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
          {loading && <Spinner />}
          <Authorization.Form onSubmit={handleSubmit}>
          <Authorization.FormHeadline>Sign Up</Authorization.FormHeadline>
            {error ? 
              <Authorization.Error>{error}</Authorization.Error>
              :
              ''
            }
            <Authorization.Group controlId="nickname">
             <Authorization.Input
                aria-describedby="nicknameHelp"
                placeholder="Name"
                type="text"
                name="nickname"
                id="nickname"
                value={state.nickname}
                onChange={handleInput} 
              />
            </Authorization.Group>
            <Authorization.Group controlId="username">
              <Authorization.Input
                aria-describedby="confirmationCodeHelp"
                type="email"
                name="username"
                id="username"
                placeholder="Email Address"
                value={state.username}
                onChange={handleInput}
              />
            </Authorization.Group>
            <Authorization.Group controlId="password">
              <Authorization.Input
                aria-describedby="passwordHelp"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleInput}
              />
            </Authorization.Group>
            <Authorization.Group controlId="confirmPassword">
              <Authorization.Input
                aria-describedby="confirmPasswordHelp"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                onChange={handleInput}
                value={state.confirmPassword}
              />
            </Authorization.Group>

            <button type="submit" className="auth-button">
              Register
            </button>

            <Authorization.LinkContainer>
              <Authorization.Link href={`/login`}>
                Already a member? Login
              </Authorization.Link> 
            </Authorization.LinkContainer>
          </Authorization.Form>
        </Authorization.FormContainer>
      </Authorization>
      </>
    );
  }

  return (
    <div className="Signup">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}
