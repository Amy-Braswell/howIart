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



export default function Login() {
    const initialState = {
        email: "",
        password: ""
    }

    const dispatch = useDispatch()
    const router = useRouter()
    
    const [state, setState] = useState(initialState)

    const error = useSelector(state => state.error)
    const loading = useSelector(state => state.loading)

    function clearErrorState(){
        dispatch(ClearError())
      };

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({ ...prev, [inputName]: value }));
    };

    async function handleSubmit(event, error) {
        event.preventDefault();
        clearErrorState()
        const validationError = Validate(event, state);
        if (validationError) {
            dispatch(SetError(validationError))
        } else {
            try {
                dispatch(Loading())
                try {
                const {email} = await Auth.signIn(
                    state.email, 
                    state.password
                );
                dispatch(SignIn(email))
                router.push('/browse')
                dispatch(Loaded())
                } catch (e) {
                dispatch(SetError(e.message))
                dispatch(Loaded())
                }
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
                <Authorization.FormHeadline>Welcome Back</Authorization.FormHeadline>
                {error ? 
                    <Authorization.Error>{error}</Authorization.Error>
                  :
                  ''
                }
                <Authorization.Group controlId="email">
                <Authorization.Input
                    aria-describedby="emailHelp"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={state.email}
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
                
                <button type="submit" className="auth-button">
                    Login
                </button>

                <Authorization.Break></Authorization.Break>
                <Authorization.LinkContainer>
                    <Authorization.Link href={`/register`}>
                        Register
                    </Authorization.Link>
                    <Authorization.Link href={`/forgotpassword`}>   
                        Forgot Password
                    </Authorization.Link>  
                </Authorization.LinkContainer>
          
            </Authorization.Form>
        </Authorization.FormContainer>
    </Authorization>
    </>
    )
}