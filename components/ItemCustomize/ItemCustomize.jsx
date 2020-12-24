import React from 'react';
import styles from './ItemCustomize.module.scss';
import BlockCustomize from './BlockCustomize/BlockCustomize';


const ItemCustomize = ({ setActivePrice, title, dataItem, onSelectCustomization, customization }) => {



    return (
        <div className={styles.ItemCustomize}>

            {
                dataItem.underCategories.map((data, i) => {
                    if (dataItem.activeSubCategory === data.id) {
                        return (
                            <BlockCustomize
                                key={i}
                                dataImg={data}
                                onSelectCustomization={onSelectCustomization}
                                customization={customization}
                                underCategoriesID={data.id}
                                group={data}
                                category={dataItem}
                                setActivePrice={setActivePrice}
                            />
                        )
                    }
                })
            }

        </div>
    );
};

export default ItemCustomize;