import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarSubcategoria,  openModalSubcategoria } from '../../actions/repositorio';

const initialState = {
    id: 0,
    titulo: '',
    descripcion: ''
}
export const RepositorioModal = () => {
    const dispatch = useDispatch();
    const { modalSubcategoria } = useSelector(state => state.repo)
    const [formValues, setformValues] = useState(initialState);
    const { subcategoriaActiva } = useSelector(state => state.repo);
    const id_categoria = useSelector(state => state.repo.activeCategoria.id);
    const { id, titulo = '', descripcion = ''} = formValues;
    const {uid} = useSelector(state => state.auth)

    //
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
        if (subcategoriaActiva != null) {
            console.log(subcategoriaActiva);
            setformValues(subcategoriaActiva)
        }

    }, [subcategoriaActiva, setformValues])
    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const closeModal = () => {
        setformValues(initialState);
        dispatch(openModalSubcategoria(false, {}));
        console.log('cerrando')
    }
    const handleGuardar = (e) => {
        e.preventDefault(); 
       // const id_categoria = activeCategoria.id;
        const objeto = {
            id,
            titulo,
            descripcion,
            orden: 3,
            id_categoria,
            usuario: uid,
        }
        dispatch(guardarSubcategoria(objeto));
        setformValues(initialState);
    }
    Modal.setAppElement('#root');
    return (
        <Modal
            isOpen={modalSubcategoria}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
        >
            <div className="scroll-component">
                <div className="scroll-content">
                    <div>
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Configuracion de subcategoria</h4>

                            </div>
                            <form className="form-horizontal" onSubmit={handleGuardar}>
                                <div className="card-body">
                                    <div className="row">
                                        <label className="col-md-3 col-form-label">Titulo</label>
                                        <div className="col-md-9">
                                            <div className="form-group">
                                                <input type="text" 
                                                        className="form-control" 
                                                        name="titulo"
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
                                                        name="descripcion"
                                                        value={descripcion}
                                                        onChange={handleInputChange}        
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row justify-content-around card-footer'>
                                    <button  className='btn btn-success' type='submit'>Guardar</button>
                                    <button onClick={closeModal} type='button' className='btn btn-secundary'>Cerrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}
