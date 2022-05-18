import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export const ExcelVentas = ({data}) => {
    return (
        <>
            <div className="App">
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success"
                    table="table-to-xls"
                    filename="VentasPorCliente"
                    sheet="Ventas"
                    buttonText="Descargar"
                />
                <table id="table-to-xls" className='d-none'>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>ID</th>
                            <th>ApellidoPaterno</th>
                            <th>Nombre</th>
                            <th>FecNac</th>
                            <th>EstadoNacimiento</th>
                            <th>Direccion</th>
                            <th>PaisNacimiento</th>
                            <th>PaisNacionalidad</th>
                            <th>Ocupacion</th>
                            <th>tel</th>
                            <th>Email</th>
                            <th>Curp</th>
                            <th>IdentificacionOficial</th>
                            <th>Dependencia</th>
                            <th>NumeroIdentificacion</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{item.Fecha}</td>
                                <td>{item.ID}</td>
                                <td>{item.ApellidoPaterno}</td>
                                <td>{item.Nombre}</td>
                                <td>{item.FecNac}</td>
                                <td>{item.EstadoNacimiento}</td>
                                <td>{item.Direccion}</td>
                                <td>{item.PaisNacimiento}</td>
                                <td>{item.PaisNacionalidad}</td>
                                <td>{item.Ocupacion}</td>
                                <td>{item.tel}</td>
                                <td>{item.Email}</td>
                                <td>{item.Curp}</td>
                                <td>{item.IdentificacionOficial}</td>
                                <td>{item.Dependencia}</td>
                                <td>{item.NumeroIdentificacion}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
