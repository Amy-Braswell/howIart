// Redux-persist is not currently installed so data will not persist between sessions
// user info throughout app is coming from amplify Auth methods

const userReducer = (state = null, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                user: action.payload, 
            }
        case 'SIGN_UP':
            return {
                ...state,
                user: action.payload, 
            }
        case 'SIGN_OUT':
            return {
                ...state,
                user: null
            };
        default:
            return state          
    }
}

// Selector
export const selectUser = state => state.user.value

export default userReducer 





