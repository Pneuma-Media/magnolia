import React from 'react';
import styles from './SelectFloorPlanTemplate.module.scss';
import Item from '../../components/Item/Item';


const SelectFloorPlanTemplate = () => {
    return (
        <div className={styles.SelectFloorPlanTemplate}>
            <div className={styles.SelectFloorPlanTemplate__innerContainer}>
                <div className={styles.SelectFloorPlanTemplate__item}>
                    <Item />
                </div>
                <div className={styles.SelectFloorPlanTemplate__item}>
                    <Item />
                </div>
                <div className={styles.SelectFloorPlanTemplate__item}>
                    <Item />
                </div>
                <div className={styles.SelectFloorPlanTemplate__item}>
                    <Item />
                </div>
                <div className={styles.SelectFloorPlanTemplate__item}>
                    <Item />
                </div>
                <div className={styles.SelectFloorPlanTemplate__item}>
                    <Item />
                </div>
                <div className={styles.SelectFloorPlanTemplate__item}>
                    <Item />
                </div>
                
            </div>
        </div>
    );
};

export default SelectFloorPlanTemplate;