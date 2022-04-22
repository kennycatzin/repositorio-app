import React from 'react'
import { useDispatch } from 'react-redux';
import { getSolicitudesAdmin } from '../../../../actions/solicitud';

export const InvEstatusCardComponent = () => {
    const dispatch = useDispatch();
    const handleGetSoli = (tipo) => {
        dispatch(getSolicitudesAdmin(tipo));
    }
    return (
        <div className="col-8 mt-2">
            <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">
                <label className="btn btn-sm btn-success btn-simple active" id="0" onClick={()=>handleGetSoli(1)}>
                    <input type="radio" name="options" checked onChange={()=>{}}/>
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Activas</span>
                    <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02"></i>
                    </span>
                </label>

                <label className="btn btn-sm btn-success btn-simple" id="2" onClick={()=>handleGetSoli(2)}>
                    <input type="radio" className="d-none" name="options" />
                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">Resueltas</span>
                    <span className="d-block d-sm-none">
                        <i className="tim-icons icon-tap-02"></i>
                    </span>
                </label>
            </div>
        </div>
    )
}
