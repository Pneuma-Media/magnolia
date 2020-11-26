import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/layout';
import CustomizeInteriorRemplate from '../templates/CustomizeInteriorRemplate/CustomizeInteriorRemplate';
import customizationGroup from '../db/custumizationGroups';
import  useTimeout from '../UTILS/useTimeout';
import { customizationAction } from '../store/actions/customization';

const CustomizeInterior = () => {

    useTimeout();

    const selectorPlan = useSelector(state => state.lot.planData);

    const dispatch = useDispatch();

    const [customization, setCustomization] = useState(customizationGroup);
   
    const setTab = (id) => {
        const newState = [...customization];
        newState.map((data) => {
            data.active = false;
            if(data.category === id)data.active = true;
        })
        setCustomization(newState);
    }

    const setUnderTab = (data) => {
        console.log(data);
        const newCustomizations = customization.map(c => {
            return {
                ...c,
                activeSubCategory: c.active ? data.id : c.activeSubCategory,
            }
        });

        setCustomization(newCustomizations);
        // customization.map((category) => {
        //     console.log(category.underCategories.find(e => e.id === data.id))

        // })
    }

    const selectCustomization = (e) => {
        const newCustomizations = customization.map(category => {
            if (category.category !== e.categoryId) return category;
            return {
                ...category,
                underCategories: category.underCategories.map(uc => {
                    if (uc.id !== e.groupId) return uc;
                    return {
                        ...uc,
                        active: e.optionId
                    }
                })
            }
        })
        
        setCustomization(newCustomizations);
    }

    useEffect(() => {
        dispatch(customizationAction(customization))
       },[customization]);

    return (
        <Layout>
            <CustomizeInteriorRemplate
                selectorPlan={selectorPlan}
                customization={customization}
                onSelectCustomization={selectCustomization}
                setTab={setTab}
                setUnderTab={setUnderTab}
            />
        </Layout>
    );
};

export default CustomizeInterior;