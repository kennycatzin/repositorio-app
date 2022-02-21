import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import './auth.css';
import { useDispatch } from 'react-redux'
import { startLoginEmailPAssword } from '../../actions/actions';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
export const LoginScreen = () => {
    // dar acceso al dispatch
    const { loading } = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = formValues;
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPAssword(email, password))
        console.log(email, password);

    }
    return (
        <div className="contenedor">
            <div className="miContenedor">
                <div className="d-flex justify-content-center h-100">
                    <div className="tarjeta card">
                        <div className="card-header">
                            <h3 className='text-success'>Ingreso</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><img width="40%" className="img-fluid float-right mt-5" src="https://afavor.mx/wp-content/uploads/2021/09/a-favor-logo-4-300x73.png" alt="logo" /></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="username"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                    />

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text color-primary"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input className="form-control"
                                        type={values.showPassword ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        value={password}
                                        onChange={handleInputChange}
                                    />
                                    <div className="input-group-addon mt-2 ml-2 mr-2">
                                        <a className='pointer' onClick={handleClickShowPassword} title='ver / ocultar'
                                        >
                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                <br />

                                <div className="form-group col-auto text-center">
                                    <input
                                        type="submit"
                                        value="Login"
                                        className="btn btn-info btn-block"
                                        disabled={loading}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                <Link to="/register"> ¿Aún no tienes una cuenta? Regístrate</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
