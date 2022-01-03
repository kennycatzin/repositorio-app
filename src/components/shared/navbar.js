import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/actions';

export const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const logout = () => {
    dispatch(startLogout());

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
      <div className="container-fluid">
        <div className="navbar-wrapper ">
          <div className="navbar-toggle d-inline">
            <button type="button" className="navbar-toggler">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <img width="50%" className="img-fluid mt-2 mb-2" src="https://afavor.mx/wp-content/uploads/2021/09/a-favor-logo-4-300x73.png" alt="logo" />

        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav ml-auto">


            {/* <li className="dropdown nav-item">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div className="notification d-none d-lg-block d-xl-block"></div>
                  <i className="tim-icons icon-sound-wave"></i>
                  <p className="d-lg-none">
                    Notifications
                  </p>
                </a>
                <ul className="dropdown-menu dropdown-menu-right dropdown-navbar">
                  <li className="nav-link"><a href="#" className="nav-item dropdown-item">Mike John responded to your email</a></li>
                  <li className="nav-link"><a href="#" className="nav-item dropdown-item">You have 5 more tasks</a></li>
                  <li className="nav-link"><a href="#" className="nav-item dropdown-item">Your friend Michael is in town</a></li>
                  <li className="nav-link"><a href="#" className="nav-item dropdown-item">Another notification</a></li>
                  <li className="nav-link"><a href="#" className="nav-item dropdown-item">Another one</a></li>
                </ul>
              </li> */}
            <li className="dropdown nav-item">
              <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <div className="photo">
                  <img src="../assets/img/anime3.png" alt="Profile" />
                </div>
                <b className="caret d-none d-lg-block d-xl-block"></b>
                <p className="d-lg-none">
                  Log out
                </p>
              </Link>
              <ul className="dropdown-menu dropdown-navbar">
                <li className="nav-link text-center">
                  <Link to="#" className="nav-item dropdown-item">
                    {auth.name}
                    <br />
                    ({auth.tipo})
                  </Link>
                </li>
                <li className="dropdown-divider"></li>
                <li className="nav-link"><Link onClick={logout} to="#" className="nav-item dropdown-item">Salir</Link></li>
              </ul>
            </li>
            <li className="separator d-lg-none"></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
