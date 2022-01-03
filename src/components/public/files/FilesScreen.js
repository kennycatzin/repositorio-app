import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFiles } from '../../../actions/repositorio'
import { FilesEntries } from './FilesEntries'

export const FilesScreen = () => {
    const dispatch = useDispatch();
    const {titulo} = useSelector(state => state.repo.active)
    useEffect(() => {
        dispatch(getFiles())
    }, [dispatch])
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item">
                        <Link to="/category">Repositorio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/subcategorie">{titulo}</Link>
                    </li>
                    <li className="breadcrumb-item active">Archivos</li>
                </ol>

            </div>
            <FilesEntries />


        </>
    )
}
