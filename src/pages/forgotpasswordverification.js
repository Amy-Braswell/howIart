import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Validate from "../utils/FormValidation";
import { Authorization, Header, Spinner } from '../components'
import { Auth } from 'aws-amplify'
import { Loading, Loaded } from '../components/reduxFeatures/Redux/actions/loading'
import { SetError, ClearError } from '../components/reduxFeatures/Redux/actions/error'



export default function ForgotPasswordVerification() {
    const initialState = {
        verificationcode: "",
        email: "",
        newpassword: "",
        confirmpassword: "",
        errors: {
            cognito: null,
            blankfield: false
        }
    };

    const dispatch = useDispatch()
    const router = useRouter()
    const [state, setState] = useState(initialState);

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

    async function passwordVerificationHandler(event) {
        event.preventDefault()
        clearErrorState()
        const validationError = Validate(event, state);
        if (validationError) {
            dispatch(SetError(validationError))
        } else {
            try {
                dispatch(Loading())
                await Auth.forgotPasswordSubmit(
                    state.email,
                    state.verificationcode,
                    state.newpassword
                )
                router.push('/confirmchanges')
                dispatch(Loaded())
            } catch (e){
                dispatch(Loaded())
                dispatch(SetError(e.message))
            }
        }; 
    }

    return (
        <>
        <Header bg={false}> 
            <Header.Frame>
                <Link href={`/`}>
                <Header.Logo src='../logo.png' alt="iArt" />
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
                <Authorization.Form onSubmit={passwordVerificationHandler}>
                    <Authorization.FormHeadline>New Password</Authorization.FormHeadline>
                    <Authorization.Text>Please check your email for the confirmation code. It may also be in your Spam folder.</Authorization.Text>
                    {error ? 
                        <Authorization.Error>{error}</Authorization.Error>
                    :
                    ''
                    }
                    <Authorization.Group controlId="verificationcode">
                        <Authorization.Input
                            aria-describedby="verificationCodeHelp"
                            type="tel"
                            name="verificationcode"
                            id="verificationcode"
                            placeholder="Enter code"
                            value={state.verificationcode}
                            onChange={handleInput}
                        />
                    </Authorization.Group>
                    <Authorization.Group controlId="email">
                        <Authorization.Input
                            aria-describedby="emailHelp"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Confirm email"
                            value={state.email}
                            onChange={handleInput} 
                        />
                        </Authorization.Group>
                    <Authorization.Group controlId="newpassword">
                        <Authorization.Input
                            aria-describedby="newPasswordHelp"
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
                            aria-describedby="confirmPasswordHelp"
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            placeholder="Confirm password"
                            value={state.confirmpassword}
                            onChange={handleInput}
                        />
                    </Authorization.Group>
                    <button type="submit" className="auth-button">
                        Submit
                    </button>
                </Authorization.Form>
            </Authorization.FormContainer>
        </Authorization>
        </>
    );

}

