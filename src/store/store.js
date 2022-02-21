import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';
import { dashboardReducer } from '../reducers/dashboardReducer';
import { departamentosReducer } from '../reducers/departamentosReducer';
import { repositorioReducer } from '../reducers/repositorioReducer';
import { rolReducer } from '../reducers/rolReducer';
import { tableroReducer } from '../reducers/tableroReducer';
import { tipoDocumentosReducer } from '../reducers/tipoDocumentosReducer';
import { uiReducer } from '../reducers/uiReducer';
import { usersReducer } from '../reducers/userReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers ({
    ui: uiReducer,
    repo: repositorioReducer,
    auth: authReducer,
    dash: dashboardReducer,
    tablero: tableroReducer,
    roles: rolReducer,
    tipoDocumentos: tipoDocumentosReducer,
    departamentos: departamentosReducer,
    usuarios: usersReducer    
});
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);