import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import '../scss/main.scss';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

const Layout = ({ children }) => {
    return (
        <div className="uk-width-1-1">
            <Header />

            {children}

            <Footer />
        </div>
    );
};


export default Layout;