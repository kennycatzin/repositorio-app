import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataDashboard } from '../../../actions/dashboard';
import { CardsEntries } from './CardsEntries'
import { CarouselEntries } from './CarouselEntries'
import { PendientesComponent } from './PendientesComponent';

export const DashboardScreen = () => {
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(getDataDashboard(uid));
    }, [dispatch, uid])
    return (
        <>
            <CardsEntries />
            <hr />
            <PendientesComponent/>
            <CarouselEntries />
        </>
    )
}
