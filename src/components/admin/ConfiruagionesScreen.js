import React from 'react'

export const ConfiruagionesScreen = () => {
    return (
        <div className="card">
              <div className="card-header">
                <h5 className="title">Configuraciones</h5>
                <p className="category">Elija una opcion a configurar</p>
              </div>
              <div className="card-body all-icons">
                <div className="row">
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-badge"></i>
                      <p>Roles</p>
                    </div>
                  </div>
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-chart-bar-32"></i>
                      <p>Repositorio</p>
                    </div>
                  </div>
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-molecule-40"></i>
                      <p>Tipos</p>
                    </div>
                  </div>
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-settings-gear-63"></i>
                      <p>Estatus</p>
                    </div>
                  </div>
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-app"></i>
                      <p>Tablero</p>
                    </div>
                  </div>
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                    <div className="font-icon-detail">
                      <i className="tim-icons icon-bank"></i>
                      <p>Departamentos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}
