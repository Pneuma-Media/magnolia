import React from 'react';
import styles from './CustomizeInteriorRemplate.module.scss';
import Item from '../../components/Item/Item';
import Button from '../../components/UI/Button/Button';
import ItemCustomize from '../../components/ItemCustomize/ItemCustomize';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';
import TabsCategory from '../../components/TabsCategory/TabsCategory';
import TabUnderCategory from '../../components/TabUnderCategory/TabUnderCategory';

const CustomizeInteriorRemplate = ({ setTab, customization, setCustomization, selectorPlan, onSelectCustomization }) => {



    return (
        <div className={styles.CustomizeInteriorRemplate}>

            <Container>
                <Row>


                    <Col xl='4'>
                        <Item
                            noButton
                            data={selectorPlan}
                        />
                    </Col>


                    <Col xl='8'>

                        <div className={styles.CustomizeInteriorRemplate__block}>

                            <TabsCategory
                                customization={customization}
                                setTab={setTab}
                            />

                            <div className={styles.CustomizeInteriorRemplate__body}>

                                <TabUnderCategory
                                    customization={customization}
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
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>


                        </div>

                        <Button
                            text='Continue to the application process'
                            style={{ width: '100%', height: '70px' }}
                            theme2
                            onclick={() => Router.replace('/apply')}
                        />

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default CustomizeInteriorRemplate;