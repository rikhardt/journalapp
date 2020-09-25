import { types } from "../types/types";


export const setError = (msgError) => ({
    type: types.uiSetError,
    payload: msgError
     
})

export const removeError = () => ({
    type: types.uiRemoveError 
})

export const startLoading = () => ({
    type: types.uiStartLoading
})

export const finishLoading = () => ({
    type: types.uiFinishLoading
})