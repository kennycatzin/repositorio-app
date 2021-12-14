import { types } from "../types/types";

const initialState = {
    checking: true
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            console.log('Entro a loggear')
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        case types.logout:
            return {

            };
        // Nuevo método
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authLogout:
            return {
                checking: false
            }
        default:
            return state;
    }
}