import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import './auth.css';
import isEmail from 'validator/lib/isEmail';
import { useDispatch, useSelector } from 'react-redux';
import { uiError } from '../../actions/ui';
import { register } from '../../actions/actions';
import Swal from 'sweetalert2';

export const RegisterScreen = () => {
    const { loading } = useSelector( state => state.ui );

    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
            nombre: '',
            usuario: '',
            correo: 'correo@correo.com',
            password: '',
            confirm_password: ''
    });
    const {nombre, correo, password, usuario} = formValues;
    let navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
       if(isFormValid()){
            console.log('ya se debio disparar');
            dispatch(register(usuario, correo, password, nombre));
            
            navigate("/login", {replace: true});

        }else{
            console.log('no se dispararon las acciones')
        }
    }
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const isFormValid = () => {
        if(nombre.trim().length === 0){
            dispatch(uiError('El nombre es requerido'));
            Swal.fire('El nombre es requerido')

            return false;
        }else if(usuario.trim().length === 0){
            dispatch(uiError('El usuario es requerido'));
            console.log('usuario incorrecto');
            Swal.fire('El usuario es requerido')

            return false;
        }else if(!isEmail(correo)){
            dispatch(uiError('El correo es inválido'));
            console.log('correo incorrecto');
            return false;
        }else if(password.trim().length < 3){
            dispatch(uiError('El password debe ser más de 3 carteres'));
            console.log('password incorrecto');
            Swal.fire('El password debe ser más de 3 carteres')

            return false
        }

        return true;
    }
    return (
        <div className="contenedor">
        <div className="miContenedor">
            <div className="d-flex justify-content-center h-100">
                <div className="card tarjeta">
                    <div className="card-header">
                        <h3 className='text-success'>Registro</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><img width="40%" className="img-fluid float-right mt-5" src="https://afavor.mx/wp-content/uploads/2021/09/a-favor-logo-4-300x73.png"  alt="logo"/></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {/* <div className="alert alert-danger" role="alert">
                               Ha ocurrido un error en el registro del usuario
                            </div> */}
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-address-card"></i></span>
                                </div>
                                <input type="text" 
                                        className="form-control" 
                                        placeholder="Nombre completo"
                                        value={nombre}
                                        name="nombre"
                                        onChange={handleInputChange}                              
                                />
                            </div>
                            
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Usuario"
                                    value={usuario}
                                    name="usuario"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input 
                                    className="form-control"
                                    type={values.showPassword ? "text" : "password"}                                         
                                    placeholder="Contraseña"
                                    value={password}
                                    name="password"
                                    onChange={handleInputChange}
                                />
                                 <div className="input-group-addon mt-2 ml-2 mr-2">
                                        <a className='pointer' onClick={handleClickShowPassword} title='ver / ocultar'
                                        >
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                        </a>
                                    </div>
                            </div>
                           <br/>
                            <div className="form-group col-auto text-center">
                                <input 
                                    type="submit" 
                                    value="Registro" 
                                    className="btn btn-info btn-block"
                                    disabled = {loading}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            <Link to="/login">¿Ya tienes una cuenta? Ingresa</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
