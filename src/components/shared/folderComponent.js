import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { repoSetFolderActive, setSubFolderActive } from '../../actions/repositorio'

export const FolderComponent = ({categoria, tipo}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if(tipo === 2){
            console.log('Aqui hago la funcion para buiscar')
            console.log(categoria);

            dispatch(setSubFolderActive(categoria));
            console.log('Se debio guardar en el state')
        }else{
            dispatch(repoSetFolderActive(categoria));

                    }
    }
    // TODO: poner el nombre de la categoria y subcategoria en el titulo
    return (
        <div className="col-md-4 animate__animated animate__fadeIn">
            <div className="card card-user ">
                <div className="card-body text-center">
                    <Link onClick={handleClick} to={tipo === 1 ? "/subcategorie": "/files"}>
                        <img className="img-fluid w-50" src={tipo === 1 ? "https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-10.jpg":
                                                            "https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-4.jpg"} alt="..." />
                    </Link>
                    <p className="card-title">
                        {
                            categoria.titulo
                        }
                    </p>
                    <div className="card-description">
                        {
                            categoria.descripcion
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
