export const types =  {
    login: '[Auth] login',
    logout: '[Auth] logout',

    uiSetError: '[ui] Set Error',
    uiRemoveError: '[ui] Remove Error',

    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    uiModalEstatus: '[UI] Modal Estatus Open',

    uiGetTableCatalogoObjeto: '[UI] Get data in table',
    uiUpdateCatalogoEstatus: '[UI] Update Estatus',
    uiGetRoles: '[UI] Get Roles',


    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start Register',
    authStartStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',

    repoGetFolders: '[repo] Get folders',
    repoSetSubfolderActive: '[repo] get SubFolders Active',
    repoGetFiles: '[repo] get Files',
    repoSetEstatusFiles: '[repo] set Estatus Files',
    repoSetFolderActive: '[repo] Set Category Active',

    repoGetConfRepositorio: '[repo] Get Configuracion para admin',
    repoActivarCategoria: '[repo] Set activar Categoria',
    repoModalSubcategoria: '[repo] Set open close modal',
    repoModalCategoria: '[repo] Set open close modal categoria',
    repoActivarSubcategoriaAdmin: '[repo] Set subcategoria activa',
    repoModalArchivo: '[repo] open close modal',
    repoGetTiposConfiguracion: '[repo] get tipos para configuiracion',
    repoModalFormArchivos: '[repo] Open close modales formulario archivos',
    repoModalDetalleArchivo: '[repo] Open close modales detalle archivos',
    repoGetAuxFormularioArchivo: '[repo] Get data auxiliar formulario archivos',
    repoOpenModalChecklist: '[repo] open modal checklist',
    

    tableGetDataConfig: '[table] get data config',
    tableGuardarConfig: '[table] get data config',
    tableBajaConfig: '[table] get data config',
    tableStartLoading: '[table] Start loading',
    tableFinishLoading: '[table] Finish loading',
    tableModalTablero: '[table] Open - close modal del tablero',

    rolGetDataConfig: '[rol] get data config rol',
    rolGuardarConfig: '[rol] post data config',
    rolBajaConfig: '[rol] delete rol',
    rolStartLoading: '[rol] Start loading',
    rolFinishLoading: '[rol] Finish loading',
    rolModalTablero: '[rol] Open - close modal de los roles',
    rolArchivoConfModalTablero: '[rol] Open - close modal de la configuracion de los roles',
    rolGetAdminConfigurar: '[rol] Open - Get archivos no y configurados',
    rolActivarRolAdmin: '[rol] set - rol para editar o mandar a configurar',

    dashGetTablero: '[dash] Get Tablero',

}