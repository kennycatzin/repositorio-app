import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { registroEstatus } from '../../actions/catalogos';
import { modalEstatus } from '../../actions/ui';

const initialState = {
    id: null,
    estatus: '',
    descripcion: '',
    usuario: 1,
}
export const EstatusModal = () => {
    const { modalEstatusOpen, loading, itemActive } = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialState);
    const { id, estatus, descripcion } = formValues;
    const {uid} = useSelector(state => state.auth)

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    useEffect(() => {
       if(itemActive != null){
           setFormValues(itemActive)
       }
    }, [itemActive, setFormValues])
    const handleSubmit = (e) => {
        let endPoint = '';
        e.preventDefault();
        const objSave = {
            id: id,
            estatus,
            descripcion,
            usuario: uid,
            tipo: 1,
            activo: 1
        }
        if(id != null){
            endPoint = 'update-estatus'
        }else{
            endPoint = 'store-estatus'

        }
        dispatch(registroEstatus(objSave, 'estatus', endPoint, 'get-estatus'));
        closeModal();
    }

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
    const closeModal = () => {
        dispatch(modalEstatus(false));
        setFormValues( initialState );
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
                    <div className="card estatus">
                        <div className="card-header">
                            <h4 className="card-title">Estatus</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <label>Estatus</label>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control" 
                                        value={estatus}
                                        name="estatus"
                                        onChange={handleInputChange}/>
                                </div>
                                <label>Descripcion</label>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control" 
                                        value={descripcion}
                                        name="descripcion"
                                        onChange={handleInputChange}/>
                                </div>

                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-fill btn-info" disabled = {loading}>Guardar</button>
                                <button onClick={closeModal} type="button" className="btn btn-fill btn-secundary" disabled = {loading}>Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
