import React from 'react'
import { useSelector } from 'react-redux'
import { TableFiles } from './TableFiles'

export const PendientesComponent = () => {
    const { nombreEstatus } = useSelector(state => state.tablero)
    return (
        <>
            <div className="row d-flex justify-content-around">
                <div className="col-lg-9 col-md-12">
                    <div className="card card-tasks">
                        <div className="card-header ">
                            <h6 className="title d-inline">{(!!nombreEstatus)? nombreEstatus : 'No ha seleccionado alguna tarjeta'}</h6>
                        </div>
                        <div className="card-body ">
                            <div className="table-full-width table-responsive">
                                <TableFiles/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
