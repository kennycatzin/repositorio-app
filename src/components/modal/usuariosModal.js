import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalEstatus } from '../../actions/ui';

export const UsuariosModal  = () => {
    const {modalEstatusOpen} = useSelector(state => state.ui);
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

    const closeModal = () => {
        
        console.log('cerrando');
        dispatch(modalEstatus(false));
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
                    <h1>Holaaaa</h1>
                </div>
            </div>


        </Modal>
    )
}


{/* <form className="container">

                <div className="form-group">
                    <label >Fecha y hora inicio</label>
                    <DateTimePicker
                            onChange={handleStartDate}
                            value={dateStart}
                            className="form-control react-datetime-picker react-datetime-picker__wrapper"
                        />                
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <input className="form-control " placeholder="Fecha inicio" />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control "
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form> */}
