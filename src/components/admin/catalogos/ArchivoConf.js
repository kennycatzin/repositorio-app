import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArchivoModal } from '../../modal/archivoModal';
import { ConfRolCategoria } from '../widgets/ConfRolCategoria';

export const ArchivoConf = () => {
  const navigate = useNavigate();
  const handdleRegresar = () => {
    console.log("regresando");
    navigate(-1);
  }
  const data = [
    {
      id: 1,
      clave: "Documentosdeconsulta",
      titulo: "Documentos de consulta",
      subcategorias: [
        {
          id: 1,
          titulo: "Leyes y Normas",
          archivos: [
            {
              id: 1,
              titulo: "P-GGN-01"
            },
            {
              id: 2,
              titulo: "P-GGN-06"
            },
            {
              id: 3,
              titulo: "P-GGN-07"
            }
          ]
        },

      ]
    },
    {
      id: 2,
      clave: "AFavor",
      titulo: "A Favor",
      subcategorias: [
        {
          id: 1,
          titulo: "Documentos del SGC",
          archivos: [
            {
              id: 1,
              titulo: "C-SGC-04"
            },
            {
              id: 2,
              titulo: "C-SGC-02"
            },
            {
              id: 3,
              titulo: "C-SGC-03"
            },
            {
              id: 4,
              titulo: "C-SGC-05"
            }
          ]
        },

      ]
    },
  ];

  return (
    <>
      <div className="row">
        <ol className="breadcrumb bg-transparent">

          <li><span onClick={handdleRegresar} className="nav-link text-success pointer">
            <i className="tim-icons icon-minimal-left"></i> Regresar
          </span>
          </li>
        </ol>
      </div>
      <div className="row">
        <div className="col-sm-6 text-left">
          <h5 className="card-category">Configuracion</h5>
          <h2 className="card-title">Programador</h2>
        </div>
        <div className="col-sm-6">
          <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">

            {/* {
              items.map(item => (
                <TiposNavItem key={item.id} data={item} />
              ))
            } */}
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="card-title d-inline">Listado de categorias</h4>
            <button id="twitter" className="btn btn-round btn-success">
              <i className="fa fa-cog"></i> · Configurar
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <div id="accordion">
                {
                  data.map(item => (
                    <ConfRolCategoria key={item.id} data={item} />
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </div>
      <ArchivoModal/>



    </>
  )
}
