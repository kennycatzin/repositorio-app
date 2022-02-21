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

    repoGetDataUser: '[repo] Get folders',
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
    repoAddDataArchivo: '[repo] Agrega el archivo a la tabla de configuracion',
    repoDeleteDataArchivo: '[repo] Elimina el archivo de la tabla configuracion',
    repoGetRolesByDepartamento: '[repo] obtener el listado roles por medio de su departamento',


    tableGetDataConfig: '[table] get data config',
    tableGuardarConfig: '[table] get data config',
    tableBajaConfig: '[table] get data config',
    tableStartLoading: '[table] Start loading',
    tableFinishLoading: '[table] Finish loading',
    tableModalTablero: '[table] Open - close modal del tablero',
    tableGetFilesTablero: '[table] Obtener lista de archivos',

    rolGetDataConfig: '[rol] get data config rol',
    rolGuardarConfig: '[rol] post data config',
    rolBajaConfig: '[rol] delete rol',
    rolStartLoading: '[rol] Start loading',
    rolFinishLoading: '[rol] Finish loading',
    rolModalTablero: '[rol] Open - close modal de los roles',
    rolArchivoConfModalTablero: '[rol] Open - close modal de la configuracion de los roles',
    rolGetAdminConfigurar: '[rol] Open - Get archivos no y configurados',
    rolActivarRolAdmin: '[rol] set - rol para editar o mandar a configurar',
    rolGetCategoria: '[rol] get Categorias para configurar rol',
    rolGetSubcategoriaByCategoria: '[rol] get Subcategorias para configurar rol by categoria',
    rolActivo: '[rol] set rol activo para obtener informacion',
    rolGetArchivosCrudosConfigurados: '[rol] get archivos por cat y sub',
    rolDeleteCrudo: '[rol] elimina registro del arreglo archivos_crudos',
    rolDeleteConfigurado: '[rol] afrega registro al arreglo crudo y elimina el configurado',
    rolQuitArchivos: '[rol] eliminar los archivos para traer la nueva configurcion',
    rolGetConfiguracionAdmin: '[rol] obtener el listado de configuracion del rol',
    rolBusqueda: '[rol] obtener el listado roles por medio de su búsqueda',
    rolPaginar: '[rol] Maneja el estado de la paginación en el panel',

    tipoGetTipoDocumentos: '[tipo] obtener listado de tipo de documentos',
    tipoGuardarTipoDocumentos: '[tipo] guardar documentos',
    tipoDeleteTipoDocumentos: '[tipo] eliminar el tipo de documento',
    tipoModalTipoDocumento: '[tipo] Abrir modal con el TD activo Tipo documentos',

    dashGetTablero: '[dash] Get Tablero',

    depaGetDepartamentos: '[depa] obtener listado de departamentos',
    depaGuardarDepartamentos: '[depa] guardar departamentos',
    depaDeleteDepartamentos: '[depa] eliminar el departamento',
    depaModalDepartamentos: '[depa] Abrir modal con el TD activo departamentos',
    depaPaginar: '[depa] Maneja el estado de la paginación en el panel',

    depaMovPaginadorDepartamentos: '[depa] Central para controlar el numero de página',

    userGetUsuarios: '[user] obtener listado de usuarios',
    userGuardarUsuario: '[user] guardar usuarios',
    userDeleteUsuario: '[user] eliminar el usuario',
    userModalUsuario: '[user] Abrir modal con el TD activo usuarios',
    userPaginar: '[user] Maneja el estado de la paginación en el panel',

}