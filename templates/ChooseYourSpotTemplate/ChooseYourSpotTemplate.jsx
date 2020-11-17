import React from 'react';
import CityMap from '../../components/CityMap/CityMap';
import styles from './ChooseYourSpotTemplate.module.scss';


const ChooseYourSpotTemplate = ({ setIsPopup }) => {
    return (
        <div className={styles.ChooseYourSpotTemplate}>
            <CityMap
                setIsPopup={setIsPopup}
            />
        </div>
    );
};

export default ChooseYourSpotTemplate;

