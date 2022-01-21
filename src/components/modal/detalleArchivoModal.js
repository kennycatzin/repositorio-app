import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { openModalDetalleArchivo } from '../../actions/repositorio';
import { TableDetalleArchivo } from '../admin/widgets/tables/TableDetalleArchivo';

export const DetalleArchivoModal = () => {
    // const dispatch = useDispatch();
    const { modalDetalleArchivo } = useSelector(state => state.repo);
    const {detalle} = useSelector(state => state.repo.activeArchivo);

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


    const cabeceras = [
        "Consecutivo",
        "Nombre",
        "Fecha modificación"
    ];


    const closeModal = () => {
        dispatch(openModalDetalleArchivo(false, {}));
        console.log('cerrando')
    }
    Modal.setAppElement('#root');
    return (
        <Modal
            isOpen={modalDetalleArchivo}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
        >
            <div className="scroll-component">
                <div className="scroll-content">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header d-flex justify-content-between">
                                <h4 className="card-title d-inline">Archivos reemplazados</h4>
                               
                            </div>                        
                        </div>
                        <div className='container'>
                            {
                                (detalle !== undefined) ?
                                    <TableDetalleArchivo cabeceras={cabeceras} data={detalle} />
                                    : <h5>Cargando...</h5>

                            }
                        </div>
                        <button onClick={closeModal} className='btn btn-secundary btn-block'>Cerrar</button>

                    </div>
                </div>
            </div>

        </Modal>
    )
}

