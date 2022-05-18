import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarTablero, openCloseModalTablero } from '../../../actions/tablero';
import moment from 'moment';
import Swal from 'sweetalert2';


const initEvent = {
    id: null,
    titulo: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_final: '',
    orden: 1,
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
    const fecha = Date.now();
    const { id,  titulo = '', descripcion = '', fecha_inicio = moment(fecha).format('YYYY-MM-DD'), fecha_final = moment(fecha).format('YYYY-MM-DD'), imagen, orden = 1 } = formValues;
    const [miImagen, setmiImagen] = useState();
    const {uid} = useSelector(state => state.auth)

    useEffect(() => {
        if(activeTablero !== undefined && activeTablero !== {}){
            const valores = {
                id: activeTablero.id,
                titulo: activeTablero.titulo,
                orden: activeTablero.orden,
                descripcion: activeTablero.descripcion,
                fecha_inicio: activeTablero.fecha_inicio,
                fecha_final: activeTablero.fecha_final,
                archivo: ''
               
            }
            setFormValues(valores)
        }
     }, [activeTablero, setFormValues])

    const closeModal = () => {

        dispatch(openCloseModalTablero(false));
    }
    const handleImagenChange = (e) => {
        if(e.target.files[0].type === "image/png" || e.target.files[0].type === "image/jpeg"){
            setmiImagen(e.target.files[0]);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe elegir un archivo de tipo JPEG o PNG',
                footer: '<span>No se cargará el archivo</span>'
              })
        }
        // setSelectedFile(e.target.files[0]);
    }
    const handleInputChange = ({ target }) => {
        if(target.name === "fecha_inicio" || target.name === "fecha_final"){
            if(target.value >= moment(fecha).format('YYYY-MM-DD')){
                setFormValues({
                    ...formValues,
                    [target.name]: target.value
                });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debe elegir una fecha correcta'
                  })
            }
        }else{
            setFormValues({
                ...formValues,
                [target.name]: target.value
            });
        }
        
    }

    const handleGuardar = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("titulo", titulo);
        formData.append("activo", 1);
        formData.append("descripcion", descripcion);
        formData.append("tipo", 1);
        formData.append("orden", orden);
        formData.append("fecha_inicio", fecha_inicio);
        formData.append("fecha_final", fecha_final);
        formData.append("archivo", miImagen);
        formData.append("usuario", uid);
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
                            <h4 className="card-title">Configuracion de anuncio</h4>
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
                                        <div 
                                        className="form-group">
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
                                    <label className="col-md-3 col-form-label">Orden</label>
                                    <div className="col-md-3">
                                        <div className="">
                                            <input type="number"
                                                className="form-control"
                                                name='orden'
                                                value={orden}
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


