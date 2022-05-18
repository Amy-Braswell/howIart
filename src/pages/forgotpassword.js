import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Auth } from 'aws-amplify'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Validate from '../utils/FormValidation'
import { Authorization, Header, Spinner } from '../components'
import { Loading, Loaded } from '../components/reduxFeatures/Redux/actions/loading'
import { SetError, ClearError } from '../components/reduxFeatures/Redux/actions/error'


export default function ForgotPassword() {
    const initialState = {
        email: "",
        errors: {
            cognito: null,
            blankfield: false
        }
    }

    const dispatch = useDispatch()
    const router = useRouter()

    const [state, setState] = useState(initialState);
    const [user, setUser] = useState(null);

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

    async function AuthorizationHandler(event) {
        event.preventDefault();
        clearErrorState()
        const validationError = Validate(event, state);
        if (validationError) {
            dispatch(SetError(validationError))
        } else {
            try{
                dispatch(Loading())
                const user = await Auth.forgotPassword(state.email)
                setUser(user);
                router.push('/forgotpasswordverification')
                dispatch(Loaded())
            }
            catch(err){
                dispatch(Loaded())
                dispatch(SetError(err.message))
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
                <Authorization.Form onSubmit={AuthorizationHandler}>
                    <Authorization.FormHeadline>Forgot Password</Authorization.FormHeadline>
                    {error ? 
                        <Authorization.Error>{error}</Authorization.Error>
                    :
                    ''
                    }
                    <Authorization.Text>
                        Please enter your email.
                    </Authorization.Text>
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

                    <button type="submit" className="auth-button">
                        Submit
                    </button>

                    
                    <Authorization.LinkContainer>
                        <Authorization.Link href={`/login`}>
                            Login
                        </Authorization.Link> 
                    </Authorization.LinkContainer>
                </Authorization.Form>
            </Authorization.FormContainer>
        </Authorization>
        </>
    );  
}

