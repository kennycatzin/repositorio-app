import React from 'react'

export const ConfRolCategoria = ({ data }) => {
    return (
        <div className="card">
            <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button className="btn btn-info btn-block collapsed" data-toggle="collapse" data-target={`#${data.clave}`} aria-expanded="false" aria-controls="collapseThree">
                        {data.titulo}
                    </button>
                </h5>
            </div>
            <div id={`${data.clave}`} className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                    <div className="col-12 row">
                        <div className="col-lg-3 col-md-6 col-sm-12 card align-items-start">
                            {
                                data.subcategorias.map(item => (
                                    <div key={item.id} className="card-body bg-light col-12">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 text-center p-3">
                                                <h6 className="card-subtitle mb-2 text-muted">{item.titulo}</h6>
                                            </div>
                                        </div>
                                        <ul className="list-group">
                                            {
                                                item.archivos.map(file => (
                                                    <li key={file.id} className="p-1 list-group-item d-flex justify-content-between align-items-center text-dark">
                                                        {file.titulo}
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
