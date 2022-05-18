import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { getAuxRoles, registroEstatus } from './../../../actions/catalogos';
import { modalEstatus } from './../../../actions/ui';

const initialState = {
    id: 0,
    nombre: '',
    usuario: '',
    correo: '',
    id_rol: 0,
    tipo: '',
}
export const AsignacionModal = () => {
    const [formValues, setformValues] = useState(initialState);
    const { modalEstatusOpen, auxRoles, itemActive } = useSelector(state => state.ui);
    const dispatch = useDispatch();
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
    useEffect(() => {
        dispatch(getAuxRoles())
        if(itemActive !== null){
            setformValues(itemActive)
        }
    }, [itemActive, dispatch]);
    const { id = 0, id_rol = 0, name = '', email = '', usuario = '', tipo = '' } = formValues;
    const {uid} = useSelector(state => state.auth)

    const closeModal = () => {
        dispatch(modalEstatus(false));
        setformValues(initialState);
    }
    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const objSave = {
            id: null,
            id_usuario: id,
            id_rol,
            email,
            usuario: uid,
            tipo,            
        }
        dispatch(registroEstatus(objSave, 'user', 'asignar-rol-usuario', 'get-usuarios-noasignados'));
        closeModal();
    }



    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={modalEstatusOpen}
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
                            <h4 className="card-title">Asignaciones</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label >Nombre</label>
                                    <input type="text" 
                                            className="form-control text-white" 
                                            id="exampleFormControlInput1" 
                                            value={name}
                                            name="name"
                                            onChange={handleInputChange}
                                            disabled />
                                </div>
                                <div className='row'>
                                    <div className="form-group col-6">
                                        <label >Correo</label>
                                        <input type="text"
                                            className="form-control"
                                            value={email}
                                            name="email"
                                            onChange={handleInputChange}

                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        <label >Usuario</label>
                                        <input type="text" 
                                            className="form-control text-white" 
                                            id="exampleFormControlInput1" 
                                            value={usuario}
                                            name="usuario"
                                            onChange={handleInputChange}
                                            disabled />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="form-group col-6">
                                    <label>Roles</label>
                                    <select className="form-control"
                                             id="exampleFormControlSelect1"
                                             value={id_rol}
                                             name="id_rol"
                                             onChange={handleInputChange}>
                                        <option>Seleccione un rol</option>
                                        {
                                            (auxRoles != null) &&
                                            auxRoles.map((aux) => (
                                                <option key={aux.id} value={aux.id}>{aux.rol}</option>
                                            ))

                                        }
                                    </select>
                                    </div>
                                    <div className="form-group col-6">
                                    <label>Tipo de usuario</label>
                                    <select className="form-control" 
                                            id="exampleFormControlSelect1"
                                            value={tipo}
                                             name="tipo"
                                             onChange={handleInputChange}
                                            >
                                        <option>Seleccione un tipo</option>
                                        <option value="ADMIN">ADMINISTRADOR</option>
                                        <option value="USUARIO">USUARIO</option>
                                        <option value="FINANZAS">FINANZAS</option>
                                        <option value="INVENTARIO">INVENTARIO</option>
                                        <option value="OFICIAL">OFICIAL</option>
                                        <option value="RH">RH</option>
                                    </select>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-fill btn-info" >Guardar</button>
                                <button onClick={closeModal} type="button" className="btn btn-fill btn-secundary">Cerrar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </Modal>
    )
}
