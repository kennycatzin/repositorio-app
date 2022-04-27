import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarLicencia, openCloseModalLicencias } from '../../../../actions/licencia';

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
    id_estatus: '',
    licencia: '',
    descripcion: '',
    tipo: '',
    version: '',
    usuario: 1
}
export const LicenciaModal = () => {
    const { licModal, licActive, licEstatus } = useSelector(state => state.licencia);
    const [formValues, setFormValues] = useState(initialState);
    const { id = 0, id_estatus = '', licencia = '', descripcion = '', tipo = '', version = '', usuario = 1 } = formValues;
    const { uid } = useSelector(state => state.auth)
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    useEffect(() => {
        (!!licActive) &&
            setFormValues(licActive)
    }, [licActive, setFormValues]);
    const handleSubmit = (e) => {
        e.preventDefault();

        const objSave = {
            id,
            id_estatus,
            licencia,
            descripcion,
            tipo,
            version,
            usuario: uid
        }
        console.log(objSave)
        dispatch(guardarLicencia(objSave));
        setFormValues(initialState);
        closeModal();
    }
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(openCloseModalLicencias(false));
    }

    return (
        <Modal
            isOpen={licModal}
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
                            <h4 className="card-title">Licencias</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className='row'>
                                    <label className="col-md-2 col-form-label">Licencia</label>
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={licencia}
                                                name="licencia"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Estatus</label>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select className="form-control"
                                                id="exampleFormControlSelect1"
                                                value={id_estatus}
                                                name="id_estatus"
                                                onChange={handleInputChange}>
                                                <option>Seleccione un estatus</option>
                                                {
                                                    (licEstatus != null) &&
                                                    licEstatus.map((aux) => (
                                                        <option key={aux.id_estatus} value={aux.id_estatus}>{aux.estatus}</option>
                                                    ))

                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <label className="col-md-2 col-form-label">Tipo licencia</label>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select className="form-control"
                                                id="exampleFormControlSelect1"
                                                value={tipo}
                                                name="tipo"
                                                onChange={handleInputChange}
                                            >
                                                <option>Seleccione un tipo</option>
                                                <option value="OFFICE">OFFICE</option>
                                                <option value="WINDOWS">WINDOWS</option>
                                                <option value="OTROS">OTROS</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <label className="col-md-2 col-form-label">Versión</label>
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={version}
                                                name="version"
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
