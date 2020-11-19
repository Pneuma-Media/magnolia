import React from 'react';
import styles from './Item.module.scss';
import img from '../../assets/img/selectFloorplan/img25.jpg';
import Button from '../UI/Button/Button';
import Router from 'next/router';

const Item = () => {
    return (
        // <div className={styles.Item}>
        //     <div className={styles.Item__Wrap}>


                
                <div className={styles.Item}>
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
                    <Button
                        text='Select This Lot'
                        style={{ width: '100%', height: '60px' }}
                        onclick={() => Router.push('/detailed_floorplan')}
                    />
                </div>



        //     </div>

        // </div>
    );
};

export default Item;