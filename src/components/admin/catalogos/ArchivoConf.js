import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getAdminConfiguracion, getCategoriasRoles, openCloseConfModalRolArchivo } from '../../../actions/roles';
import { ConfRolesArchivosModal } from '../../modal/confRolesArchivosModal';
import { ConfRolCategoria } from '../widgets/ConfRolCategoria';

export const ArchivoConf = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeRol } = useSelector(state => state.roles);
  const { rolAdminListado } = useSelector(state => state.roles);

  const handdleRegresar = () => {
    navigate(-1);
  }
  useEffect(() => {
   dispatch(getCategoriasRoles());
   (!!activeRol)&&
    dispatch(getAdminConfiguracion(activeRol.id))   
  }, [dispatch, activeRol.id, activeRol]);
  

  const handleConfigurar = () => {
    dispatch(openCloseConfModalRolArchivo(true))
  }
  return (
    <>
      <div className="row">
        <ol className="breadcrumb bg-transparent">

          <li><span onClick={handdleRegresar} className="nav-link text-success pointer">
            <i className="tim-icons icon-minimal-left"></i> Regresar
          </span>
          </li>
        </ol>
      </div>
      <div className="row">
        <div className="col-sm-6 text-left">
          <h5 className="card-category">Configuracion</h5>
          <h2 className="card-title">{(!!activeRol)&& activeRol.rol}</h2>
        </div>
        <div className="col-sm-6">
          <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">

            {/* {
              items.map(item => (
                <TiposNavItem key={item.id} data={item} />
              ))
            } */}
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="card-title d-inline">Listado de categorias</h4>
            <button onClick={handleConfigurar} id="twitter" className="btn btn-round btn-success" title='Abrir ventana para configurar rol'>
              <i className="fa fa-cog"></i> · Configurar
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <div id="accordion">
                {
                  (rolAdminListado !== undefined)?
                    rolAdminListado.map(item => (
                      <ConfRolCategoria key={item.id} data={item} />
                    )):
                    <h5>Cargando</h5>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfRolesArchivosModal />
    </>
  )
}
