// Reducer
const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOADING':
            return state = true
        case 'LOADED':
            return state = false
        default:
            return state
    }
}

// Selector
export const selectLoading = state => state.loading.value

export default loadingReducer 