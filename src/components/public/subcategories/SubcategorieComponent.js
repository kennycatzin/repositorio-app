import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSubFolderActive } from '../../../actions/repositorio';

export const SubcategorieComponent = ({subcategoria}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setSubFolderActive(subcategoria));

    }
    // TODO: poner el nombre de la categoria y subcategoria en el titulo
    return (
        <div key={subcategoria.id} className="col-md-3 animate__animated animate__fadeIn">
            <div className="card card-user ">
                <div className="card-body text-center">
                    <Link onClick={handleClick} to="/files">
                        <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-4.jpg" alt="..." />
                    </Link>
                    <p className="card-title mt-3">
                        {
                            subcategoria.titulo
                        }
                    </p>
                    <p className="text-muted">
                        {
                            subcategoria.descripcion
                        }
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
