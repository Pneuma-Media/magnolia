import React from 'react';
import styles from './CustomizeInteriorRemplate.module.scss';
import Item from '../../components/Item/Item';
import Button from '../../components/UI/Button/Button';
import ItemCustomize from '../../components/ItemCustomize/ItemCustomize';
import Router from 'next/router';


const CustomizeInteriorRemplate = () => {
    return (
        <div className={styles.CustomizeInteriorRemplate}>
            <div className={styles.CustomizeInteriorRemplate__wrapItem}>
                <Item
                    noButton
                />
            </div>
            <div className={styles.CustomizeInteriorRemplate__customize} >
                <div className={styles.CustomizeInteriorRemplate__block}>
                    <div className={styles.itemWrap}>
                        <ItemCustomize
                            title='Exterior Customizations'
                            block1='Shingles'
                            block2='Siding'
                            block3='Shutters'
                        />
                    </div>
                    <div className={styles.itemWrap}>
                        <ItemCustomize
                            title='Kitchen Customizations'
                            block1='Countertop'
                            block2='Backsplash'
                            block3='Cabinets'
                        />
                    </div>
                    <div className={styles.itemWrap}>
                        <ItemCustomize
                            title='Other Customizations'
                            block1='Flooring'
                        />
                    </div>

                </div>
                <div className={styles.CustomizeInteriorRemplate__wrapButton}>
                    <Button
                        text='Continue to the application process'
                        style={{ width: '100%', height: '70px' }}
                        theme2
                        onclick={() => Router.push('/apply')}

                    />
                </div>

            </div>
        </div>
    );
};

export default CustomizeInteriorRemplate;