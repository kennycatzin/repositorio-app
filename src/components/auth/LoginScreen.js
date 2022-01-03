import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import './auth.css';
import { useDispatch } from 'react-redux'
import { startLoginEmailPAssword } from '../../actions/actions';
import { useSelector } from 'react-redux';
export const LoginScreen = () => {
    // dar acceso al dispatch
    const { loading } = useSelector( state => state.ui );
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: 'kenny.catzin',
        password: '123456'
    });
    const {email, password} = formValues;
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
                            <h3>Ingreso</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><img width="40%" className="img-fluid float-right mt-5" src="https://afavor.mx/wp-content/uploads/2021/09/a-favor-logo-4-300x73.png" alt="logo"/></span>
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
                                    <input type="password" 
                                            className="form-control" 
                                            placeholder="password"
                                            name="password" 
                                            value={password} 
                                            onChange={handleInputChange}
                                    />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox"/>Recuérdame
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="submit" 
                                        value="Login" 
                                        className="btn btn-success float-right"
                                        disabled = {loading}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                ¿Aún no tienes una cuenta?<Link to="/register">Regístrate</Link>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link to="#">¿No recuerdas la contraseña?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
