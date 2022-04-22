import React from 'react'
import { useSelector } from 'react-redux'
import { TableFiles } from './TableFiles'

export const PendientesComponent = () => {
    const { nombreEstatus } = useSelector(state => state.tablero)
    return (
        <>
            <div className="row d-flex justify-content-around">
                <div className="col-lg-12 col-md-12">
                    <div className="card card-tasks">
                        <div className="card-header">
                            <h6 className="title d-inline">{(!!nombreEstatus)? nombreEstatus : 'No ha seleccionado alguna tarjeta'}</h6>
                        </div>
                        <div className="card-body card-tasks">
                            <div className="table-full-width table-responsive">
                                <TableFiles/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-12">
                    <div className="card card-tasks">
                        <div className="card-header mb-2">
                            <h6 className="title d-inline">Inventario</h6>
                        </div>
                        
                        <div className="container">
                            <div className="col-12 animate__animated animate__bounceInLeft"
                            >
                                <div className="card-counter primary">
                                    <i className="fa fa-laptop w-100"></i>
                                    <span className="count-numbers">3</span>
                                    <span className="count-name">Equipos</span>
                                </div>
                            </div>
                            <br/>
                            <div className="col-12 animate__animated animate__bounceInLeft"
                            >
                                <div className="card-counter pink">
                                    <i className="fa fa-cube w-100"></i>
                                    <span className="count-numbers">3</span>
                                    <span className="count-name">Solicitudes</span>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div> */}
            </div>
        </>
    )
}
