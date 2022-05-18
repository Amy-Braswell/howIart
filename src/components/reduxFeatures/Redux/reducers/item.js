const itemReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_ITEM':
            return {
                ...state,
                item: action.payload, 
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                item: {}
            };
        default:
            return state          
    }
}

// Selector
export const selectItem = state => state.item.value

export default itemReducer 