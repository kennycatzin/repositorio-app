import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { guardarTipoEquipo, openCloseModalTipoEquipos } from '../../../../actions/tipoEquipos';

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
    tipo_equipo: '',
    descripcion: '',
    tipo: ''
}
export const TipoEquipoModal = () => {
    const [formValues, setFormValues] = useState(initialState);
    const { id = 0, tipo_equipo = '', descripcion = '', usuario = 1, tipo = '' } = formValues;
    const { uid } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const { tipoEActive, tipoEModal } = useSelector(state => state.tipo_equipo)
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    useEffect(() => {
        (!!tipoEActive) &&
            setFormValues(tipoEActive)
    }, [tipoEActive, setFormValues]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const objSave = {
            id,
            tipo,
            tipo_equipo,
            descripcion,
            usuario: uid
        }
        console.log(objSave)
        dispatch(guardarTipoEquipo(objSave));
        setFormValues(initialState);
        closeModal();
    }
    const closeModal = () => {
        dispatch(openCloseModalTipoEquipos(false));
    }
  return (
    <Modal
    isOpen={tipoEModal}
    onRequestClose={closeModal}
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
                    <h4 className="card-title">Tipos de equipo</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className='row'>
                            <label className="col-md-2 col-form-label">Tipo de equipo</label>
                            <div className="col-md-10">
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        value={tipo_equipo}
                                        name="tipo_equipo"
                                        onChange={handleInputChange}
                                    />
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
                        <div className='row'>
                            <label className="col-md-2 col-form-label">Seleccione un tipo de equipo</label>
                            <div className="col-md-10">
                                <div className="form-group">
                                    <select className="form-control"
                                                id="exampleFormControlSelect1"
                                                value={tipo}
                                                name="tipo"
                                                onChange={handleInputChange}
                                            >
                                                <option>Seleccione un tipo</option>
                                                <option value="COMPUTADORA">COMPUTADORA</option>
                                                <option value="OTROS">OTROS</option>

                                            </select>
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
