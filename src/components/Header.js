import React from 'react';
import Order from './Order';

const Header = (props) => {
    return (
        // <header className="top">
        //     <h1>The fisher Men</h1>
        //     <h3 className="tagline"><span>{props.tagline}</span></h3>
        // </header>
        <nav className="navbar navbar-light">
            <div className="navbar-brand">
                <header className="top">
                    <h1>The fisher Men</h1>
                    <h3 className="tagline"><span>{props.tagline}</span></h3>
                </header>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon pull-right"></span>
            </button>

            <div className="collapse  navbar-collapse" id="navbarNav">
                <Order removeOrder={props.removeOrder} fishies={props.fishies} order={props.order} />
            </div>
        </nav>
    )
}


export default Header;