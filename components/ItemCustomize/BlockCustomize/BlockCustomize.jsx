import React, { useState, useEffect } from 'react';
import styles from './BlockCustomize.module.scss';
import cx from 'classnames';



const BlockCustomize = ({ dataImg, onSelectCustomization, customization, category, underCategoriesID }) => {
  console.log(underCategoriesID);

  const select = (id) => {
    const newState = [...customization];
    console.log(underCategoriesID);
    console.log(id);
    console.log(category);
    onSelectCustomization({
        optionId: id,
        groupId: underCategoriesID,
        categoryId: category.category,
    });
    // const category = newState.find(e => e.underCategories.id === obj.underCategoriesID); 
    // console.log(category,obj)
  }

    return (
        <div className={styles.BlockCustomize}>
            <p className={styles.BlockCustomize__title}>
                {dataImg.name}
            </p>
            <div className={styles.BlockCustomize__blockIcon}>
                {
                    dataImg.options.map((data, i) => {
                        return (
                            <div onClick={() => select(data.id)} key={i} className={cx(styles.BlockCustomize__icon, { [styles.active]: data.id ===  dataImg.active})}>
                                <img src={data.img} alt="img" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default BlockCustomize;