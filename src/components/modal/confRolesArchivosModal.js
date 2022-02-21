import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addArchivoAconfigurar, bajaConfArchivoRol, configurarArchivoRol, deleteArchivoAddCrudo, getArchivosAdminConf, getSubcategoriasRoles, openCloseConfModalRolArchivo } from '../../actions/roles';
import Swal from 'sweetalert2';
export const ConfRolesArchivosModal = () => {
    const { modalConfRolArchivoOpen } = useSelector(state => state.roles);
    const { categorias } = useSelector(state => state.roles);
    const { subcategorias } = useSelector(state => state.roles);
    let { archivos_crudos } = useSelector(state => state.roles);
    let { archivos_configurados } = useSelector(state => state.roles);
    const { activeRol } = useSelector(state => state.roles)
    const [categoria, setcategoria] = useState(0);
    const [subcategoria, setsubcategoria] = useState(0);
    const { uid } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const customStyles = {
        content: {
            top: '52%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    // const [dateStart, setDateStart] = useState(now.toDate())
    const handleInputChange = ({ target }) => {
        setcategoria(target.value);
        console.log(target.value);
        dispatch(getSubcategoriasRoles(target.value));
    }
    const handleInputChangeSubcategoria = ({ target }) => {
        setsubcategoria(target.value);
        console.log(target.value);
        dispatch(getArchivosAdminConf(target.value, activeRol.id));
    }
    const closeModal = () => {

        console.log('cerrando');
        dispatch(openCloseConfModalRolArchivo(false));
    }
    const handleClick = (obj) => {
        dispatch(addArchivoAconfigurar(obj));
    }
    const handleGuardar = () => {
        const objSave = {
            id_rol: activeRol.id,
            usuario: uid,
            archivos: archivos_configurados
        }
        console.log(subcategoria.id, activeRol.id);
        dispatch(configurarArchivoRol(objSave, subcategoria, activeRol.id));
    }
    const handleEliminar = (item) => {
        console.log(item);
        Swal.fire({
            title: 'Realmente desea eliminar este registro?',
            text: "No podrá revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                if (item.tipo == 'n') {
                    console.log('entro al n');
                    dispatch(deleteArchivoAddCrudo(item))
                } else {
                    dispatch(bajaConfArchivoRol(item, 1, activeRol.id))
                }
            }
        })
    }
    Modal.setAppElement('#root');
    return (
        <Modal
            isOpen={modalConfRolArchivoOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
            closeModal
        >
            <div className="scroll-component">
                <div className="scroll-content">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Configuración Rol - Archivos</h4>
                            <h5 className="card-title text-center text-primary">{(!!activeRol)&& activeRol.rol}</h5>

                        </div>
                        <form >
                            <div className="card-body">
                                <label>Categorias</label>
                                <select className="form-control"
                                    id="exampleFormControlSelect1"
                                    value={categoria}
                                    name="categoria"
                                    onChange={handleInputChange}
                                >
                                    <option>Seleccione una categoria</option>
                                    {
                                        (categorias !== undefined) &&
                                        categorias.map((aux) => (
                                            <option key={aux.id} value={aux.id}>{aux.titulo}</option>
                                        ))
                                    }
                                </select>
                                <label>Subcategoria</label>
                                <select className="form-control"
                                    id="exampleFormControlSelect1"
                                    value={subcategoria}
                                    name="subcategoria"
                                    onChange={handleInputChangeSubcategoria}
                                >
                                    <option>Seleccione una subcategoria</option>
                                    {
                                        (subcategorias !== undefined) &&
                                        subcategorias.map((aux) => (
                                            <option key={aux.id} value={aux.id}>{aux.titulo} </option>
                                        ))

                                    }
                                </select>
                            </div>
                            <div className='col-12 row'>
                                <div className='col-6'>
                                    <div className='container'>
                                        <div className='scroll-component'>
                                            <div className="cont-roles">

                                                <table className="table">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th className='text-white' scope="col">Lista de documentos</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {
                                                            (archivos_crudos != undefined) &&
                                                            archivos_crudos.map((item, index) => (
                                                                <tr key={(new Date()).getTime().toString(2 + index)} className='animate__animated animate__fadeIn size'>
                                                                    <td>{item.nombre}</td>
                                                                    <td>
                                                                        <button onClick={() => handleClick(item)} type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="Agregar archivo a la configuración">
                                                                            <i className="tim-icons icon-triangle-right-17"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='container'>
                                        <div className='scroll-component'>
                                            <div className="cont-roles">
                                                <table className="table">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th className='text-white' scope="col">Documentos configurados</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            (archivos_configurados != undefined) &&
                                                            archivos_configurados.map(item => (
                                                                <tr key={item.id} className='animate__animated animate__fadeIn'>
                                                                    <td>{item.nombre}</td>
                                                                    <td>
                                                                        <button onClick={() => handleEliminar(item)} type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Refresh" title="Eliminar archivo configurado">
                                                                            <i className="tim-icons icon-trash-simple"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button onClick={handleGuardar} type="button" className="btn btn-fill btn-info">Guardar</button>
                                <button onClick={closeModal} type="button" className="btn btn-fill btn-secundary">Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
