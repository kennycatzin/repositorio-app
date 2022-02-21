import { types } from "../types/types";

const initialState = {
    checking: true,
    actualPage: 1,
    actualConteo: 0

}
export const rolReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.tableStartLoading:
            return {
                ...state,
                checking: true
            }
        case types.tableFinishLoading:
            return {
                ...state,
                checking: false
            }
        case types.rolGetDataConfig:
            return {
                ...state,
                roles: action.payload.roles,
                rolTotal: action.payload.totales,
                checking: false,
                paginas: action.payload.paginas
                
            }
        case types.rolModalTablero:
            return {
                ...state,
                modalRolOpen: action.payload.modal,
                activeRol: action.payload.rol
            }
        case types.rolActivo:
        return {
            ...state,
            activeRol: action.payload.rol
        }
        case types.rolGetArchivosCrudosConfigurados:
        return {
            ...state,
            archivos_crudos: action.payload.archivos_crudos,
            archivos_configurados: action.payload.archivos_configurados

        }       
        case types.rolArchivoConfModalTablero:
            return {
                ...state,
                activeRolEditConfig: action.payload.rol,
                modalConfRolArchivoOpen: action.payload.modal,
            }
        case types.rolActivarRolAdmin:
            return {
                ...state,
            }
        case types.rolGetCategoria:
        return {
            ...state,
            categorias: action.payload.categorias
        }     
        case types.rolGetSubcategoriaByCategoria:
            return {
                ...state,
                subcategorias: action.payload.subcategorias
            }
        case types.rolDeleteCrudo:
            let obj = action.payload;
            console.log(obj);
            let newArray = state.archivos_crudos.filter((item) => item.id_archivo !== obj.id_archivo);
            const miObjeto = {   
                id: (new Date()).getTime().toString(36),             
                id_archivo: obj.id_archivo,
                nombre: obj.nombre,
                descripcion: obj.descripcion,
                tipo: 'n'
            }
            state.archivos_configurados.push(miObjeto);
            return {
                ...state,
                archivos_crudos: newArray
            }
        case types.rolDeleteConfigurado:
            let objDel = action.payload;           
            let newArrayDel = state.archivos_configurados.filter((item2) => item2.id != objDel.id);
            state.archivos_crudos.push(objDel);
            return {
                ...state,
                archivos_configurados: newArrayDel
            }
        case types.rolQuitArchivos:            
            return {
                ...state,
                archivos_configurados: [],
                archivos_crudos: []

            }
        case types.rolGetConfiguracionAdmin:     
            console.log('entro a configuracion');       
            return {
                ...state,
            rolAdminListado: action.payload
            }
        case types.rolPaginar:
            return {
                ...state,
                actualPage: state.actualPage + action.payload.paginador,
                actualConteo: state.actualConteo + action.payload.conteo
            }

            

        
            
            
        default:
            return state;
    }
}