import { types } from "../types/types"


const initialState = {
    loading: false,
    data: [],
    
}
export const reporteReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.reporteGetInfo:
            return {
                data: action.payload.data,
                loading: false
            }
        case types.reporteStartLoading:
            return {
                ...state,
                loading: true
            }
    
        case types.reporteFinishLoading:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
