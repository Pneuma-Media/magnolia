import React from 'react';
import styles from './TabUnderCategory.module.scss';
import cx from 'classnames';

const TabUnderCategory = ({ setUnderTab, customization }) => {

    const category = customization.find(e => e.active);

    return (
        <ul className={styles.TabUnderCategory}>

            {
                category.underCategories.map((data, i) => {
                    return (
                        <li
                            className={cx({ [styles.active]: category.activeSubCategory === data.id })}
                            key={i}
                            onClick={() => setUnderTab(data)}
                        >
                            {data.name}
                        </li>
                    )
                })
            }



        </ul>
    );
};

export default TabUnderCategory;