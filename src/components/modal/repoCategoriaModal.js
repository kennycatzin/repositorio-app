import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarCategoria, openModalCategoria } from '../../actions/repositorio';

const initialState = {
    id: null,
    titulo: '',
    descripcion: '',
    orden: 1,
    activo: 1
}

export const RepoCategoriaModal = () => {
    const { modalCategoria } = useSelector(state => state.repo);
    const { activeCategoria } = useSelector(state => state.repo);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialState)
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
    useEffect(() => {
        if (activeCategoria != null) {
            setFormValues(activeCategoria)
        }
    }, [activeCategoria, setFormValues])
    // const [dateStart, setDateStart] = useState(now.toDate())
    const { id, titulo = '', descripcion = '', orden = 1 } = formValues;
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const closeModal = () => {

        console.log('cerrando');
        dispatch(openModalCategoria(false));
    }

    const handleGuardar = (e) => {
        e.preventDefault();
        const objGuarda = {
            id,
            titulo,
            descripcion,
            orden,
            activo: 1
        }
        dispatch(guardarCategoria(objGuarda));
        setFormValues(initialState);
        console.log('Guardando');

    }


    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={modalCategoria}
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
                            <h4 className="card-title">Configuracion de Categoría</h4>
                        </div>
                        <form className="form-horizontal">

                            <div className="card-body">
                                <div className="row">
                                    <label className="col-md-3 col-form-label">Titulo</label>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                name='titulo'
                                                value={titulo}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-3 col-form-label">Descripcion</label>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                name='descripcion'
                                                value={descripcion}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className='row justify-content-around'>
                                    <button type='submit' onClick={handleGuardar} className='btn btn-success'>Guardar</button>
                                    <button type='button' onClick={closeModal} className='btn btn-secundary'>Cerrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

