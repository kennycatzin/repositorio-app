import React from 'react'
import { InventarioItem } from '../widgets/InventarioItem';

export const InventarioMenuScreen = () => {
  const data = [
    {
      url: 'inventario-articulos',
      nombre: 'Solicitudes',
      icono: 'icon-paper'
    },
    {
      url: 'inventario-formulario-asignacion',
      nombre: 'Asignaciones',
      icono: 'icon-bulb-63'
    },
    {
      url: 'inventario-computadoras',
      nombre: 'Equipos',
      icono: 'icon-laptop'
    },
    {
      url: 'inventario-marcas',
      nombre: 'Marcas',
      icono: 'icon-tag'
    },
    {
      url: 'inventario-tipos',
      nombre: 'Tipos de equipo',
      icono: 'icon-vector'
    },
    {
      url: 'inventario-licencias',
      nombre: 'Licencias',
      icono: 'icon-credit-card'
    },
    {
      url: 'inventario-articulos',
      nombre: 'Sucursales',
      icono: 'icon-istanbul'
    },
    
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
