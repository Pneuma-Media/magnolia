import React from 'react';
import styles from './ItemCustomize.module.scss';
import BlockCustomize from './BlockCustomize/BlockCustomize';


const ItemCustomize = ({ title, block1, block2, block3 }) => {
    return (
        <div className={styles.ItemCustomize}>
            <p className={styles.ItemCustomize__title}>
                {title}
            </p>

            <BlockCustomize
                block={block1}
            />
            <BlockCustomize
                block={block2}
            />
            <BlockCustomize
                block={block3}
            />

        </div>
    );
};

export default ItemCustomize;