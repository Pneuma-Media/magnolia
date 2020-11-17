import React from 'react';
import styles from './Popup.module.scss';


const Popup = ({children}) => {

    return (
        <div className={styles.popup}>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Popup;