import React from 'react';
import styles from './SelectFloorPlanTemplate.module.scss';
import Item from '../../components/Item/Item';


const SelectFloorPlanTemplate = ({ plansSlot }) => {
    return (
        <div className={styles.SelectFloorPlanTemplate}>
            <div className={styles.SelectFloorPlanTemplate__innerContainer}>

                {
                   plansSlot && plansSlot.map((data, i) => {
                        return (
                            <div key={i} className={styles.SelectFloorPlanTemplate__item}>
                                <Item 
                                    data={data}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SelectFloorPlanTemplate;