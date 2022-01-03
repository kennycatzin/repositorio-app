import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getFolders } from '../../../actions/repositorio';
import { SubcategorieEntries } from './SubcategorieEntries';

export const SubcategoriesScreen = () => {
    // Agregar un useEffect()
    const dispatch = useDispatch();
    const {titulo} = useSelector(state => state.repo.folder_active)

    useEffect(() => {
        dispatch(getFolders(2));
    }, [dispatch])
    return (
        <>
            <div className="row">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item text-warning">
                        <Link to="/category">Repositorio</Link>
                    </li>
                    <li className="breadcrumb-item active">{titulo}</li>
                </ol>
            </div>
            <SubcategorieEntries/>
        </>
    )
}
