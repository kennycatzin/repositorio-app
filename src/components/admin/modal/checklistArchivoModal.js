import React, {  useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminRolesByDepartamento, guardarConfiguracionRolArchivo, openCloseChecklistArchivoModal } from '../../../actions/repositorio';
import { useChecklist } from 'react-checklist';

export const ChecklistArchivoModal = () => {
    const dispatch = useDispatch();
    const { modalChecklistArchivo } = useSelector(state => state.repo);
    const { repoAdminDepa } = useSelector(state => state.repo);
    const id_archivo = useSelector(state => state.repo.activeArchivo.id);
    const { uid } = useSelector(state => state.auth);
    const {depas} = useSelector(state => state.repo.auxiliaresFormArchivos);
    // const id_departamento = formValues;
    const [id_departamento, setid_Departamento] = useState(0);
    const {titulo} = useSelector(state => state.repo.subcategoriaActiva);
    const objCategoria = useSelector(state => state.repo.activeCategoria);
    const {nombre, descripcion} = useSelector(state => state.repo.activeArchivo);
    const { handleCheck, isCheckedAll, checkedItems, setCheckedItems } = useChecklist(repoAdminDepa, {
        key: 'id_rol',
        keyType: 'number',
    });
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const handleInputChange = ({ target }) => {
        // setidDepartamento(target.value);
        // dispatch(getAdminRolesByDepartamento(idDepartamento));  


        // setformValues({
        //     ...formValues,
        //     [target.name]: target.value
        // });
        setid_Departamento(target.value)
        dispatch(getAdminRolesByDepartamento(target.value));  
    }
    // const [dateStart, setDateStart] = useState(now.toDate())
    const closeModal = () => {

        dispatch(openCloseChecklistArchivoModal(false, {}));
    }
    const handleGuardar = () => {
        let arrRoles = [];
        for (let item of checkedItems) arrRoles.push({ "id_rol": item });

        const objSend = {
            id_archivo: id_archivo,
            usuario: uid,
            roles: arrRoles
        }
        dispatch(guardarConfiguracionRolArchivo(objSend));
        handleReset();
    }
    const handleReset = () => setCheckedItems(new Set());
    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={modalChecklistArchivo}
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
                            <h4 className="card-title">Listado de roles</h4>
                            <h5 className="card-subtitle text-center text-primary">{objCategoria.titulo} / {titulo} / {nombre} - {descripcion}</h5>

                        </div>
                        <br/>
                        <div className='container'>

                        <div className="row">
                                    <label className="col-md-3 col-form-label">Seleccione un departamento</label>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <select className="form-control"
                                                id="exampleFormControlSelect1"
                                                value={id_departamento == null ? '' : id_departamento}
                                                name="id_departamento"
                                                onChange={handleInputChange}>
                                                <option value="">Seleccione un área</option>
                                                {
                                                    (depas !== undefined ) &&
                                                        depas.map((aux) => (
                                                            <option key={aux.id_departamento} value={aux.id_departamento}>{aux.departamento_completo}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        onChange={handleCheck}
                                        checked={isCheckedAll}
                                    />
                                    <span className="form-check-sign">
                                        <span className="check"></span>
                                    </span>
                                    Seleccionar todos los roles
                                </label>
                            </div>
                            <br /><br />
                            <div className='scroll-component'>
                                <div className="cont-roles">
                                    <div className="table-full-width table-responsive">
                                        <table className="table">
                                            <tbody>
                                                {
                                                    (repoAdminDepa !== undefined) &&
                                                    repoAdminDepa.map((v, i) => (
                                                        <tr key={i}>
                                                            <td>
                                                                <div className="form-check">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input"
                                                                            type="checkbox"
                                                                            data-key={v.id_rol}                  // 3
                                                                            onChange={handleCheck}            // 4
                                                                            checked={checkedItems.has(v.id_rol)} // 5
                                                                        />
                                                                        <span className="form-check-sign">
                                                                            <span className="check"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="title">{v.rol}</p>
                                                                <p className="text-muted">{v.descripcion}</p>
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
                        <div className="card-footer text-center">
                            <button onClick={handleGuardar} type="submit" className="btn btn-fill btn-info" >Guardar</button>
                            <button onClick={closeModal} type="button" className="btn btn-fill btn-secundary" >Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}