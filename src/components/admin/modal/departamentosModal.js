import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarDepartamento, openCloseModalDepartamentos } from '../../../actions/departamentos';
import Swal from 'sweetalert2'
import validator from 'validator';

const initialState = {
    id: 0,
    departamento: '',
    descripcion: '',
    nombre_corto: '',
    correo: '',
    usuario: 1

}
export const DepartamentosModal = () => {
    const { depaModal, depaActive } = useSelector(state => state.departamentos);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialState);
    const { id = 0, departamento = '', descripcion = '', nombre_corto = '', correo = ''} = formValues;
    const {uid} = useSelector(state => state.auth)

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
    useEffect(() => {
        (!!depaActive)&&
            setFormValues(depaActive)
     }, [depaActive, setFormValues]);
    const closeModal = () => {
        
        dispatch(openCloseModalDepartamentos(false));        

    }
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();      
        let pasa = email(correo);
        if(pasa){        
            const objSave = {
                id,
                departamento,
                descripcion,
                nombre_corto,
                correo,
                usuario: uid
            }
            dispatch(guardarDepartamento(objSave));
            // dispatch();
            closeModal();
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo no válido',
                footer: '<span>Debe contener @ y dominio (correo@dominio.com)</span>'
              })
        }
    }
    const email = (value) => {
        if (!validator.isEmail(value)) {
          return false;
        }
        return true;
      };

    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={depaModal}
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
                    <div className="card estatus">
                        <div className="card-header">
                            <h4 className="card-title">Departamentos</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Departamento</label>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={departamento}
                                                name="departamento"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <label className="col-md-2 col-form-label">Nombre Corto</label>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={nombre_corto}
                                                name="nombre_corto"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <label className="col-md-2 col-form-label">Correo</label>
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={correo}
                                                name="correo"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <label className="col-md-2 col-form-label">Descripcion</label>
                                    <div className="col-md-10">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control"
                                                value={descripcion}
                                                name="descripcion"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
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