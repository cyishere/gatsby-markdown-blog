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
                            <Link to="/" activeClassName="active">home</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/movie" activeClassName="active">movie</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/tv" activeClassName="active">tv</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/music" activeClassName="active">music</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/tags" activeClassName="active">by tags</Link>
                        </li>
                        <li className="uk-text-uppercase">
                            <Link to="/about" activeClassName="active">about</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;