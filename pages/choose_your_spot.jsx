import React, { useState } from 'react';
import ChooseYourSpotTemplate from '../templates/ChooseYourSpotTemplate/ChooseYourSpotTemplate';
import Layout from '../components/layout/layout';
import SlotPopup from '../templates/ChooseYourSpotTemplate/SlotPopup/SlotPopup';

const ChooseYourSpot = () => {

    const [slotId, setSlotId] = useState(null);

    return (
        <Layout>
            <ChooseYourSpotTemplate
                setIsPopup={setSlotId}
            />
            {
                isPopup && <SlotPopup id={slotId} />
            }
        </Layout>
    );
};

export default ChooseYourSpot;