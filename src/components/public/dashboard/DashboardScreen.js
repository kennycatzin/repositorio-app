import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataDashboard } from '../../../actions/dashboard';
import { CardsEntries } from './CardsEntries'
import { CarouselEntries } from './CarouselEntries'

export const DashboardScreen = () => {
    const dispatch = useDispatch();
    const {uid} = useSelector(state => state.auth)
    useEffect(() => {
       dispatch(getDataDashboard(uid));
    }, [dispatch, uid])
    return (
        <>
            <div className="row ">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>
            <CardsEntries/>
            <hr />
            <CarouselEntries/>
        </>
    )
}
