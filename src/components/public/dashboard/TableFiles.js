import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataDashboard } from '../../../actions/dashboard';
import { setEstatusFiles } from '../../../actions/repositorio'

export const TableFiles = () => {
    const { archivos } = useSelector(state => state.tablero);
    const { uid } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const handdleVerArchivo = (data) => {
        dispatch(setEstatusFiles(data.id, uid));
        dispatch(getDataDashboard(uid));
    }
    return (
        <>
            <table className="table">
                <tbody>
                    {
                        (!!archivos) &&
                            archivos.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <p className="title">{item.nombre}</p>
                                        <p className="text-muted">{item.descripcion}</p>
                                    </td>
                                    <td>
                                        <p className="text-muted">{item.categoria} / {item.subcategoria}</p>
                                       
                                    </td>
                                    <td className="td-actions text-right">
                                        <a type="button" rel="tooltip" title="" 
                                            className="btn btn-link" 
                                            data-original-title="Edit Task" 
                                            title='Abrir archivo'
                                            target="_blank" 
                                            href={item.url}
                                            rel="noopener noreferrer"
                                            onClick={() => handdleVerArchivo(item)}
                                            >
                                            <i className="tim-icons icon-link-72 text-primary"></i>
                                        </a>
                                    </td>
                                </tr>
                            ))                               
                    }

                </tbody>
            </table>
        </>
    )
}


