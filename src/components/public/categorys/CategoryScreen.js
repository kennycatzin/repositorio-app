import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryScreen = () => {
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item active">Categorias</li>
                </ol>
               
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-user">
                        <div className="card-body text-center">
                            <Link to="/subcategorie">
                                <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-10.jpg" alt="..." />
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
                            <Link to="/subcategorie">
                                <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-10.jpg" alt="..." />
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
                            <Link to="/subcategorie">
                                <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-10.jpg" alt="..." />
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
                            <Link to="/subcategorie">
                                <img className="img-fluid w-50" src="https://icon-library.com/images/file-folder-icon-png/file-folder-icon-png-10.jpg" alt="..." />
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
