import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export const ExcelCumplimiento = ({ data }) => {

    return (
        <>
            <div className="App">
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-info"
                    table="table-to-xls"
                    filename="OficialCumplimiento"
                    sheet="Cumplimiento"
                    buttonText="Descargar"
                />
                <table id="table-to-xls" className='d-none'>
                    <thead>
                        <tr>
                            <th>Sucursal</th>
                            <th>Folio</th>
                            <th>Fecha</th>
                            <th>Cliente</th>
                            <th>Boleta</th>
                            <th>Descripcion</th>
                            <th>Total</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{item.sucursal}</td>
                                <td>{item.Folio}</td>
                                <td>{item.fecha}</td>
                                <td>{item.cliente}</td>
                                <td>{item.Boleta}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.Total}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
