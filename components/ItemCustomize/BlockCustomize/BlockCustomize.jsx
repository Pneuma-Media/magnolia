import React from 'react';
import styles from './BlockCustomize.module.scss';


const BlockCustomize = ({ block, block2, block3}) => {
    return (
        <div className={styles.BlockCustomize}>
            <p className={styles.BlockCustomize__title}>
                {block}
            </p>
            <div className={styles.BlockCustomize__blockIcon}>
                <div className={styles.BlockCustomize__icon}></div>
                <div className={styles.BlockCustomize__icon}></div>
                <div className={styles.BlockCustomize__icon}></div>
            </div>

        </div>
    );
};

export default BlockCustomize;