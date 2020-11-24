import React from 'react';
import styles from './TabUnderCategory.module.scss';
import cx from 'classnames';

const TabUnderCategory = ({ customization }) => {

    const category = customization.find(e => e.active);

    console.log(category);

    return (
        <ul className={styles.TabUnderCategory}>

            {
                category.underCategories.map((data, i) => {
                    return (
                        <li
                            className={cx({ [styles.active]: data.activeGroup })}
                            key={i}
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