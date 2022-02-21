import React from 'react'

export const ConfRolCategoria = ({ data }) => {
    console.log(data);
    return (
        <div className="card container">
            <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button className="btn btn-info btn-block collapsed" data-toggle="collapse" data-target={`#${data.clave}`} aria-expanded="false" aria-controls="collapseThree">
                        {data.titulo}
                    </button>
                </h5>
            </div>
            <div id={`${data.clave}`} className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body col-12 row d-flex justify-content-around container">
                            {
                                data.subcategorias.map(item => (
                                    <div key={item.id} className="card-body col-lg-3 col-md-6 col-sm-12 card bg-light mr-5">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 text-center p-3">
                                                <h6 className="card-subtitle mb-2 text-muted">{item.titulo}</h6>
                                            </div>
                                        </div>
                                        <ul className="list-group">
                                            {
                                                item.archivos.map(file => (
                                                    <li key={file.id_archivo} className="p-1 list-group-item text-center card">
                                                        {file.nombre}  <p className='text-muted'>{file.descripcion}</p>
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
    )
}
