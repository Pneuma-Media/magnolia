import React from 'react';
import styles from  './ItemSlider.module.scss';


const ItemSlider = ({imgSlider}) => {
    return (
        <div className={styles.imgSlider}>
            <img src={imgSlider} alt="imgSlider"/>
        </div>
    );
};

export default ItemSlider;