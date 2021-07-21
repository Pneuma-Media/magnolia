import react, { useRef } from 'react'
import styles from './CustomizationUntit.module.scss';
import Button from '../../../components/UI/Button/Button';
import { format } from 'number-currency-format';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import OptionGroup from './OptionsGroup/OptionsGroup';

const formatPrice = (price) => {
    return format(price, {
        showDecimals: 'NEVER',
    })
};

const CustomizationUnit = ({
    categoryName,
    optionGroups,
    onChange,
    onNext,
    onBack,
    totalCategories,
    currentCategory,
    totalCustomizationPrice,
    isCurrentStepCompleted,
    isAllStepsCompleted,
    selectedPlan,
    refForTheScrollToTop
}) => {
    const customizations = useSelector(state => state.customization.customization);

    // const topRef = useRef(null)

    let progressWidth = `${100 * (currentCategory - 1) / totalCategories}%`;
    if (isAllStepsCompleted) progressWidth = '100%';

    let totalCompleted = currentCategory - 1;
    if (isAllStepsCompleted) totalCompleted = currentCategory;

    let body = null;

    if (!isAllStepsCompleted) body = (
        <>
            <div className={styles.body__category}>
                <div className={styles.body__categoryName}>{categoryName}</div>
                <div className={styles.body__categoryDivider}></div>
            </div>
            <div className={styles.body__list}>
                {/* {categoryName === "Flooring" &&
                    <div className={styles.body__card}>
                        <p className={styles.body__card_text}>Please note one carpet and one vinyl selection below.</p>
                        <textarea
                            className={styles.body__card_textArea}
                            name="flooring"
                            onChange={(event) => onChange({ inputAnswer: event.target.value })}
                            value={og.options.find(o => o.id === og.active).value}
                        />
                        <p className={styles.body__card__disclaimer}>*Flooring customization will be coming soon. A representative will reach out to you to discuss flooring options.</p>
                    </div>
                } */}
                {optionGroups?.map(og => {


                    let optionGroup = null;
                    if (categoryName === "Flooring") optionGroup = (
                        <div className={styles.body__card}>
                            <p className={styles.body__card_text}>Please note one carpet and one vinyl selection below.</p>
                            <textarea
                                className={styles.body__card_textArea}
                                name="flooring"
                                onChange={(event) => onChange({ inputAnswer: event.target.value })}
                                value={og.options.find(o => o.id === og.active)?.value}
                            />
                            <p className={styles.body__card__disclaimer}>*Flooring customization will be coming soon. A representative will reach out to you to discuss flooring options.</p>
                        </div>
                    );

                    if (categoryName !== "Flooring") optionGroup = (
                        <OptionGroup
                            groupName={og.name}
                            options={og.options}
                            activeOptionId={og.active}
                            onChange={optionId => onChange({ groupId: og.id, optionId })}
                        />
                    );

                    return (
                        optionGroup
                    );
                })}
            </div>
        </>
    );

    if (isAllStepsCompleted) body = (
        <div className={styles.summary}>
            <div className={styles.summary__total}>Total: ${formatPrice(selectedPlan?.price + totalCustomizationPrice)}</div>
            <div className={styles.summary__item}>Base price:  ${formatPrice(selectedPlan?.price)}</div>
            <div className={styles.summary__item}>Customizations: ${formatPrice(totalCustomizationPrice)}</div>
            <div className={styles.summary__action}>
                <Button text="Apply" disabled={currentCategory !== totalCategories} style={{ width: "100%", height: 50 }} onclick={() => Router.replace('/apply')} />
            </div>
            <div className={styles.summary__disclaimer}>
                Please note: site prep includes lot prep, set-up, delivery, footers, skirting, HVAC, Gutters, interior and exterior finish work, all utility hook-ups, cleaning, and a treated lumber front porch.
            </div>
        </div>
    );

    // const ref = useRef(null)

    const handleBottomBtnClick = () => {
        onNext();
        refForTheScrollToTop.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <div className={styles.customization}>
            <div className={[styles.customization__header, styles.header].join(' ')}>
                <div className={styles.header__top}>
                    <div className={styles.header__info}>
                        <h3>Customize your house</h3>
                        <div>Total completed {totalCompleted} out {totalCategories}, +${formatPrice(totalCustomizationPrice)}</div>
                    </div>
                    <div className={styles.header__actions}>
                        {currentCategory > 1 && <Button text="Back" noArrow theme4 onclick={onBack} />}
                        {!isAllStepsCompleted && <Button text="Next" noArrow onclick={onNext} disabled={totalCategories === currentCategory - 1 || !isCurrentStepCompleted} />}
                        {isAllStepsCompleted && <Button text="Apply" noArrow onclick={() => Router.replace('/apply')} />}
                    </div>
                </div>
                <div className={styles.header__progress}>
                    <div className={styles.header__progressState} style={{ width: progressWidth }}></div>
                </div>
            </div>
            <div className={[styles.customization__body, styles.body].join(' ')}>

                {body}
            </div>
            {!isAllStepsCompleted && <div className={styles.customization__bottomAction}>
                <Button
                    style={{ fon: "40" }}
                    text="Next"
                    noArrow
                    onclick={handleBottomBtnClick}
                    disabled={totalCategories === currentCategory - 1 || !isCurrentStepCompleted}
                />
            </div>
            }

        </div>
    );
};

export default CustomizationUnit;