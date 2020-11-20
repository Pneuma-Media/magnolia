import React from 'react';
import styles from './DetailedFloorPlanTemplate.module.scss';
import Item from '../../components/Item/Item';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/UI/Button/Button';
import Router from 'next/router';

const DetailedFloorPlanTemplate = () => {
    return (
        <div className={styles.DetailedFloorPlanTemplate}>
            <div className={styles.DetailedFloorPlanTemplate__wrapItem}>
                <Item 
                    noButton
                />
            </div>

            <div className={styles.DetailedFloorPlanTemplate__wrapSlider}>
                <Slider />
                <Button
                    text='Choose this floorplan!'
                    style={{height:'70px', width:'400px'}}
                    onclick={() => Router.push('/customize_lnterior')}
                />
            </div>
        </div>
    );
};

export default DetailedFloorPlanTemplate