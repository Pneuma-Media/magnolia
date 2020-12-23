import React, { useState } from 'react';
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

const CustomizeInteriorRemplate = ({ activeCustomizationCategory, onCustomizationChange, onNext, onBack, totalCategories, currentCategory, customization, setCustomization, selectedPlan, onSelectCustomization }) => {

    // let categories = [];
    // customization.forEach(c => {
    //     categories = categories.concat(c.underCategories);
    // });

    // let customizationPrice = 0;
    // categories.forEach(c => {
    //     const activeOption = c.options.find(o => o.id === c.active);
    //     customizationPrice += activeOption.price;
    // });


    return (
        <div className={styles.CustomizeInteriorRemplate}>
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
                                categoryName={activeCustomizationCategory.name}
                                optionGroups={activeCustomizationCategory.underCategories}
                                onChange={updatedGroup => onCustomizationChange(updatedGroup)}
                                totalCategories={totalCategories}
                                currentCategory={currentCategory}
                                onNext={onNext}
                                onBack={onBack}
                            />
                            {/* <TabsCategory
                                customization={customization}
                                setTab={setTab}
                            />

                            <div className={styles.CustomizeInteriorRemplate__body}>

                                <TabUnderCategory
                                    customization={customization}
                                    setUnderTab={setUnderTab}
                                />

                                {
                                    customization?.map((data, i) => {
                                        if (data.active) {
                                            return (
                                                <div className={styles.itemWrap} key={i}>
                                                    <ItemCustomize
                                                        title={data.name}
                                                        dataItem={data}
                                                        // setCustomization={setCustomization}
                                                        customization={customization}
                                                        onSelectCustomization={onSelectCustomization}
                                                        setActivePrice={() => null}
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div> */}
                        </div>

                        <div className={styles.CustomizeInteriorRemplate__bottomCard}>
{/* 
                            <span className={styles.cash}>${formatPrice(selectorPlan?.price + customizationPrice)}</span>

                            <div className={styles.block}>
                                <span>Base price: ${formatPrice(selectorPlan?.price)}</span>
                                <span>Customizations: ${formatPrice(customizationPrice)}</span>
                            </div>
                            <div className={styles.button}>
                                <Button
                                    text='Continue Application  Proccess'
                                    style={{ height: '100%' }}
                                    // theme2
                                    onclick={() => Router.replace('/apply')}
                                />
                            </div> */}

                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default CustomizeInteriorRemplate;