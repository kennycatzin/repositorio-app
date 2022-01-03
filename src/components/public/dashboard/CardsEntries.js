import React from 'react'
import { useSelector } from 'react-redux';
import { CardsComponents } from './CardsComponents'

export const CardsEntries = () => {
    const dash = useSelector(state => state.dash.data.dashboard);
    const check = useSelector(state => state.dash.checking);
    console.log(dash, check);
    return (
        <div className="row">
            {
                (!check)?
                    <CardsComponents data={dash}/>
                    : 
                    <h3>Cargando...</h3>

            }

        </div>
    )
}
