import { types } from "../types/types";

const initialState = {
    checking: true,
    data: [],
    
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
                    modalSubcategoria: action.payload.modalSubcategoria
                }
            case types.repoModalCategoria:
                console.log('entro')
                return {
                    ...state,
                    activeCategoria: action.payload.objeto,
                    modalCategoria: action.payload.modalCategoria
                }
            
        default:
            return state;
    }
}