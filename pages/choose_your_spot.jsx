import React, { useState } from 'react';
import ChooseYourSpotTemplate from '../templates/ChooseYourSpotTemplate/ChooseYourSpotTemplate';
import Layout from '../components/layout/layout';
import SlotPopup from '../templates/ChooseYourSpotTemplate/SlotPopup/SlotPopup';
import useTimeout from '../UTILS/useTimeout';
import { useSelector } from 'react-redux';
import { slotState } from '../db/activeSlots';


const ChooseYourSpot = () => {

    const [slotId, setSlotId] = useState(null);
    const selectorPopup = useSelector(state => state.popup.popup);

    useTimeout();

    return (
        <Layout noPadding >
            <ChooseYourSpotTemplate
                setIsPopup={setSlotId}
                slotState={slotState}
            />
            {
                slotId && !selectorPopup && (
                    <SlotPopup id={slotId}
                        setSlotId={setSlotId}
                    />
                )
            }
        </Layout>
    );
};

export default ChooseYourSpot;