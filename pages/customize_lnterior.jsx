import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/layout';
import CustomizeInteriorRemplate from '../templates/CustomizeInteriorRemplate/CustomizeInteriorRemplate';
import useTimeout from '../UTILS/useTimeout';
import { customizationAction } from '../store/actions/customization';


const getTotalCustomizationPrice = (customizations) => {
    let categories = [];
    customizations.forEach(c => {
        categories = categories.concat(c.underCategories);
    });

    let customizationPrice = 0;
    categories.forEach(c => {
        const activeOption = c.options.find(o => o.id === c.active);
        if (!activeOption) return;
        customizationPrice += activeOption.price;
    });

    return customizationPrice;
}

const CustomizeInterior = () => {

    useTimeout();

    const selectedPlan = useSelector(state => state.lot.planData);
    const customizations = useSelector(state => state.customization.customization);
    const [isAllStepsCompleted, setAllStepsCompleted] = useState(false);
    const dispatch = useDispatch();

    const activeCustomizationCategory = customizations.find(c => c.active);
    const activeCategoryIndex = customizations.findIndex(c => c.active);
    const totalCustomizationPrice = getTotalCustomizationPrice(customizations);



    const handleCustomizationChange = ({ groupId, optionId }) => {
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
        if (activeCategoryIndex >= customizations.length - 1) {
            setAllStepsCompleted(true);
            return;
        }
        changeActiveCategory(activeCategoryIndex + 1);
    };

    const handleBackCategory = () => {
        if (activeCategoryIndex <= 0) return;
        changeActiveCategory(activeCategoryIndex - 1);
        setAllStepsCompleted(false);
    };

    const changeActiveCategory = (categoryIndex) => {
        const newCustomizations = customizations.map((c, i) => {
            if (i !== categoryIndex) return { ...c, active: false };
            return {
                ...c,
                active: true,
            }
        });
        dispatch(customizationAction(newCustomizations))
    };




    useEffect(() => {
    }, []);

    const numberGroupsInStep = activeCustomizationCategory.underCategories.length;
    const numberCompletedGroupsInStep = activeCustomizationCategory.underCategories.filter(uc => uc.active !== null).length;

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
                totalCustomizationPrice={totalCustomizationPrice}
                isCurrentStepCompleted={numberGroupsInStep === numberCompletedGroupsInStep}
                isAllStepsCompleted={isAllStepsCompleted}

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