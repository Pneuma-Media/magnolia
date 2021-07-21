import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/layout';
import DetailedFloorPlanTemplate from '../templates/DetailedFloorPlanTemplate/DetailedFloorPlanTemplate';
import useTimeout from '../UTILS/useTimeout';


const DetailedFloorPlan = () => {

    const selectorPlan = useSelector(state => state.lot.planData);
    useTimeout();

    return (
        <Layout showDisclaimer>
            <DetailedFloorPlanTemplate
                selectorPlan={selectorPlan}
            />
        </Layout>
    );
};

export default DetailedFloorPlan;