import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/layout';
import CustomizeInteriorRemplate from '../templates/CustomizeInteriorRemplate/CustomizeInteriorRemplate';
import customizationGroup from '../db/custumizationGroups';
import useTimeout from '../UTILS/useTimeout';
import { customizationAction } from '../store/actions/customization';

const CustomizeInterior = () => {

    useTimeout();

    const selectedPlan = useSelector(state => state.lot.planData);

    const dispatch = useDispatch();
    const customizations = useSelector(state => state.customization.customization);
    const activeCustomizationCategory = customizations.find(c => c.active);
    const activeCategoryIndex = customizations.findIndex(c => c.active);


    // const [customization, setCustomization] = useState(customizationGroup);

    const setTab = (id) => {
        const newState = [...customization];
        newState.map((data) => {
            data.active = false;
            if (data.category === id) data.active = true;
        })
        setCustomization(newState);
    }


    const setUnderTab = (data) => {
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

    const handleCustomizationChange = ({groupId, optionId}) => {
        const newCustomizations = customizations.map(category => {
            if (category.category !== activeCustomizationCategory.category) return category;
            return {
                ...category,
                underCategories: category.underCategories.map(uc => {
                    if (uc.id !== groupId) return uc;
                    return {
                        ...uc,
                        active: optionId
                    }
                })
            }
        })

        dispatch(customizationAction(newCustomizations))
    };

    const handleNextCategory = () => {
        if (activeCategoryIndex >= customizations.length - 1) return;
        changeActiveCategory(activeCategoryIndex + 1);
    };

    const handleBackCategory = () => {
        if (activeCategoryIndex <= 0) return;
        changeActiveCategory(activeCategoryIndex - 1);
    };

    const changeActiveCategory = (categoryIndex) => {
        const newCustomizations = customizations.map((c, i) => {
            if (i !== categoryIndex) return {...c, active: false};
            return {
                ...c,
                active: true,
            }
        });
        dispatch(customizationAction(newCustomizations))
    };


    useEffect(() => {
    }, []);

    return (
        <Layout>
            <CustomizeInteriorRemplate
                activeCustomizationCategory={activeCustomizationCategory}
                onCustomizationChange={handleCustomizationChange}
                onNext={handleNextCategory}
                onBack={handleBackCategory}
                totalCategories={customizations.length}
                currentCategory={activeCategoryIndex + 1}
                selectedPlan={selectedPlan}
            // selectorPlan={selectorPlan}
            // customization={customization}
            // onSelectCustomization={selectCustomization}
            // setTab={setTab}
            // setUnderTab={setUnderTab}
            />
        </Layout>
    );
};

export default CustomizeInterior;