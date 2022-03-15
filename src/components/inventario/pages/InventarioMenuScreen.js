import React from 'react'
import { InventarioItem } from '../widgets/InventarioItem';

export const InventarioMenuScreen = () => {
  const data = [
    {
      url: 'inventario-asignaciones',
      nombre: 'Asignaciones',
      icono: 'icon-tap-02'
    },
    {
      url: 'inventario-computadoras',
      nombre: 'Computadoras',
      icono: 'icon-laptop'
    },
    {
      url: 'inventario-marcas',
      nombre: 'Marcas',
      icono: 'icon-tag'
    },
    {
      url: 'inventario-tipos',
      nombre: 'Tipo de equipos',
      icono: 'icon-vector'
    },
    {
      url: 'inventario-licencias',
      nombre: 'Licencias',
      icono: 'icon-credit-card'
    },
    {
      url: 'inventario-articulos',
      nombre: 'Artículos',
      icono: 'icon-app'
    }
  ];
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="title">Inventario</h5>
        <p className="">Elija una opción</p>
      </div>
      <div className="card-body all-icons">
        <div className="row">
          {
            data.map(item =>(
               <InventarioItem key={item.nombre} data={item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
