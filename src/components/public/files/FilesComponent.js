import React from 'react'
import { useDispatch } from 'react-redux';
import { setEstatusFiles } from '../../../actions/repositorio';

export const FilesComponent = ({ data }) => {
    const dispatch = useDispatch();
    const handdleVerArchivo = () => {
        dispatch(setEstatusFiles(data.id_archivo))
    }
    return (
        <div className="col-md-4 animate__animated animate__fadeIn">
            <div className="card card-user">
                <div className="author">
                    <div className="card-body text-center">
                        <div className="block block-one"></div>
                        <div className="block block-two"></div>
                        <div className="block block-three"></div>
                        <div className="block block-four"></div>
                        <img className="img-fluid w-50" src="https://icon-library.com/images/1274d94986596d5426ef6ff28712209f.png" alt="..." />
                        <p className="description">
                            {data.nombre}
                        </p>
                        <div className="card-description">
                            {data.descripcion}
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="button-container">
                            <a onClick={handdleVerArchivo} 
                                className="btn btn-icon btn-success btn-round btn-facebook" 
                                target="_blank" 
                                href={data.url}
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-eye"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
