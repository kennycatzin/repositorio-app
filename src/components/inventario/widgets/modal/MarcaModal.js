import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarMarca, openCloseModalMarcas } from '../../../../actions/marcas';

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
const initialState = {
    id: 0,
    marca: '',
    descripcion: '',
    gama: ''
}
export const MarcaModal = () => {
    const [formValues, setFormValues] = useState(initialState);
    const { id = 0, marca = '', gama = '', descripcion = '', usuario = 1 } = formValues;
    const { uid } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const { marcaActive, marcaModal } = useSelector(state => state.marcas)
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    useEffect(() => {
        (!!marcaActive) &&
            setFormValues(marcaActive)
    }, [marcaActive, setFormValues]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const objSave = {
            id,
            marca,
            gama,
            descripcion,
            usuario: uid
        }
        console.log(objSave)
        dispatch(guardarMarca(objSave));
        setFormValues(initialState);
        closeModal();
    }

    const closeModal = () => {
        dispatch(openCloseModalMarcas(false));
    }

    return (
        <Modal
            isOpen={marcaModal}
            onRequestClose={marcaModal}
            style={customStyles}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
            ariaHideApp={false}
            closeModal
        >
            <div className="scroll-component">
                <div className="scroll-content">
                    <div className="card estatus">
                        <div className="card-header">
                            <h4 className="card-title">Marcas</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className='row'>
                                    <label className="col-md-2 col-form-label">Marca</label>
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={marca}
                                                name="marca"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <label className="col-md-2 col-form-label">Gama</label>
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <select className="form-control"
                                                id="exampleFormControlSelect1"
                                                value={gama}
                                                name="gama"
                                                onChange={handleInputChange}
                                            >
                                                <option>Seleccione una gama</option>
                                                <option value="BAJA">BAJA</option>
                                                <option value="MEDIA">MEDIA</option>
                                                <option value="ALTA">ALTA</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div className='row'>
                                    <label className="col-md-2 col-form-label">Descripción</label>
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
