import React from 'react';
import styles from './ItemCustomize.module.scss';
import BlockCustomize from './BlockCustomize/BlockCustomize';
import customizationGroup from '../../db/custumizationGroups';


const ItemCustomize = ({ title, dataItem, onSelectCustomization, customization }) => {

    

    return (
        <div className={styles.ItemCustomize}>
            <p className={styles.ItemCustomize__title}>
                {title}
            </p>

            {
                dataItem.underCategories.map((data, i) => {
                    return (
                        <BlockCustomize
                            key={i}
                            dataImg={data}
                            onSelectCustomization={onSelectCustomization}
                            customization={customization}
                            underCategoriesID={data.id}
                            group={data}
                            category={dataItem}
                        />
                    )
                })
            }

        </div>
    );
};

export default ItemCustomize;