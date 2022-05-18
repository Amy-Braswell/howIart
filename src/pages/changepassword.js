import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Auth } from 'aws-amplify'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Validate from '../utils/FormValidation'
import { Authorization, Header, Spinner } from '../components';
import { Loading, Loaded } from '../components/reduxFeatures/Redux/actions/loading'
import { SetError, ClearError } from '../components/reduxFeatures/Redux/actions/error'



export default function ChangePassword() {
  const initialState = {
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
    error: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  const dispatch = useDispatch()
  const router = useRouter()

  const [state, setState] = useState(initialState)

  const error = useSelector(state => state.error)
  const loading = useSelector(state => state.loading)

  function clearErrorState(){
    dispatch(ClearError())
  }

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    clearErrorState()
    const validationError = Validate(event, state);
    if (validationError) {
      dispatch(SetError(validationError))
    } else {
      try {
        dispatch(Loading())
        const user = await Auth.currentAuthenticatedUser()
        await Auth.Authorization(
          user,
          state.oldpassword,
          state.newpassword
        )
        router.push('/confirmAuthorization')
        dispatch(Loaded())
      } catch (e) {
        dispatch(SetError(e.message))
        dispatch(Loaded())
      }
    }
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
        {loading && <Spinner />}
        <Authorization.Form onSubmit={handleSubmit}>
          <Authorization.FormHeadline>Change Password</Authorization.FormHeadline>
            {error ? 
                <Authorization.Error>{error}</Authorization.Error>
              :
              ''
            }
          <Authorization.Group controlId="oldpassword">
            <Authorization.Input
              aria-describedby="oldpasswordHelp"
              type="password"
              name="oldpassword"
              id="oldpassword"
              placeholder="Old password"
              value={state.oldpassword}
              onChange={handleInput}
            />
          </Authorization.Group>
          <Authorization.Group controlId="newpassword">
            <Authorization.Input
              aria-describedby="passwordHelp"
              type="password"
              name="newpassword"
              id="newpassword"
              placeholder="New password"
              value={state.newpassword}
              onChange={handleInput}
            />
          </Authorization.Group>
          <Authorization.Group controlId="confirmpassword">
            <Authorization.Input
              aria-describedby="confirmpasswordHelp"
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm password"
              value={state.confirmpassword}
              onChange={handleInput}
            />
          </Authorization.Group>
          
          <button type="submit" className="auth-button">
            Change
          </button>

          {/* <Authorization.LinkContainer>
            <Authorization.Link href={`/forgotpassword`}>
              Forgot Password?
            </Authorization.Link> 
          </Authorization.LinkContainer> */}
        </Authorization.Form>
      </Authorization.FormContainer>
    </Authorization>
    </>
  );
  
}
