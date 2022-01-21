import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {  guardarArchivoConfiguracion, openModalFormularioArchivos } from '../../actions/repositorio';

const initialState = {
    id: 0,
    descripcion: '',
    id_tipo: null,
    consecutivo: 0

}
export const ConfiguracionArchivoSub = () => {
    // const dispatch = useDispatch();
    const { modalFormularioArchivo } = useSelector(state => state.repo);
    const id_subcategoria = useSelector(state => state.repo.subcategoriaActiva.id);
    const dispatch = useDispatch();
    const [formValues, setformValues] = useState(initialState);
    const [miArchivo, setmiArchivo] = useState();
    const {tipos} = useSelector(state => state.repo.auxiliaresFormArchivos)
    const {depas} = useSelector(state => state.repo.auxiliaresFormArchivos)
    const {activeArchivo} = useSelector(state => state.repo)

    const { id, consecutivo = 0, descripcion = '', id_tipo = 0, id_departamento= 0,  archivo = ''} = formValues;

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
        if(activeArchivo != null){
            setformValues(activeArchivo)
        }
     }, [activeArchivo, setformValues])
    const handleImagenChange = (e) => {
        console.log(e.target.files[0]);
        setmiArchivo(e.target.files[0]);
        
        // setSelectedFile(e.target.files[0]);
    }
    // const [dateStart, setDateStart] = useState(now.toDate())
    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleGuardar = (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append("id_subcategoria", id_subcategoria);
        formData.append("descripcion", descripcion);
        formData.append("consecutivo", consecutivo);
        formData.append("nombre", '');
        formData.append("resumen", '');
        formData.append("id_tipo", id_tipo);
        formData.append("id_departamento", id_departamento);
        formData.append("archivo", miArchivo);
        formData.append("usuario", 1);
        formData.append("id", id);
        
        dispatch(guardarArchivoConfiguracion(formData, id));
        setformValues(initialState);
    }


    const closeModal = () => {
        dispatch(openModalFormularioArchivos(false, {}))
        console.log('cerrando')
    }
    Modal.setAppElement('#root');
    return (
        <Modal
            isOpen={modalFormularioArchivo}
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
                            <h4 className="card-title">Configuracion de archivo</h4>
                        </div>
                        <form className="form-horizontal" onSubmit={handleGuardar}>
                            <div className="card-body">
                                <div className="row">
                                    <label className="col-md-3 col-form-label">Descripcion</label>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                name='descripcion'
                                                value={descripcion}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-3 col-form-label">Tipo de documento</label>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <select className="form-control"
                                                id="exampleFormControlSelect1"
                                                value={id_tipo == null ? '' : id_tipo}
                                                name="id_tipo"
                                                onChange={handleInputChange}>
                                                <option value="">Seleccione un tipo de documento</option>
                                                {
                                                    // console.log(auxiliaresFormArchivos.tipos)
                                                    (tipos !== undefined ) &&
                                                        tipos.map((aux) => (
                                                            <option key={aux.id_tipo} value={aux.id_tipo}>{aux.tipo_completo}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <label className="col-md-2 col-form-label">Consecutivo</label>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <input type="number"
                                                className="form-control"
                                                name='consecutivo'
                                                value={consecutivo}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-3 col-form-label">Área al que pertenece</label>
                                    <div className="col-md-9">
                                        <div className="form-group">
                                            <select className="form-control"
                                                id="exampleFormControlSelect1"
                                                value={id_departamento == null ? '' : id_departamento}
                                                name="id_departamento"
                                                onChange={handleInputChange}>
                                                <option value="">Seleccione un área</option>
                                                {
                                                    // console.log(auxiliaresFormArchivos.tipos)
                                                    (depas !== undefined ) &&
                                                        depas.map((aux) => (
                                                            <option key={aux.id_departamento} value={aux.id_departamento}>{aux.departamento_completo}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-3 col-form-label">Seleccione un documento</label>
                                    <div className="col-md-9">
                                        <div className="">
                                            <input type="file"
                                                className="form-control pointer imagen"
                                                name='archivo'
                                                onChange={handleImagenChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className='row justify-content-around'>
                                    <button type='submit' className='btn btn-success'>Guardar</button>
                                    <button type='button' onClick={closeModal} className='btn btn-secundary'>Cerrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

