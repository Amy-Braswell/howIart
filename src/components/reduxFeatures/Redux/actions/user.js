// Redux-persist is not currently installed so data will not persist between sessions
// user info throughout app is coming from amplify Auth methods

export const SignIn = (email) => {
    return{
        type: 'SIGN_IN',
        payload: email
    }
}

export const SignUp = (email) => {
    return{
        type: 'SIGN_UP',
        payload: email
    }
}

export const SignOut = () => {
    return{
        type: 'SIGN_OUT',
    }
}