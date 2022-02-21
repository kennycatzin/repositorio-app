import React from 'react'
import { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { getAuxFormularioArchivo, openModalArchivo, openModalFormularioArchivos } from '../../actions/repositorio';
import { TableConfArchivos } from '../admin/widgets/tables/TableConfArchivos';
import {ConfiguracionArchivoSub} from './configuracionArchivosSub';
import { DetalleArchivoModal } from './detalleArchivoModal';

export const ArchivoModal = () => {
    // const dispatch = useDispatch();
    const { modalArchivo } = useSelector(state => state.repo);
    const misArchivos = useSelector(state => state.repo.subcategoriaActiva.archivos);
    const {titulo} = useSelector(state => state.repo.subcategoriaActiva);
    const objCategoria = useSelector(state => state.repo.activeCategoria);

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
    useEffect(() => {
        dispatch(getAuxFormularioArchivo());
    }, [dispatch])
    // const [dateStart, setDateStart] = useState(now.toDate())


    const cabeceras = [
        "",
        "Documento",
        "Descripcion",
    ];

    const handleAgregar = () => {
        dispatch(openModalFormularioArchivos(true, {}));
    }

    const closeModal = () => {
        dispatch(openModalArchivo(false, {}))
        console.log('cerrando')
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
                        <div className="card-header">
                            <div className="card-header d-flex justify-content-between">
    
                                <h4 className="card-title d-inline">Listado de archivos configurados</h4>
                                
                                <button onClick={handleAgregar} type="button" className="btn btn-success btn-circle btn-lg" title='Agregar nuevos archivos'>
                                    <i className="fa fa-plus"></i>
                                </button>
                                
                            </div>                        
                        </div>
                        <div className='container text-center'>
                            <h4 className="card-subtitle text-primary">{objCategoria.titulo} / {titulo} </h4>
                        </div>
                        <br/>

                        <div className='contenido'>
                        <div className="scroll-component">
                <div className="scroll-content">
                        <div className='container'>
                            {
                                (misArchivos !== undefined) ?
                                    <TableConfArchivos cabeceras={cabeceras} data={misArchivos} />
                                    : <h5>Cargando...</h5>

                            }
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <button onClick={closeModal} className='btn btn-secundary btn-block'>Cerrar</button>
            </div>
            <ConfiguracionArchivoSub/>
            <DetalleArchivoModal/>                
        </Modal>
    )
}
