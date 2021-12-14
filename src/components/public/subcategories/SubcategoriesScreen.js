import React from 'react'
import { Link } from 'react-router-dom'

export const SubcategoriesScreen = () => {
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/category">Categoria</Link>
                    </li>
                    <li className="breadcrumb-item active">Subcategorias</li>
                </ol>

            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-user">
                        <div className="card-body text-center">
                            <Link to="/files">
                                <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-4.jpg" alt="..." />
                            </Link>
                            <p className="description">
                                A favor
                            </p>
                            <div className="card-description">
                                Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-user">
                        <div className="card-body text-center">
                            <Link to="/files">
                                <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-4.jpg" alt="..." />
                            </Link>                            <p className="description">
                                Descriptivos
                            </p>
                            <div className="card-description">
                                Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-user">
                        <div className="card-body text-center">
                            <Link to="/files">
                                <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-4.jpg" alt="..." />
                            </Link>                            <p className="description">
                                Procedimientos
                            </p>
                            <div className="card-description">
                                Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-user">
                        <div className="card-body text-center">
                            <Link to="/files">
                                <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-4.jpg" alt="..." />
                            </Link>                            <p className="description">
                                Responsivas
                            </p>
                            <div className="card-description">
                                Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
