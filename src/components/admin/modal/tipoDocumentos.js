import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarTipoDocumento, openCloseModalTipoDocumento } from './../../../actions/tipoDocumentos';

const initialState = {
    id: null,
    tipo: '',
    descripcion: '',
    usuario: 1,
    nombre_corto: ''
}
export const TipoModal = () => {
    const { tdModal, tdActive } = useSelector(state => state.tipoDocumentos);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialState);
    const { id = 0, tipo = '', descripcion = '', nombre_corto = '' } = formValues;
    const {uid} = useSelector(state => state.auth)

        
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    useEffect(() => {
        (!!tdActive)&&
            setFormValues(tdActive)
     }, [tdActive, setFormValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const objSave = {
            id,
            tipo,
            descripcion,
            nombre_corto,
            usuario: uid
        }
        dispatch(guardarTipoDocumento(objSave));
        // dispatch();
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
        
        dispatch(openCloseModalTipoDocumento(false));
    }
    Modal.setAppElement('#root');
    return (
        <Modal
            isOpen={tdModal}
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
                            <h4 className="card-title">Tipo de documento</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Tipo documento</label>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={tipo}
                                                name="tipo"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <label className="col-md-2 col-form-label">Nombre Corto</label>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={nombre_corto}
                                                name="nombre_corto"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <label className="col-md-2 col-form-label">Descripcion</label>
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={descripcion}
                                                name="descripcion"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-fill btn-info">Guardar</button>
                                <button onClick={closeModal} type="button" className="btn btn-fill btn-secundary" >Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
