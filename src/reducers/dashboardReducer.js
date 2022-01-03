import { types } from "../types/types"


const initialState = {
    checking: true,
    data: {}
}
export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.dashGetTablero:
            return {
                data: action.payload,
                checking: false
            }
        default:
            return state;
    }
}
