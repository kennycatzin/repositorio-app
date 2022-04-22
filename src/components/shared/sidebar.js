import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    const { tipo } = useSelector(state => state.auth)
    return (
        <div className="sidebar" data="blue">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <Link to="/" className="simple-text logo-mini">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </Link>
                    <Link to="/" className="simple-text logo-normal text-left">
                        Menú
                    </Link>
                </div>
                <ul className="nav">
                    <li>
                        <Link to="/" className="active">
                            <i className="tim-icons icon-chart-pie-36"></i>
                            <p className='h5 text-white'>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/category">
                            <i className="tim-icons icon-paper"></i>
                            <p className='h5 text-white'>Repositorio</p>
                        </Link>
                    </li>                   
                    <li>
                        <a data-toggle="collapse" href="#pagesExamples" className="" aria-expanded="false">
                        <i className="tim-icons icon-tv-2"></i>
                            <p className='h5 text-white'>
                                Equipo
                                <b className="caret"></b>
                            </p>
                        </a>
                        <div className="collapse" id="pagesExamples" >
                            <ul className="nav">
                            <li>
                                    <Link to="/soli-usuario">
                                        <span className="sidebar-mini-icon">S</span>
                                        <span className="sidebar-normal"> Solicitudes </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/solicitar-equipo">
                                        <span className="sidebar-mini-icon">SE</span>
                                        <span className="sidebar-normal"> Solicitar equipo </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/equipo">
                                        <span className="sidebar-mini-icon">EE</span>
                                        <span className="sidebar-normal"> Enviar equipo </span>
                                    </Link>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </li>
                    {
                        tipo === 'ADMIN' ?
                            <li>
                                <Link to="/asignacion">
                                    <i className="tim-icons icon-badge"></i>
                                    <p className='h5 text-white'>Asignaciones</p>
                                </Link>
                            </li>


                            : null
                    }
                    {
                        tipo === 'ADMIN' ?
                            <li>
                                <Link to="/configuraciones">
                                    <i className="tim-icons icon-settings"></i>
                                    <p className='h5 text-white'>Configuraciones</p>
                                </Link>
                            </li> : null
                    }

                    {
                        tipo === 'ADMIN' || tipo === 'INVENTARIO' ?
                            <li>
                                <Link to="/menu-inventario">
                                    <i className="tim-icons icon-laptop"></i>
                                    <p className='h5 text-white'>INVENTARIO</p>
                                </Link>
                            </li> : null
                    }
                    {
                        tipo === 'ADMIN' ?
                            <li>
                                <Link to="/precio_metal">
                                    <i className="tim-icons icon-money-coins"></i>
                                    <p className='h5 text-white'>Precio metal</p>
                                </Link>
                            </li> : null
                    }
                </ul>
            </div>
        </div>
    )
}
