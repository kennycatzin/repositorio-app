import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import './auth.css';
import isEmail from 'validator/lib/isEmail';
import { useDispatch, useSelector } from 'react-redux';
import { uiError } from '../../actions/ui';
import { register } from '../../actions/actions';

export const RegisterScreen = () => {
    const { loading } = useSelector( state => state.ui );

    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
            nombre: 'Kenny Catzin',
            correo: 'kenn2506@gmail.com',
            password: '123456',
            confirm_password: '123456'
    });
    const {nombre, correo, password} = formValues;
    const handleSubmit = (e) =>{
        e.preventDefault();
       if(isFormValid()){
            console.log('ya se debio disparar');
            dispatch(register(correo, password, nombre));
        }else{
            console.log('no se dispararon las acciones')
        }
    }
    const isFormValid = () => {
        if(nombre.trim().length === 0){
            dispatch(uiError('El nombre es requerido'));
            return false;
        }else if(!isEmail(correo)){
            dispatch(uiError('El correo es inválido'));
            console.log('correo incorrecto');
            return false;
        }else if(password.trim().length < 3){
            dispatch(uiError('El password debe ser más de 3 carteres'));
            console.log('password incorrecto');
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
                        <h3>Registro</h3>
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
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
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
                                    placeholder="Correo"
                                    value={correo}
                                    name="correo"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Contraseña"
                                    value={password}
                                    name="password"
                                    onChange={handleInputChange}
                                />
                            </div>
                           
                            <div className="form-group">
                                <input 
                                    type="submit" 
                                    value="Registro" 
                                    className="btn btn-success float-right"
                                    disabled = {loading}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            ¿Ya tienes una cuenta?<Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
