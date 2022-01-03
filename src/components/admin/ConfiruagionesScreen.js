import React from 'react'
import { ConfItem } from './widgets/ConfItem';

export const ConfiruagionesScreen = () => {
  const data = [
    {
      url: 'roles',
      nombre: 'Roles',
      icono: 'icon-badge'
    },
    {
      url: 'repositorio',
      nombre: 'Repositorio',
      icono: 'icon-chart-bar-32'
    },
    {
      url: 'tipos',
      nombre: 'Tipo de documentos',
      icono: 'icon-molecule-40'
    },
    {
      url: 'estatus',
      nombre: 'Estatus',
      icono: 'icon-settings-gear-63'
    },
    {
      url: 'tablero',
      nombre: 'Tablero',
      icono: 'icon-app'
    },
    {
      url: 'departamentos',
      nombre: 'Departamentos',
      icono: 'icon-bank'
    },
    {
      url: 'usuarios',
      nombre: 'Usuarios',
      icono: 'icon-single-02'
    },
  ];
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="title">Configuraciones</h5>
        <p className="category">Elija una opcion a configurar</p>
      </div>
      <div className="card-body all-icons">
        <div className="row">
          {
            data.map(item =>(
               <ConfItem key={item.nombre} data={item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
