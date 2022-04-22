import React from 'react'
import { useDispatch } from 'react-redux'
import { openCloseModal } from '../../../actions/solicitud';
import { EquipoAgregarModal } from './EquipoAgregarModal'

export const EquipoCardComponent = ({ data }) => {
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(openCloseModal(item, true));

        console.log(item)

    }
    return (
        <div className='col-lg-12 rounded bomba mt-4'>
            {
                data?.map((item) => (
                    <div className="card bg-gris " key={item.id_asignacion}>
                        <div className="card-body ">
                            <div className='row'>
                                <div className='col-2'>
                                    <div className="bg-info btn-circle">
                                        <i className="tim-icons icon-laptop text-white"></i>
                                    </div>
                                </div>
                                <div className='col-10 mt-1'>
                                    <h4 className='text-dark'>{item.tipo_equipo} / {item.marca}<br />
                                        <small className='text-info'>NS- {item.numero_serie}</small>
                                        <small className='text-info ml-3'>M- {item.modelo}</small>
                                    </h4>
                                </div>
                            </div>
                            <div className='row mx-auto'>
                                <div className="bg-dark text-danger btn-circle w-100 col-4">
                                    <span>{item.estatus}</span>
                                </div>
                                <div className='col-8'>

                                    <button onClick={() => handleClick(item)} type="button" rel="tooltip" className="btn btn-warning btn-sm float-right" title="Agregar">
                                        <i className="tim-icons icon-upload"></i>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                ))
            }
            <EquipoAgregarModal tipo={2} />
        </div>
    )
}
