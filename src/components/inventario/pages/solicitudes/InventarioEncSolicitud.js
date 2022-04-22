import React from 'react'
import {  useSelector } from 'react-redux'
import InventarioCardSolicitudComponent from './InventarioCardSolicitudComponent'

export const InventarioEncSolicitud = () => {
    const { listSolicitudes } = useSelector(state => state.solicitud);


    return (
        <div className=" bomba mt-4">
            <div className="">
                {
                    listSolicitudes?.map((item) => (
                        <InventarioCardSolicitudComponent key={item.id} data={item}/>
                    ))
                }
            </div>
        </div>
    )
}
