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
        </div>
    );
};

export default ChooseYourSpotTemplate;

