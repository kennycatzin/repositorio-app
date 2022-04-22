import React, {  useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { agregarEquipoAdmin, atenderDetalleSolicitud, openCloseModal } from '../../../actions/solicitud';

const initialState = {
    id: null,
    id_estatus: 0,
    observacion: '',
    usuario: 1,
}
export const EquipoAgregarModal = ({ tipo }) => {
    const { modalAgregarEquipo, equipoActive, estatusAgregar } = useSelector(state => state.solicitud);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialState);
    const {  observacion, id_estatus } = formValues;
    const {uid} = useSelector(state=> state.auth);
    const [estatus, setestatus] = useState('')
    const handleInputChange = ({ target }) => {
        if (target.name === "id_estatus") {
            setestatus(target.selectedOptions[0].text);
            console.log(target.selectedOptions[0].text)
        }
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    // useEffect(() => {
    //    if(itemActive != null){
    //        setFormValues(itemActive)
    //    }
    // }, [itemActive, setFormValues])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(tipo === 2){
            console.log('entro')
            const objSave = {
                id: equipoActive.id_asignacion,
                id_estatus,
                estatus,
                observacion,
                marca: equipoActive.marca,
                tipo_equipo: equipoActive.tipo_equipo,
                numero_serie: equipoActive.numero_serie,
                usuario: uid
            }
            console.log(objSave);
            dispatch(agregarEquipoAdmin(objSave));
        }else{
            console.log('salgo')
            const objAtendiendo = {
                id_detalle: equipoActive.id,
                id_estatus,
                id_enc_solicitud: equipoActive.id_enc_solicitud,
                estatus,
                esta_detalle: estatus,
                observacion,
                observaciones: observacion,
                marca: equipoActive.marca,
                tipo_equipo: equipoActive.tipo_equipo,
                numero_serie: equipoActive.numero_serie,
                usuario: uid

            }
            console.log(objAtendiendo);
            dispatch(atenderDetalleSolicitud(objAtendiendo, equipoActive.id_enc_solicitud));
            //TODO: Guardar detalle solicitud
            // dispatch(agregarEquipoAdmin(objSave));
        }


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
        dispatch(openCloseModal({}, false));
        setFormValues(initialState);
    }

    Modal.setAppElement('#root');
    return (
        <Modal
            isOpen={modalAgregarEquipo}
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
                            <h4 className="card-title">Agregar equipo
                                <span className='float-right text-success'>{equipoActive?.tipo_equipo} / {equipoActive?.marca} / NS- {equipoActive?.numero_serie}</span>
                            </h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                {
                                    (tipo === 1) ?
                                    (<div className="form-group">
                                        <label>Estatus</label>
                                        <select className="form-control"
                                            value={id_estatus}
                                            name="id_estatus"
                                            onChange={handleInputChange}
                                        >
                                            <option>Seleccione tipo de movimiento</option>
                                            {
                                                (!!estatusAgregar) &&
                                                estatusAgregar.map((aux) => (
                                                    <option key={aux.id} value={aux.id}>{aux.estatus}</option>
                                                ))

                                            }
                                        </select>
                                    </div>)
                                    : null
                                }

                                <label>Observación</label>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        value={observacion}
                                        name="observacion"
                                        onChange={handleInputChange}
                                    />
                                </div>

                            </div>
                            <div className="card-footer mb-5">
                                <button type="submit" className="btn btn-fill btn-info float-left">{tipo === 2 ? 'Agregar': 'Guardar'}</button>
                                <button onClick={closeModal} type="button" className="btn btn-fill btn-secundary float-right">Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
