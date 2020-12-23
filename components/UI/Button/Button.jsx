import React from 'react';
import styles from './Button.module.scss';
import arrow from '../../../assets/img/icons/arrow.svg';
import cx from 'classnames';

const Button = ({ style, text, onclick, theme2, theme3, theme4, noArrow, disabled }) => {

    const themes = [
        { [styles.theme2]: theme2 },
        { [styles.theme3]: theme3 },
        { [styles.theme4]: theme4 },
        { [styles.disabled]: disabled}
    ]



    return (
        <button style={style} onClick={() => onclick()} className={cx(styles.Button, themes)}>
            <span>{text}</span>
            {
                (!theme3 && !noArrow) && <img src={arrow} alt="img" />
            }
        </button>
    );
};

export default Button;