import React from 'react';
import styles from './Button.module.scss';
import arrow from '../../../assets/img/icons/arrow.svg';
import cx from 'classnames';

const Button = ({style, text, onclick, theme2 }) => {
    return (
        <button style={style} onClick={() => onclick()} className={cx(styles.Button , {[styles.theme2]:theme2})}>
            <span>{text}</span>
            <img src={arrow} alt="img"/>
        </button>
    );
};

export default Button;