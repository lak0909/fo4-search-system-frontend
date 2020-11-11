import React from 'react'

const Top = () => {
    return (
        <nav className="bp3-navbar bp3-dark">
            <div className="bp3-navbar-group bp3-align-left">
                <div className="bp3-navbar-heading">MYFO4</div>
                <input className="bp3-input" placeholder="Search Player Name..." type="text" />
            </div>
            <div className="bp3-navbar-group bp3-align-right">
                <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
                <button className="bp3-button bp3-minimal bp3-icon-document">Compare</button>
                <span className="bp3-navbar-divider"></span>
                <button className="bp3-button bp3-minimal bp3-icon-user">Recommend</button>
                <button className="bp3-button bp3-minimal bp3-icon-notifications">Record</button>
            </div>
        </nav>
    )
}

export default Top