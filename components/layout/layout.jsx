import React from 'react';
import Heder from './heder/heder';
import Footer from './footer/footer'
import styles from "./Layout.module.scss";
import { Container } from 'reactstrap';

import InformationIcon from '../../assets/img/information.svg';


const Layout = ({ showDisclaimer, noPadding, ...props }) => {
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

    const contentStyles = [styles.content];
    if (noPadding) contentStyles.push(styles.content_nopadding);

    return (
        <div>
            <Heder />
            <main className={contentStyles.join(' ')}>
                {disclaimer}
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;