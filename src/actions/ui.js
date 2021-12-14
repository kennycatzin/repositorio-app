import {types} from '../types/types';

export const uiError = (error, mensaje) => {
    return {
        type: types.uiSetError,
        payload: {
            loading: error,
            msgError: mensaje
        }
    }
}
export const removeError = () => {
    return {
        type: types.uiRemoveError
    }
}
export const startLoading = () => ({
    type: types.uiStartLoading
})
export const finishLoading = () => ({
    type: types.uiFinishLoading
})