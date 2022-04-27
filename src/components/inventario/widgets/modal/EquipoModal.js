import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { guardarEquipo, openCloseModalEquipos } from '../../../../actions/equipo';

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
const initialState = {
    id: 0, 
    id_tipo_equipo: '',
    descripcion: '', 
    usuario: 1,
    id_marca: 0, 
    numero_serie: '', 
    modelo: '',
    id_licencia_office: 0, 
    id_licencia_windows: 0,
    nombre_equipo: '', 
    ram: '', 
    procesador: '',
    licencia_windows: '',
    licencia_office: ''
}
export const EquipoModal = () => {
    const [formValues, setFormValues] = useState(initialState);
    const { id = 0, id_tipo_equipo = '',
        descripcion = '', usuario = 1,
        id_marca = 0, numero_serie = '', modelo = '',
        id_licencia_office = 0, id_licencia_windows = 0,
        nombre_equipo = '', ram = '', procesador= '', licencia_windows = '', licencia_office = '' } = formValues;
    const { uid } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    let { equipoActive, equipoModal, tipoObj, tipo_equipos, marcas, lOffice, lWindows, equipos_computadora } = useSelector(state => state.equipo)
    const handleInputChange = ({ target }) => {
        console.log(target.value)
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    useEffect(() => {
        (!!equipoActive) &&
            setFormValues(equipoActive)
    }, [equipoActive, setFormValues, tipoObj]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const objSave = {
            id,
            tipo: 'OTROS',
            id_tipo_equipo,
            id_marca,
            numero_serie,
            modelo,
            id_licencia_office,
            id_licencia_windows,
            nombre_equipo,
            ram,
            procesador,
            descripcion,
            usuario: uid
        }
        console.log(objSave)
        dispatch(guardarEquipo(objSave));
        setFormValues(initialState);
        closeModal();
    }
    const closeModal = () => {
        dispatch(openCloseModalEquipos(false, equipoActive));
    }
    return (
        <Modal
            isOpen={equipoModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
            ariaHideApp={false}
            closeModal
        >
            <div className="scroll-component">
                <div className="scroll-content">
                    <div className="card estatus">
                        <div className="card-header">
                            <h4 className="card-title">Equipos</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Descripción</label>
                                    <input type="text"
                                        className="form-control"
                                        value={descripcion}
                                        name="descripcion"
                                        onChange={handleInputChange}

                                    />
                                </div>
                                <div className='row'>
                                    <div className="form-group col-6">
                                        <label >Tipo de equipo</label>
                                        <select className="form-control"
                                            value={id_tipo_equipo}
                                            name="id_tipo_equipo"
                                            onChange={handleInputChange}
                                        >
                                            <option>Seleccione un tipo de equipo</option>
                                            {
                                                (tipoObj == 'PC' || tipoObj == "LAPTOP") ?
                                                
                                                (!!equipos_computadora) &&
                                                equipos_computadora.map((aux) => (
                                                    <option key={aux.id_tipo_equipo} value={aux.id_tipo_equipo}>{aux.tipo_equipo}</option>
                                                ))
                                                :
                                                (!!tipo_equipos) &&
                                                tipo_equipos.map((aux) => (
                                                    <option key={aux.id_tipo_equipo} value={aux.id_tipo_equipo}>{aux.tipo_equipo}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-6">
                                        <label >Marca</label>
                                        <select className="form-control"
                                            value={id_marca}
                                            name="id_marca"
                                            onChange={handleInputChange}
                                        >
                                            <option>Búsqueda por tipo de equipo</option>
                                            {
                                                (!!marcas) &&
                                                marcas.map((aux) => (
                                                    <option key={aux.id_marca} value={aux.id_marca}>{aux.marca}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="form-group col-6">
                                        <label >Número de serie</label>
                                        <input type="text"
                                            className="form-control"
                                            value={numero_serie}
                                            name="numero_serie"
                                            onChange={handleInputChange}

                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        <label >Modelo</label>
                                        <input type="text"
                                            className="form-control"
                                            value={modelo}
                                            name="modelo"
                                            onChange={handleInputChange}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                {
                                    (tipoObj == 'PC' || tipoObj == "LAPTOP") &&
                                    (
                                        <div>
                                            <div className='row'>
                                                <div className="form-group col-6">
                                                    <label >Licencia Office</label>
                                                    <select className="form-control"
                                                        value={id_licencia_office}
                                                        name="id_licencia_office"
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="0" >Seleccione una licencia office</option>
                                                        {
                                                            (lOffice !== undefined) &&
                                                            lOffice.map((aux) => (
                                                                <option key={aux.id_licencia_office} value={aux.id_licencia_office}>{aux.licencia}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-group col-6">
                                                    <label >Licencia Windows</label>
                                                    <select className="form-control"
                                                        value={id_licencia_windows}
                                                        name="id_licencia_windows"
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="0">Seleccione una licencia windows</option>
                                                        {
                                                            (lWindows !== undefined) &&
                                                            lWindows.map((aux) => (
                                                                <option key={aux.id_licencia_windows} value={aux.id_licencia_windows}>{aux.licencia}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="form-group col-4">
                                                    <label >Nombre equipo</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={nombre_equipo}
                                                        name="nombre_equipo"
                                                        onChange={handleInputChange}

                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label >Ram</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={ram}
                                                        name="ram"
                                                        onChange={handleInputChange}
                                                        autoComplete="off"
                                                    />
                                                </div>
                                                <div className="form-group col-4">
                                                    <label >Procesador</label>
                                                    <input type="text"
                                                        className="form-control"
                                                        value={procesador}
                                                        name="procesador"
                                                        onChange={handleInputChange}
                                                        autoComplete="off"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }




                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-fill btn-info">Guardar</button>
                                <button onClick={closeModal} type="button" className="btn btn-fill btn-secundary" >Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
