import React from 'react'
import { useSelector } from 'react-redux';
import { CarouselComponent } from './CarouselComponent';

export const CarouselEntries = () => {
    const tablero = useSelector(state => state.dash.data.tableros);
    const check = useSelector(state => state.dash.checking);
    return (
        <div className="row animate__animated animate__fadeIn">
            <div className="col-12 ">
                <div className="card card-chart">
                    <div className="card-header ">
                        <div className="row">
                            <div className="col-sm-6 text-left">
                                <h5 className="card-category">Avisos</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-body text-center justify-content-center">
                        <div className="row justify-content-center">
                            <div className="text-center">
                                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">


                                        {
                                            (!check) ?
                                                tablero.map(car => {
                                                    return <CarouselComponent key={car.id} data={car} />
                                                }) :
                                                <h5>Cargando...</h5>
                                        }

                                    </div>
                                    <a className="carousel-control-prev  btn-primary btn-circle mb-auto mt-auto ml-4 btn-lg" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next btn-primary btn-circle mb-auto mt-auto mr-4" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
