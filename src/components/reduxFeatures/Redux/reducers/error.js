const error = (state = '', action) => {
    switch(action.type) {
        case 'SET_ERROR':
            return state + action.payload
        case 'CLEAR_ERROR':
            return state = ''
        default:
            return state
    }
}

// Selector
export const selectError = state => state.error.value


export default error 