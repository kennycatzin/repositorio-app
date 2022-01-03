import {combineReducers} from 'redux'
import { authReducer } from './authReducer'
import { repositorioReducer } from './repositorioReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = () => combineReducers({
    ui: uiReducer,
    repo: repositorioReducer,
    auth: authReducer
})