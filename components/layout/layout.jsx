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
                    All price estimates shown include the base price of the home and all site prep. Please note: site prep includes lot prep, set-up, delivery, footers, skirting, HVAC, Gutters, interior and exterior finish work, all utility hook-ups, cleaning, and a treated lumber front porch.                </div>
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