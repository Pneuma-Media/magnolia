import React, { useState, useRef } from 'react';
import styles from './CustomizeInteriorRemplate.module.scss';
import Item from '../../components/Item/Item';
import Button from '../../components/UI/Button/Button';
import ItemCustomize from '../../components/ItemCustomize/ItemCustomize';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';
import TabsCategory from '../../components/TabsCategory/TabsCategory';
import TabUnderCategory from '../../components/TabUnderCategory/TabUnderCategory';
import { format } from 'number-currency-format';
import CustomizationUnit from './CustomizationUnit/CustomizationUnit';

const formatPrice = (price) => {
    return format(price, {
        showDecimals: 'NEVER',
    })
};

const CustomizeInteriorRemplate = ({ activeCustomizationCategory, onCustomizationChange, onNext, onBack, totalCategories, currentCategory, totalCustomizationPrice, isCurrentStepCompleted, selectedPlan, isAllStepsCompleted }) => {

    // let categories = [];
    // customization.forEach(c => {
    //     categories = categories.concat(c.underCategories);
    // });

    // let customizationPrice = 0;
    // categories.forEach(c => {
    //     const activeOption = c.options.find(o => o.id === c.active);
    //     customizationPrice += activeOption.price;
    // });
    const refForTheScrollToTop = useRef()

    return (
        <div ref={refForTheScrollToTop} className={styles.CustomizeInteriorRemplate}>
            <Container>
                <Row>
                    <Col xl='4'>
                        <Item
                            noButton
                            data={selectedPlan}
                        />

                    </Col>
                    <Col xl='8'>

                        <div className={styles.CustomizeInteriorRemplate__block}>
                            <CustomizationUnit
                                categoryName={activeCustomizationCategory?.name}
                                optionGroups={activeCustomizationCategory?.underCategories}
                                onChange={updatedGroup => onCustomizationChange(updatedGroup)}
                                totalCategories={totalCategories}
                                currentCategory={currentCategory}
                                onNext={onNext}
                                onBack={onBack}
                                totalCustomizationPrice={totalCustomizationPrice}
                                isCurrentStepCompleted={isCurrentStepCompleted}
                                isAllStepsCompleted={isAllStepsCompleted}
                                selectedPlan={selectedPlan}
                                refForTheScrollToTop={refForTheScrollToTop}
                            />

                        </div>


                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default CustomizeInteriorRemplate;