import React from 'react';
import styles from './Button.module.scss';
import arrow from '../../../assets/img/icons/arrow.svg'

const Button = ({style, text, onclick }) => {
    return (
        <button style={style} onClick={() => onclick()} className={styles.Button}>
            <span>{text}</span>
            <img src={arrow} alt="img"/>
        </button>
    );
};

export default Button;