import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalCategoria, openModalSubcategoria } from '../../actions/repositorio';
import { modalEstatus } from '../../actions/ui';

export const RepositorioModal = () => {
    const dispatch = useDispatch();
    const {modalSubcategoria} = useSelector(state => state.repo)
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
        dispatch(openModalSubcategoria(false));
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
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Configuracion de subcategoria</h4>
                            </div>
                            <div class="card-body">
                                <form class="form-horizontal">
                                    <div class="row">
                                        <label class="col-md-3 col-form-label">Titulo</label>
                                        <div class="col-md-9">
                                            <div class="form-group">
                                                <input type="text" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-md-3 col-form-label">Descripcion</label>
                                        <div class="col-md-9">
                                            <div class="form-group">
                                                <input type="text" class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label class="col-md-3 col-form-label">Orden</label>
                                        <div class="col-md-9">
                                            <div class="form-group">
                                                <input type="number" class="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                    <div className='col'>
                        <h3>Lista de documentos</h3>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th className='text-white' scope="col">#</th>
                                    <th className='text-white' scope="col">Nombre</th>
                                    <th className='text-white' scope="col">Descipcion</th>
                                    <th className='text-white' scope="col">Opciones</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#</td>
                                    <td>C-SGC-04</td>
                                    <td>Mi descripcion</td>
                                    <td className="d-flex justify-content-around">
                                        <button type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                                            <i className="tim-icons icon-pencil"></i>
                                        </button>
                                        <button type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="">
                                            <i className="tim-icons icon-trash-simple"></i>
                                        </button>
                                    </td>

                                </tr>
                                <tr>
                                    <td>#</td>

                                    <td>C-SGC-03</td>
                                    <td>Mi descripcion</td>

                                    <td className="d-flex justify-content-around">
                                        <button type="button" rel="tooltip" className="btn btn-info btn-sm " data-original-title="Refresh" title="">
                                            <i className="tim-icons icon-pencil"></i>
                                        </button>
                                        <button type="button" rel="tooltip" className="btn btn-danger btn-sm " data-original-title="Delete" title="">
                                            <i className="tim-icons icon-trash-simple"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='row justify-content-around'>
                        <button className='btn btn-success'>Guardar</button>
                        <button onClick={closeModal} className='btn btn-secundary'>Cerrar</button>
                    </div>
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
