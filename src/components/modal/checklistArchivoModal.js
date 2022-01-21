import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarConfiguracionRolArchivo, openCloseChecklistArchivoModal } from '../../actions/repositorio';
import { useChecklist } from 'react-checklist';

export const ChecklistArchivoModal = () => {
    const dispatch = useDispatch();
    const { modalChecklistArchivo } = useSelector(state => state.repo);
    const { roles } = useSelector(state => state.repo.auxiliaresFormArchivos);
    const id_archivo = useSelector(state => state.repo.activeArchivo.id);
    const { uid } = useSelector(state => state.auth);

    const { handleCheck, isCheckedAll, checkedItems, setCheckedItems  } = useChecklist(roles, {
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
    // const [dateStart, setDateStart] = useState(now.toDate())

    const closeModal = () => {

        dispatch(openCloseChecklistArchivoModal(false, {}));
        console.log('cerrando');
    }
    const handleGuardar = () => {
        let arrRoles = [];
        for (let item of checkedItems) arrRoles.push({ "id_rol": item });

        const objSend = {
            id_archivo: id_archivo,
            usuario: uid,
            roles: arrRoles
        }
        console.log(objSend);
        dispatch(guardarConfiguracionRolArchivo(objSend));
        handleReset();
        //TODO: guardar configuracion con dispatch()

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
                        </div>
                        <div className='container'>
                            <label className="container2">Seleccionar todos los roles
                                <input
                                    type="checkbox"
                                    onChange={handleCheck}              // 1
                                    checked={isCheckedAll}  // 5
                                />
                                <span className="checkmark"></span>
                            </label>
                            <br /><br />
                            <div className='cont-roles'>
                                <div className="scroll-component">
                                    <div className="scroll-content">
                                    {
                                        (roles != undefined)&&
                                            roles.map((v, i) => (
                                                <>

                                                    <label key={i} className="container2">{v.rol}
                                                        <input
                                                        className='checkbox'
                                                            type="checkbox"
                                                            data-key={v.id_rol}                  // 3
                                                            onChange={handleCheck}            // 4
                                                            checked={checkedItems.has(v.id_rol)} // 5
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <br />
                                                </>
                                            ))
                                    }
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