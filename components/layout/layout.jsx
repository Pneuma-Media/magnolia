import React from 'react';
import Heder from './heder/heder';
import Footer from './footer/footer'
import styles from "./Layout.module.scss";
import { Container } from 'reactstrap';

import InformationIcon from '../../assets/img/information.svg';


const Layout = ({ showDisclaimer, ...props }) => {
    let disclaimer = null;
    if (showDisclaimer) disclaimer = (
        <Container>
            <div className={styles.disclaimer}>
                <img src={InformationIcon} alt="information" />
                <div>
                    Price does not include set-up, finishes, or hook-ups.
            </div>
            </div>
        </Container>
    );

    return (
        <div>
            <Heder />
            <main className={styles.content}>
                {disclaimer}
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;