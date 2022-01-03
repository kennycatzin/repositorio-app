import React from 'react'
import { useSelector } from 'react-redux';
import { RepositorioCategoria } from './RepositorioCategoria'

export const RepositorioEntry = () => {
    const {adminConf} = useSelector(state => state.repo);
    return (
        <div id="accordion">
            {
                (adminConf !== undefined) ?
                    adminConf.map((item) => (
                        <RepositorioCategoria key={item.id} data={item}/>
                    ))
                :
                    <h5>Cargando...</h5>

            }
        </div>
    )
}
