import React from 'react';
import Order from './Order';
import { throws } from 'assert';

const Header = (props) => {
    return (
        // <header className="top">
        //     <h1>The fisher Men</h1>
        //     <h3 className="tagline"><span>{props.tagline}</span></h3>
        // </header>
        <nav className="navbar fixed-top bg-dark navbar-dark">
            <div className="navbar-brand">
                <header className="top">
                    <h2>The Fisher Men</h2>
                    <h3 className="tagline"><span>{props.tagline}</span></h3>
                </header>
            </div>
            <div>
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="pull-right fas fa-shopping-cart"></span>
                </button>
                <span className="badge badge-notify">{props.totalCount}</span>
            </div>
            </div>
            <div className="collapse  navbar-collapse" id="navbarNav">
            <hr className="breakline"></hr>
            <hr className="breakline"></hr>
                <Order addTotalCount={props.addTotalCount} totalCount={props.totalCount} removeOrder={props.removeOrder} fishies={props.fishies} order={props.order} />
            </div>
        </nav>
    )
}


export default Header;