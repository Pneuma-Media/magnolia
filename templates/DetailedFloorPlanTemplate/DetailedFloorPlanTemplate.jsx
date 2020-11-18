import React from 'react';
import styles from './DetailedFloorPlanTemplate.module.scss';
import Item from '../../components/Item/Item';
import Slider from '../../components/Slider/Slider';

const DetailedFloorPlanTemplate = () => {
    return (
        <div className={styles.DetailedFloorPlanTemplate}>
            {/* <div className={styles.DetailedFloorPlanTemplate__wrapItem}>
                <Item />
            </div> */}
           
                <Slider />
           
        </div>
    );
};

export default DetailedFloorPlanTemplate