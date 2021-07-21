import React, { useEffect, useState } from 'react';
import styles from './TimePopup.module.scss';
import Button from '../UI/Button/Button';
import { isPopup } from '../../store/actions/popup'
import { useDispatch } from 'react-redux';
import Router from 'next/router';

const TimePopup = () => {

    const [timer, setTimer] = useState(null);
    const dispatch = useDispatch();


    if (timer === 0) {
        dispatch(isPopup(false));
        Router.replace('/');
    }


    useEffect(() => {
        let sec = 60;
        const bodyInterval = () => {

            if (sec > 0) {
                setTimer(sec--);
            } else {
                dispatch(isPopup(false));
                Router.replace('/');
            }
        };

        const interval = setInterval(bodyInterval, 1000);
        return () => clearInterval(interval);

    }, [])

    return (
        <div className={styles.TimePopup}>
            <p className={styles.TimePopup__title}>
                are you still here ?
            </p>
            <p className={styles.TimePopup__timer}>
                {timer}
            </p>
            <Button
                text='Continue customizing'
                style={{ height: '70px' }}
                onclick={() => dispatch(isPopup(false))}
            />
        </div>
    );
};

export default TimePopup;