import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarTablero, openCloseModalTablero } from '../../actions/tablero';
import moment from 'moment';


const initEvent = {
    id: null,
    titulo: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_final: '',
    archivo: ''
   
}
export const TableroModal = () => {
    const { modalTableroOpen, activeTablero } = useSelector(state => state.tablero)
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
    const [formValues, setFormValues] = useState(initEvent);
    const { id,  titulo, descripcion, fecha_inicio, fecha_final, imagen } = formValues;
    const [miImagen, setmiImagen] = useState();

    useEffect(() => {
        if(activeTablero !== undefined && activeTablero !== {}){
            console.log(activeTablero)
            const valores = {
                id: activeTablero.id,
                titulo: activeTablero.titulo,
                descripcion: activeTablero.descripcion,
                fecha_inicio: activeTablero.fecha_inicio,
                fecha_final: activeTablero.fecha_final,
                archivo: ''
               
            }
            setFormValues(valores)
        }
     }, [activeTablero, setFormValues])

    const closeModal = () => {

        console.log('cerrando');
        dispatch(openCloseModalTablero(false));
    }
    const handleImagenChange = (e) => {
        console.log(e.target.files[0]);
        setmiImagen(e.target.files[0]);
        // setSelectedFile(e.target.files[0]);
    }
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleGuardar = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("titulo", titulo);
        formData.append("activo", 1);
        formData.append("descripcion", descripcion);
        formData.append("tipo", 1);
        formData.append("fecha_inicio", fecha_inicio);
        formData.append("fecha_final", fecha_final);
        formData.append("archivo", miImagen);
        formData.append("usuario", 1);
        formData.append("id", id);

        dispatch(guardarTablero(formData));
    }

    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={modalTableroOpen}
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
                                <div className="row">
                                    <label className="col-md-3 col-form-label">Fecha inicial</label>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <input type="date"
                                                className="form-control"
                                                name="fecha_inicio"
                                                value={moment(fecha_inicio).format('YYYY-MM-DD') }
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-3 col-form-label">Fecha final</label>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <input type="date"
                                                className="form-control"
                                                name="fecha_final"
                                                value={moment(fecha_final).format('YYYY-MM-DD') }
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-3 col-form-label">Imagen</label>
                                    <div className="col-md-9">
                                        <div className="">
                                            <input type="file"
                                                className="form-control pointer imagen"
                                                name='imagen'
                                                value={imagen}
                                                onChange={handleImagenChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row justify-content-around card-footer'>
                                <button className='btn btn-success' type='submit'>Guardar</button>
                                <button className='btn btn-secundary' onClick={closeModal} type='button'>Cerrar</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </Modal>
    )
}


