import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarRol, openCloseModalRol } from '../../actions/roles';

const initialState = {
    id: 0,
    rol: "",
    descripcion: "",
    id_departamento: 0,
}
export const RolesModal = () => {
    const {modalRolOpen} = useSelector(state => state.roles);
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
    const {depas} = useSelector(state => state.repo.auxiliaresFormArchivos);
    const [formValues, setFormValues] = useState(initialState);
    const { id= 0, rol = "", descripcion = "", id_departamento = 0} = formValues;
    const { activeRol } = useSelector(state => state.roles);
    const {uid} = useSelector(state => state.auth)
    const {actualConteo} = useSelector(state => state.roles)
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    useEffect(() => {
        if(activeRol != null){
            setFormValues(activeRol)
        }
     }, [activeRol, setFormValues])
    
    const closeModal = () => {
        
        dispatch(openCloseModalRol(false, {}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id,
            rol,
            descripcion,
            tipo: "",
            usuario: uid,
            id_departamento
        }
        dispatch(guardarRol(obj, actualConteo));        
        console.log('guardando...');
        
    }

    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={modalRolOpen}
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
                            <h4 className="card-title">Roles</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label >Rol</label>
                                    <input type="text" 
                                            className="form-control" 
                                            id="exampleFormControlInput1" 
                                            value={rol}
                                            name="rol"
                                            onChange={handleInputChange}
                                             />
                                </div>
                                <div className="form-group">
                                    <label >Descripción</label>
                                    <input type="text" 
                                            className="form-control" 
                                            id="exampleFormControlInput1" 
                                            value={descripcion}
                                            name="descripcion"
                                            onChange={handleInputChange}
                                             />
                                </div>
                                <div className="form-group">
                                    <label>Departamentos</label>
                                    <select className="form-control"
                                             id="exampleFormControlSelect1"
                                             value={id_departamento}
                                             name="id_departamento"
                                             onChange={handleInputChange}>
                                        <option>Seleccione un departamento</option>
                                        {
                                            (depas !== undefined) &&
                                                depas.map((aux) => (
                                                    <option key={aux.id_departamento} value={aux.id_departamento}>{aux.departamento_completo}</option>
                                                ))
                                        }
                                    </select>
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



