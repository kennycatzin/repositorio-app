import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export const ExcelDocumentoPorRol = ({data}) => {
    return (
        <>
            <div className="App">
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success"
                    table="table-to-xls"
                    filename="DocumentoRol"
                    sheet="Ventas"
                    buttonText="Descargar"
                />
                <table id="table-to-xls" className='d-none'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Rol</th>                           
                            <th>Categoría</th>
                            <th>Subcategoría</th>
                            <th>Nombre documento</th>
                            <th>Descripción documento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>   
                                <td>{item.rol}</td>                               
                                <td>{item.categoria}</td>
                                <td>{item.subcategoria}</td>
                                <td>{item.nombre}</td>
                                <td>{item.descripcion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
