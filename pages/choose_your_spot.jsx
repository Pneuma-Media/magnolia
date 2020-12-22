import React, { useState } from 'react';
import ChooseYourSpotTemplate from '../templates/ChooseYourSpotTemplate/ChooseYourSpotTemplate';
import Layout from '../components/layout/layout';
import SlotPopup from '../templates/ChooseYourSpotTemplate/SlotPopup/SlotPopup';
import useTimeout from '../UTILS/useTimeout';
import { useSelector } from 'react-redux';
import  activeSlots  from '../db/activeSlots';


const ChooseYourSpot = () => {

    const [slotId, setSlotId] = useState(null);
    const selectorPopup = useSelector(state => state.popup.popup);

    console.log(activeSlots);

    useTimeout();

    return (
        <Layout>
            <ChooseYourSpotTemplate
                setIsPopup={setSlotId}
                activeSlots={activeSlots}
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