import React from 'react';
import styles from './Item.module.scss';
import img from '../../assets/img/selectFloorplan/img25.jpg';
import Button from '../UI/Button/Button';
import Router from 'next/router';

const Item = ({ noButton }) => {
    return (

        <div className={styles.Item}>

            <span className={styles.Item__number}>1</span>

            <div className={styles.Item__wrapImg}>
                <img src={img} alt="img" />
            </div>
            <div className={styles.Item__wrapStats}>
                <span className={styles.Item__stats}>
                    stats
                    </span>
                <span className={styles.Item__stats}>
                    stats
                    </span>
                <span className={styles.Item__stats}>
                    stats
                    </span>
                <span className={styles.Item__stats}>
                    stats
                    </span>
            </div>
            {
                !noButton && (
                    <Button
                        text='Select This Lot'
                        style={{ width: '100%', height: '60px' }}
                        onclick={() => Router.replace('/detailed_floorplan')}
                    />
                )
            }

        </div>

    );
};

export default Item;