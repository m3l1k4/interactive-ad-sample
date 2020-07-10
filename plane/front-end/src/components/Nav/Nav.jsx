import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
    return (
        <nav className="nav">
            <Link className="nav__title-group nav__link" to="/">
                <img className="nav__img" src={`${process.env.PUBLIC_URL}/assets/gcloud.png`} alt="Site logo" />
                <h2 className="nav__title">ADS GAMIFIED</h2>
            </Link>
            <ul className="nav__list">
                <Link to="/data" className="nav__link"><li className="nav__item">The Data</li></Link>
                <Link to="/interactive" className="nav__link"><li className="nav__item">The Game</li></Link>
            </ul>
        </nav>
    )
}
