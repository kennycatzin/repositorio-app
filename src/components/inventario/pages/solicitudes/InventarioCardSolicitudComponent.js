import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveSolicitud } from '../../../../actions/solicitud';

export default function InventarioCardSolicaitudComponent({data}) {
    const dispatch = useDispatch();
    const handleSelect = (item)=> {
        console.log(item)
        dispatch(setActiveSolicitud(item));
    }
    
    return (
        <div  className='col-lg-12 rounded pointer animate__animated animate__fadeInUp '>
            <div className="card bg-gris " onClick={()=> handleSelect(data)}>
                <div className="card-body ">
                    <div className='row mb-3'>
                        <div className='col-5'>
                            <div className="bg-dark text-info btn-circle w-100">
                                <span>{data.tipo}</span>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className="bg-dark text-white btn-circle w-100">
                                <span>{data.estatus}</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <div className="bg-info btn-circle">
                                <i className="tim-icons icon-settings text-white"></i>
                            </div>
                        </div>
                        <div className='col-10 mt-1'>
                            <h4 className='text-dark'>{data.nombre_usuario}<br />
                                <small className='text-info'>{data.fecha}</small>
                            </h4>
                            <hr />
                        </div>
                    </div>
                    <span className='float-right'>Hace {data.dias} días</span>
                </div>
            </div>
        </div>
    )
}
