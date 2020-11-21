import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/layout';
import CustomizeInteriorRemplate from '../templates/CustomizeInteriorRemplate/CustomizeInteriorRemplate';
import customizationGroup from '../db/custumizationGroups';

const CustomizeInterior = () => {

    const selectorPlan = useSelector(state => state.lot.planData);

    const [customization, setCustomization] = useState(customizationGroup);

    const selectCustomization = (e) => {
        const selectedCategory = customization.find(c => c.category === e.categoryId);
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
        // console.log(selectedCategory);
        setCustomization(newCustomizations);
    }

    return (
        <Layout>
            <CustomizeInteriorRemplate
                selectorPlan={selectorPlan}
                customization={customization}
                onSelectCustomization={selectCustomization}
            />
        </Layout>
    );
};

export default CustomizeInterior;