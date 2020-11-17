import React from 'react';
import styles from './Button.module.scss';
import arrow from '../../../assets/img/icons/arrow.svg'

const Button = ({ text, onclick }) => {
    return (
        <button onClick={() => onclick()} className={styles.Button}>
            <span>{text}</span>
            <img src={arrow} alt="img"/>
        </button>
    );
};

export default Button;