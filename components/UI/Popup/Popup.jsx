import React from 'react';
import styles from './Popup.module.scss';


const Popup = ({ children }) => {

    return (
        <div className={styles.popup}>
            
            {children}

        </div>
    );
};

export default Popup;