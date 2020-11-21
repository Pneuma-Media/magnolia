import React from 'react';
import styles from './Item.module.scss';
import { useDispatch } from 'react-redux';
import Button from '../UI/Button/Button';
import Router from 'next/router';
import { setPlan } from '../../store/actions/lotAction';

const Item = ({ noButton, data }) => {

    const dispatch = useDispatch();

    const selectPlan = () => {
        dispatch(setPlan(data));
        Router.replace('/detailed_floorplan')
    }

    return (

        <div className={styles.Item}>

            {
                data && (
                    <>
                        <span className={styles.Item__number}>{data.id}</span>

                        <div className={styles.Item__wrapImg}>
                            <img src={data.img} alt="img" />
                        </div>
                        <div className={styles.Item__wrapStats}>
                            <span className={styles.Item__stats}>
                                {data.kitchenSize}
                            </span>
                            <span className={styles.Item__stats}>
                                {data.rums}
                            </span>
                            <span className={styles.Item__stats}>
                                {data.toilet}
                            </span>
                            <span className={styles.Item__stats}>
                                {data.ceil}
                            </span>
                        </div>

                    </>
                )
            }

            {
                !noButton && (
                    <Button
                        text='Select This Lot'
                        style={{ width: '100%', height: '60px' }}
                        onclick={() => selectPlan()}
                    />
                )
            }

        </div>

    );
};

export default Item;