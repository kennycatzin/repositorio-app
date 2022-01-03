import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    const {tipo} = useSelector(state => state.auth)
    return (
        <div className="sidebar" data="blue">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <Link to="/" className="simple-text logo-mini">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </Link>
                    <Link to="/" className="simple-text logo-normal">
                        Repositorio
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
                    {
                        tipo ==='ADMIN' ?
                            <li>
                                <Link to="/asignacion">
                                    <i className="tim-icons icon-badge"></i>
                                    <p className='h5 text-white'>Asignaciones</p>
                                </Link>
                            </li>: null
                    }
                    {
                        tipo ==='ADMIN' ?
                            <li>
                                <Link to="/configuraciones">
                                    <i className="tim-icons icon-settings"></i>
                                    <p className='h5 text-white'>Configuraciones</p>
                                </Link>
                            </li>: null
                    }
                    
                </ul>
            </div>
        </div>
    )
}
