import React from 'react';
import CityMap from '../../components/CityMap/CityMap';
import styles from './ChooseYourSpotTemplate.module.scss';


const ChooseYourSpotTemplate = ({ activeSlots, setIsPopup }) => {
    return (
        <div className={styles.ChooseYourSpotTemplate}>
            <CityMap
                setIsPopup={setIsPopup}
                activeSlots={activeSlots}
            />
            <div className={styles.explainer}>
                <div className={styles.explainer__item}>
                    <div className={styles.available}></div>
                    <span>- available lot</span>
                </div>
                <div className={styles.explainer__item}>
                    <div className={styles.sold}></div>
                    <span>- sold lot</span>
                </div>
            </div>
        </div>
    );
};

export default ChooseYourSpotTemplate;

