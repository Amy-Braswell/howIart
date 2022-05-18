export const SetError = (err) => {
    return{
        type: 'SET_ERROR',
        payload: err
    }
}

export const ClearError = () => {
    return{
        type: 'CLEAR_ERROR',
    }
}