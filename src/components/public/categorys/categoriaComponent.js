import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { repoSetFolderActive } from '../../../actions/repositorio';

export const CategoriaComponent = ({categoria}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(repoSetFolderActive(categoria));
    }
    // TODO: poner el nombre de la categoria y subcategoria en el titulo
    return (
        <div key={categoria.id} className="col-md-3 animate__animated animate__fadeIn">
            <div className="card card-user ">
                <div className="card-body text-center">
                    <Link onClick={handleClick} to="/subcategorie">
                        <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-10.jpg" alt="..." />
                    </Link>
                    <p className="card-title">
                        {
                            categoria.titulo
                        }
                    </p>
                    <p className="text-muted">
                        {
                            categoria.descripcion
                        }
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
