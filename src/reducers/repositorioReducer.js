import { types } from "../types/types";

const initialState = {
    checking: true,
    activeCategoria: {},
    data: [],
    modalArchivo: false,
    subcategoriaActiva: {},
    activeArchivo: {},
    auxiliaresFormArchivos: {},
    modalSubcategoria: false,
    repoAdminDepa: [],
    folder_active: {}
}
export const repositorioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.repoGetDataUser:
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
                adminConf: action.payload,
                checking: true
            } 
            case types.repoAddDataArchivo:
               
                let objArchivo = action.payload;
                let miObjeto = [ objArchivo,  ...state.subcategoriaActiva.archivos]
                let subCat = state.subcategoriaActiva;
                let objFinal = {
                    ...subCat,
                    archivos: miObjeto
                }
                return {
                ...state,    
                subcategoriaActiva: objFinal, 
                checking: true
            } 
            case types.repoDeleteDataArchivo:
                let idDelArchivo = action.payload;           
                let newArrayDel = state.subcategoriaActiva.archivos.filter((item) => item.id !== idDelArchivo);
                let subCatDel = state.subcategoriaActiva;
                let objFinalDel = {
                    ...subCatDel,
                    archivos: newArrayDel
                }
                return {
                ...state,
                subcategoriaActiva: objFinalDel,   
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
                return {
                    ...state,
                    activeCategoria: action.payload.objeto,
                    modalCategoria: action.payload.modalCategoria
                }  
            case types.repoModalArchivo:
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
            case types.repoGetRolesByDepartamento:     
                return {
                    ...state,
                    repoAdminDepa: action.payload.rolDepa
                }
                

                
        default:
            return state;
    }
}