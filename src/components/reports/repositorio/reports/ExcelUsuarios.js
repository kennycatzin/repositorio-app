import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export const ExcelUsuarios = ({data}) => {
    return (
        <>
            <div className="App">
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success"
                    table="table-to-xls"
                    filename="ListadoUsuarios"
                    sheet="Usuarios"
                    buttonText="Descargar"
                />
                <table id="table-to-xls" className='d-none'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>                           
                            <th>Usuario</th>
                            <th>Correo</th>
                            <th>Última conexión</th>
                            <th>Rol</th>
                            <th>Archivos totales</th>
                            <th>Archivos vistos</th>
                            <th>Archivos pendientes</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>   
                                <td>{item.name}</td>                               
                                <td>{item.usuario}</td>
                                <td>{item.email}</td>
                                <td>{item.ultima_conexion}</td>
                                <td>{item.rol}</td>
                                <td>{item.totales}</td>
                                <td>{item.leido}</td>
                                <td>{item.nuevo}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
