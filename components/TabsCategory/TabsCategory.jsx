import React from 'react';
import styles from './TabsCategory.module.scss';
import cx from 'classnames';


const TabsCategory = ({ customization, setTab }) => {
   
    return (
        <div className={styles.TabsCategory}>
            {customization.map((data, i) => {
                return (
                    <span
                        className={cx({[styles.active]:data.active})}
                        key={i}
                        onClick={() => setTab(data.category)}
                    >
                        {data.name}
                    </span>
                )
            })}
        </div>
    );
};

export default TabsCategory;