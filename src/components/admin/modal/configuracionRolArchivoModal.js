import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { openModalArchivo } from '../../actions/repositorio';

export const ConfiguracionRolArchivoModal = () => {
    // const dispatch = useDispatch();
    const { modalArchivo } = useSelector(state => state.repo);
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
        dispatch(openModalArchivo(false, null))
    }
    Modal.setAppElement('#root');
    return (
        <Modal
            isOpen={modalArchivo}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
        >
            <div className="card">
                <div className="card-header bg-white">
                    <h4 className="card-title text-dark">Configuracion de rol</h4>
                </div>
                <div className="card-body bg-white">
                    <form action="#">
                        <label className='text-dark'>Seleccione una categoria</label>
                        <div className="form-group">
                            <select className="form-control text-dark" id="exampleFormControlSelect1">
                                <option>A favor</option>
                                <option>Descriptivos</option>
                                <option>Procedimientos</option>

                            </select>
                        </div>
                        <label className='text-dark'>Seleccione una subcategoria</label>
                        <div className="form-group">
                            <select className="form-control text-dark" id="exampleFormControlSelect1">
                                <option>Documentos del SGC</option>
                                <option>Consulta de organigramas</option>
                            </select>
                        </div>

                    </form>
                </div>

            </div>
            <div className='col-12 row'>
                <div className='col-6'>
                    <h3>Lista de documentos</h3>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th className='text-white' scope="col">Nombre</th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>C-SGC-04</td>
                                <td>
                                    <button type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                                        <i className="tim-icons icon-triangle-right-17"></i>
                                    </button>
                                </td>

                            </tr>
                            <tr>
                                <td>C-SGC-02</td>
                                <td>
                                    <button type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                                        <i className="tim-icons icon-triangle-right-17"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>C-SGC-03</td>
                                <td>
                                    <button type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                                        <i className="tim-icons icon-triangle-right-17"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-6'>
                    <h3>Documentos configurados</h3>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th className='text-white' scope="col">Nombre</th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>C-SGC-04</td>
                                <td>
                                    <button type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Refresh" title="">
                                        <i className="tim-icons icon-trash-simple"></i>
                                    </button>
                                </td>

                            </tr>
                            <tr>
                                <td>C-SGC-03</td>
                                <td>
                                    <button type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Refresh" title="">
                                        <i className="tim-icons icon-trash-simple"></i>
                                    </button>
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </Modal>
    )
}

