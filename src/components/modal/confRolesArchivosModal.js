import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseConfModalRolArchivo } from '../../actions/roles';

export const ConfRolesArchivosModal = () => {
    const {modalConfRolArchivoOpen} = useSelector(state => state.roles);
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
        dispatch(openCloseConfModalRolArchivo(false));
    }


    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={modalConfRolArchivoOpen}
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
                            <h4 className="card-title">Estatus</h4>
                        </div>
                        <form >

                            <div className="card-body">
                                <label>Categorias</label>
                                <select className="form-control"
                                             id="exampleFormControlSelect1"
                                            //  value={id_rol}
                                            //  name="id_rol"
                                            //  onChange={handleInputChange}
                                             >
                                        <option>Seleccione una categoria</option>
                                        {
                                           

                                        }
                                    </select>
                                <label>Subcategoria</label>
                                <select className="form-control"
                                             id="exampleFormControlSelect1"
                                            //  value={id_rol}
                                            //  name="id_rol"
                                            //  onChange={handleInputChange}
                                             >
                                        <option>Seleccione una subcategoria</option>
                                        {
                                           

                                        }
                                </select>
                                
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
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-fill btn-info">Guardar</button>
                                <button onClick={closeModal} type="button" className="btn btn-fill btn-secundary">Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </Modal>
    )
}
