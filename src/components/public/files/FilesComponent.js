import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEstatusFiles } from '../../../actions/repositorio';

export const FilesComponent = ({ data }) => {
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth)
    const handdleVerArchivo = () => {
        dispatch(setEstatusFiles(data.id_archivo, uid))
    }
    return (
        <a className="col-md-2 animate__animated animate__fadeIn pointer"
            onClick={handdleVerArchivo}
            target="_blank"
            href={data.url}
            rel="noopener noreferrer"
        >
            <div className="card card-user">
                <div className="author">
                    <div className="card-body text-center">
                       
                        <img className="img-fluid w-50" src="https://icon-library.com/images/1274d94986596d5426ef6ff28712209f.png" alt="..." />
                        <p className="text-white mt-2">
                            {data.nombre}
                        </p>
                        <p className="text-white">
                            {data.descripcion}
                        </p>
                    </div>

                </div>
            </div>
        </a>
    )
}
