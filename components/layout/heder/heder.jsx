import React, { useState } from 'react';
import styles from './heder.module.scss';
import cx from 'classnames';

const tabs = [
    { id: 1, name: 'Choose your spot', active: true, visit: true, link:'/choose_your_spot' },
    { id: 2, name: 'Select Floorplan', active: false, visit: false, link:'/select_floorplan' },
    { id: 3, name: 'Detailed Floorplan', active: false, visit: false, link:'/detailed_floorplan' },
    { id: 4, name: 'Customize Interior', active: false, visit: false, link:'/customize_lnterior' },
    { id: 5, name: 'Apply', active: false, visit: false, link:'/apply' },
]

const Heder = () => {

    const [stateTubs, setStateTabs] = useState(tabs);

    const selectTab = (id) => {
        console.log(id);
    }

    return (
        <div className={styles.Heder}>
            {
                stateTubs.map((data) => {
                    return (
                        <span
                            onClick={() => selectTab(data.id)}
                            className={cx(styles.tab, { [styles.active]: data.active })}
                            key={data.id}>{data.name}
                        </span>
                    )
                })
            }
        </div>
    );
};

export default Heder;