import { types } from "../types/types";

const initialState = {
    checking: true,
    activeCategoria: {},
    data: [],
    modalArchivo: false,
    subcategoriaActiva: {},
    activeArchivo: {},
    auxiliaresFormArchivos: {},
    modalSubcategoria: false 
}
export const repositorioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.repoGetFolders:
            return {
                ...state,
                data: [...action.payload],
                checking: false
            }
            case types.repoSetSubfolderActive:
            return {
                ...state,
                active: action.payload,
                checking: false
            }
            case types.repoSetFolderActive:
            return {
                ...state,
                folder_active: action.payload,
                checking: false
            }
            case types.repoGetFiles:
                console.log(state)
            return {
                ...state,
                filesData: [...action.payload],
                checking: true
            }
            case types.repoSetEstatusFiles:
            return {
                ...state,
                id_file: action.payload,
                checking: true
            }
            case types.repoGetConfRepositorio:
                return {
                ...state,
                adminConf: {},
                adminConf: action.payload,
                checking: true
            }  
            case types.repoActivarCategoria:
                return {
                ...state,
                activeCategoria: action.payload,   
            }  
            case types.repoModalSubcategoria:
                return {
                    ...state,
                    subcategoriaActiva: action.payload.objeto,
                    modalSubcategoria: action.payload.modalSubcategoria,

                }
            case types.repoModalCategoria:
                console.log('entro')
                return {
                    ...state,
                    activeCategoria: action.payload.objeto,
                    modalCategoria: action.payload.modalCategoria
                }  
            case types.repoModalArchivo:
                console.log('entro')
                return {
                    ...state,
                    subcategoriaActiva: action.payload.objeto,
                    modalArchivo: action.payload.modalArchivo
                }    
            case types.repoGetTiposConfiguracion:
                return {
                    ...state,
                    configuracionTipos: action.payload
                } 
            case types.repoModalFormArchivos:
                return {
                    ...state,
                    activeArchivo: action.payload.archivo,
                    modalFormularioArchivo: action.payload.modalFormularioArchivo
                }   
            case types.repoModalDetalleArchivo:
                return {
                    ...state,
                    activeArchivo: action.payload.objeto,
                    modalDetalleArchivo: action.payload.modalDetalleArchivo
                }
            case types.repoGetAuxFormularioArchivo:
                return {
                    ...state,
                    auxiliaresFormArchivos: action.payload,
                    checking: false
                }
            case types.repoOpenModalChecklist:
                return {
                    ...state,
                    activeArchivo: action.payload.dataArchivo,
                    modalChecklistArchivo: action.payload.modalChecklist,
                }    
                
                

                
        default:
            return state;
    }
}