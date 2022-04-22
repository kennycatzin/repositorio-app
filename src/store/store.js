import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { asignacionReducer } from '../reducers/asignacionReducer';

import { authReducer } from '../reducers/authReducer';
import { dashboardReducer } from '../reducers/dashboardReducer';
import { departamentosReducer } from '../reducers/departamentosReducer';
import { equipoReducer } from '../reducers/equipoReducer';
import { licenciaReducer } from '../reducers/licenciaReducer';
import { marcaReducer } from '../reducers/marcaReducer';
import { precioReducer } from '../reducers/precioReducer';
import { repositorioReducer } from '../reducers/repositorioReducer';
import { rolReducer } from '../reducers/rolReducer';
import { solicitudReducer } from '../reducers/solicitudReducer';
import { tableroReducer } from '../reducers/tableroReducer';
import { tipoDocumentosReducer } from '../reducers/tipoDocumentosReducer';
import { tipoEquipoReducer } from '../reducers/tipoEquipoReducer';
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
    usuarios: usersReducer,
    asignacion: asignacionReducer,
    solicitud: solicitudReducer,
    precio: precioReducer,
    licencia: licenciaReducer,
    equipo: equipoReducer,
    tipo_equipo: tipoEquipoReducer,
    marcas: marcaReducer
});
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);