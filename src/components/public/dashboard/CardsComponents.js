import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getListaArchivos } from '../../../actions/dashboard';

export const CardsComponents = ({data}) => {
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);   
    const handleClick = (obj) => {
        dispatch(getListaArchivos(uid, obj.id, obj.nombre));
    }
    return (
        <>
            <div className="col-md-4 animate__animated 
                            animate__bounceInLeft 
                            "
                
            >
                <div className="card-counter info">
                    <i className="fa fa-window-restore"></i>
                    <span className="count-numbers">{data.totales}</span>
                    <span className="count-name">Totales</span>
                </div>
            </div>


            <div className="col-md-4 animate__animated 
                            animate__bounceInLeft 
                            pointer"
                onClick={() => handleClick({id: 4, nombre: 'Pendientes'})}
            >                <div className="card-counter danger">
                    <i className="fa fa-exclamation-triangle"></i>
                    <span className="count-numbers">{data.nuevos}</span>
                    <span className="count-name">Pendientes</span>
                </div>
            </div>

            <div className="col-md-4 animate__animated 
                            animate__bounceInLeft 
                            pointer"
                onClick={() => handleClick({id: 3, nombre: 'Cumplidos'})}
            >                <div className="card-counter success">
                    <i className="fa fa-tasks"></i>
                    <span className="count-numbers">{data.leidos}</span>
                    <span className="count-name">Cumplidos</span>
                </div>
            </div>
        </>
    )
}
