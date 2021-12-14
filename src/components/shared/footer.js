import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Creative Tim
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            About Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Blog
                        </a>
                    </li>
                </ul>
            <div className="copyright">
                ©
                <script>
                    document.write(new Date().getFullYear())
                </script>2018 made with <i className="tim-icons icon-heart-2"></i> by
            </div>
            </div>
      </footer>
    )
}
