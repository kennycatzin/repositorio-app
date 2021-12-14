import React from 'react'

export const DashboardScreen = () => {
    return (
        <>
            <div className="row ">
                <ol className="breadcrumb bg-transparent ml-3">
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card-counter primary">
                        <i className="fa fa-book"></i>
                        <span className="count-numbers">12</span>
                        <span className="count-name">Manual</span>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card-counter danger">
                        <i className="fa fa-flask"></i>
                        <span className="count-numbers">6</span>
                        <span className="count-name">Procedimientos</span>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card-counter success">
                        <i className="fa fa-clipboard"></i>
                        <span className="count-numbers">14</span>
                        <span className="count-name">Formularios</span>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card-counter info">
                        <i className="fa fa-tasks"></i>
                        <span className="count-numbers">4</span>
                        <span className="count-name">Instructivos</span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-counter bg-light text-white">
                        <i className="fa fa-window-restore"></i>
                        <span className="count-numbers">30</span>
                        <span className="count-name">Descriptivos</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
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
                                <div className="col-4 text-center">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active text-center">
                                                <img className="d-block w-100" src="https://kinsta.com/es/wp-content/uploads/sites/8/2020/06/ejemplo-anuncio-banner-300x250.png" alt="First slide" />
                                                <div className="carousel-caption d-none d-sm-block">
                                                    <div className="card p-1 mt-1">
                                                        <h5 className="card-title">Primer anuncio de la semana</h5>
                                                        <p className="card-description">Favor de traer su propia comida del día</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="https://kinsta.com/es/wp-content/uploads/sites/8/2020/06/ejemplo-anuncio-banner-300x250.png" alt="Second slide" />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5 className="card-title">Torneo de Futbolito</h5>
                                                    <p className="card-description">Se le invita a todo el personal a participar en el torneo</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="https://kinsta.com/es/wp-content/uploads/sites/8/2020/06/ejemplo-anuncio-banner-300x250.png" alt="Third slide" />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5 className="card-title">Torneo de pink ponk</h5>
                                                    <p className="card-description">Favor de usar gel antibacterial y desinfectar el área</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
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
        </>
    )
}
