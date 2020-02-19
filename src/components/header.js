import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-left">
                    <Link to="/" className="uk-logo"><i uk-icon="icon: code"></i> GatsMark</Link>              
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li className="uk-text-uppercase">
                            <Link to="/">home</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/movie">movie</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/tv">tv</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/music">music</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/about">about</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;