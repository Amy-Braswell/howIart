export const SetItem = (item) => {
    return{
        type: 'SET_ITEM',
        payload: item
    }
}

export const RemoveItem = () => {
    return{
        type: 'REMOVE_ITEM',
    }
}