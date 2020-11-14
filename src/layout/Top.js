import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => {
    return (
        <nav className="bp3-navbar bp3-dark">
            <div className="bp3-navbar-group bp3-align-left">
                <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                    <span className="bp3-navbar-heading">MYFO4</span>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                    <span className="bp3-button bp3-minimal bp3-icon-series-search">Search</span>
                </Link>
                <Link to="/compare" style={{ textDecoration: 'none', color: 'white'}}>
                    <span className="bp3-button bp3-minimal bp3-icon-timeline-bar-chart">Compare</span>
                </Link>
                <span className="bp3-navbar-divider"></span>
                <Link to="/recommend" style={{ textDecoration: 'none', color: 'white'}}>
                    <span className="bp3-button bp3-minimal bp3-icon-thumbs-up">Recommend</span>
                </Link>
                <Link to="/record" style={{ textDecoration: 'none', color: 'white'}}>
                    <span className="bp3-button bp3-minimal bp3-icon-doughnut-chart">Record</span>
                </Link>
            </div>
        </nav>
    )
}

export default Top