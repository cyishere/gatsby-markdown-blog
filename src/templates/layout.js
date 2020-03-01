import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import '../scss/main.scss';

// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';

// UIkit.use(Icons);


// const Layout = ({ children }) => {
//     // componentDidMount() {
//     //     UIkit.use(Icons);
//     // }

//     return (
//         <div className="uk-width-1-1">
//             <Header />

//             {children}

//             <Footer />
//         </div>
//     );
// };

class Layout extends React.Component {
    componentDidMount() {
        try {
            this.UIkit = require('uikit');
            this.Icons = require('uikit/dist/js/uikit-icons');
            this.UIkit.use(this.Icons);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return(
            <div className="uk-width-1-1">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}


export default Layout;