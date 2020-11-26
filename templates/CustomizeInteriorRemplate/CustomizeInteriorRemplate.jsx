import React,{ useState } from 'react';
import styles from './CustomizeInteriorRemplate.module.scss';
import Item from '../../components/Item/Item';
import Button from '../../components/UI/Button/Button';
import ItemCustomize from '../../components/ItemCustomize/ItemCustomize';
import Router from 'next/router';
import { Container, Row, Col } from 'reactstrap';
import TabsCategory from '../../components/TabsCategory/TabsCategory';
import TabUnderCategory from '../../components/TabUnderCategory/TabUnderCategory';

const CustomizeInteriorRemplate = ({ setUnderTab, setTab, customization, setCustomization, selectorPlan, onSelectCustomization }) => {

    const [activePrice, setActivePrice] = useState(null);

console.log(activePrice)
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
                                                        setActivePrice={setActivePrice}
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>

                        <div className={styles.CustomizeInteriorRemplate__bottomCard}>

                            <span className={styles.cash}>${selectorPlan?.price + activePrice?.price}</span>

                            <div className={styles.block}>
                            <span>Base price: ${selectorPlan?.price}</span>
                            <span>Customizations: ${activePrice?.price}</span>
                            </div>
                            <div className={styles.button}>
                                <Button
                                    text='Continue Application  Proccess'
                                    style={{height: '100%' }}
                                    theme2
                                    onclick={() => Router.replace('/apply')}
                                />
                            </div>

                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default CustomizeInteriorRemplate;