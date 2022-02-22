import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { guardarUsuario, openCloseModalUsuarios } from '../../actions/user';
import Swal from 'sweetalert2';

const initialState = {
    id: 0,
    nombre: '',
    usuario: '',
    id_rol: 0,
    tipo: ''
}
export const UsuariosModal = () => {
    const { userModal, userActive } = useSelector(state => state.usuarios);
    const { auxRoles } = useSelector(state => state.ui);

    const [formValues, setformValues] = useState(initialState);
    const { id = 0, id_rol = 0, nombre = '', usuario = '', tipo = '', password_confirmation = '', password = '' } = formValues;
    const { uid } = useSelector(state => state.auth)
    const { userActualConteo } = useSelector(state => state.usuarios)
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

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
        if (userActive !== null) {
            setformValues(userActive)
        }
    }, [userActive]);

    // const [dateStart, setDateStart] = useState(now.toDate())
    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    const closeModal = () => {

        dispatch(openCloseModalUsuarios(false));
    }
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((password === password_confirmation && password.length > 5) || password === "") {
            const obj = {
                id,
                name: nombre,
                email: '',
                password,
                password_confirmation,
                tipo,
                id_rol,
                usuario,
                id_usuario: uid
            }
            if (id === 0 && password === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese una contraseña válida',
                });
                return false;
            } else {
                dispatch(guardarUsuario(obj, userActualConteo));
                setformValues(initialState);
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinsiden o es demasiado corta',
            });
        }

    }


    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={userModal}
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
                            <h4 className="card-title">Usuario</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className='row container'>
                                    <div className="form-group col-6">
                                        <label >Nombre</label>
                                        <input type="text"
                                            className="form-control"
                                            value={nombre}
                                            name="nombre"
                                            onChange={handleInputChange}

                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        <label >Usuario</label>
                                        <input type="text"
                                            className="form-control"
                                            value={usuario}
                                            name="usuario"
                                            onChange={handleInputChange}
                                            autoComplete="off"

                                        />
                                    </div>
                                </div>
                                <div className='row container'>
                                    <div className="form-group col-6">
                                        <label>Roles</label>
                                        <select className="form-control"
                                            value={id_rol}
                                            name="id_rol"
                                            onChange={handleInputChange}
                                        >
                                            <option>Seleccione un rol</option>
                                            {
                                                (!!auxRoles) &&
                                                auxRoles.map((aux) => (
                                                    <option key={aux.id} value={aux.id}>{aux.rol}</option>
                                                ))

                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-6">
                                        <label>Tipo de usuario</label>
                                        <select className="form-control"
                                            value={tipo}
                                            name="tipo"
                                            onChange={handleInputChange}
                                        >
                                            <option>Seleccione un tipo</option>
                                            <option value="ADMIN">ADMINISTRADOR</option>
                                            <option value="USUARIO">USUARIO</option>
                                            <option value="RH">RH</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row container'>
                                    <div className="form-group col-6">
                                        <label >Contraseña</label>
                                        <div className="input-group form-group">
                                            <input className="form-control"
                                                type={values.showPassword ? "text" : "password"}
                                                placeholder="password"
                                                name="password"
                                                value={password}
                                                onChange={handleInputChange}
                                            />
                                            <div className="input-group-addon mt-2 ml-2 mr-2">
                                                <a href='#' className='text-white' onClick={handleClickShowPassword} title='ver / ocultar'
                                                >
                                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-6">
                                        <label >Confirmar contraseña</label>
                                        <div className="input-group form-group">
                                            <input className="form-control"
                                                type={values.showPassword ? "text" : "password"}
                                                placeholder="password"
                                                value={password_confirmation}
                                                name="password_confirmation"
                                                onChange={handleInputChange}
                                            />
                                            <div className="input-group-addon mt-2 ml-2 mr-2">
                                                <a href='#' className='text-white' onClick={handleClickShowPassword} title='ver / ocultar'
                                                >
                                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-fill btn-info" >Guardar</button>
                                <button onClick={closeModal} type="button" className="btn btn-fill btn-secundary">Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
