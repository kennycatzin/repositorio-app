import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {

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
                    <li >
                        <Link to="/" className="active">
                            <i className="tim-icons icon-chart-pie-36"></i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/category">
                            <i className="tim-icons icon-atom"></i>
                            <p>Categorias</p>
                        </Link>
                        
                    </li>
                </ul>
            </div>
      </div>
    )
}
