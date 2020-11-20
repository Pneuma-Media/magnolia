import React from 'react';
import styles from './DetailedFloorPlanTemplate.module.scss';
import Item from '../../components/Item/Item';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/UI/Button/Button';
import Router from 'next/router';

const DetailedFloorPlanTemplate = ({selectorPlan}) => {

    console.log(selectorPlan.images);

    return (
        <div className={styles.DetailedFloorPlanTemplate}>
            <div className={styles.DetailedFloorPlanTemplate__wrapItem}>
                <Item 
                    noButton
                    data={selectorPlan}
                />
            </div>

            <div className={styles.DetailedFloorPlanTemplate__wrapSlider}>
                <Slider 
                    images={selectorPlan.images}
                />
                <Button
                    text='Choose this floorplan!'
                    style={{height:'70px', width:'400px'}}
                    onclick={() => Router.replace('/customize_lnterior')}
                />
            </div>
        </div>
    );
};

export default DetailedFloorPlanTemplate