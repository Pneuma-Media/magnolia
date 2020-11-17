import React from 'react';
import Heder from './heder/heder';
import Footer from './footer/footer'

const Layout = ({ ...props }) => {
    return (
        <div>
            <Heder />
               {props.children}
            <Footer />
        </div>
    );
};

export default Layout;