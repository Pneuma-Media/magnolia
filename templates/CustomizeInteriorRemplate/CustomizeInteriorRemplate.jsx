import React from 'react';
import styles from './CustomizeInteriorRemplate.module.scss';
import Item from '../../components/Item/Item';
import Button from '../../components/UI/Button/Button';
import ItemCustomize from '../../components/ItemCustomize/ItemCustomize';
import Router from 'next/router';


const CustomizeInteriorRemplate = ({customization, setCustomization, selectorPlan, onSelectCustomization }) => {

   // console.log(customization);

    return (
        <div className={styles.CustomizeInteriorRemplate}>
            <div className={styles.CustomizeInteriorRemplate__wrapItem}>
                <Item
                    noButton
                    data={selectorPlan}
                />
            </div>
            <div className={styles.CustomizeInteriorRemplate__customize} >
                <div className={styles.CustomizeInteriorRemplate__block}>

                    {
                        customization?.map((data, i) => {
                            return (
                                <div className={styles.itemWrap} key={i}>
                                    <ItemCustomize
                                        title={data.name}
                                        dataItem={data}
                                        // setCustomization={setCustomization}
                                        customization={customization}
                                        onSelectCustomization={onSelectCustomization}
                                    />
                                </div>
                            )
                        })
                    }

                </div>
                <div className={styles.CustomizeInteriorRemplate__wrapButton}>
                    <Button
                        text='Continue to the application process'
                        style={{ width: '100%', height: '70px' }}
                        theme2
                        onclick={() => Router.replace('/apply')}
                    />
                </div>

            </div>
        </div>
    );
};

export default CustomizeInteriorRemplate;