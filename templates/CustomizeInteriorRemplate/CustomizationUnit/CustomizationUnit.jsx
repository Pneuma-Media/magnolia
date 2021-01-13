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

const CustomizationUnit = ({ categoryName, optionGroups, onChange, onNext, onBack, totalCategories, currentCategory, totalCustomizationPrice, isCurrentStepCompleted, isAllStepsCompleted, selectedPlan }) => {
    const customizations = useSelector(state => state.customization.customization);


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
                {optionGroups?.map(og => {
                    return (
                        <OptionGroup
                            groupName={og.name}
                            options={og.options}
                            activeOptionId={og.active}
                            onChange={optionId => onChange({ groupId: og.id, optionId })}
                        />
                    );
                })}
            </div>
        </>
    );

    if (isAllStepsCompleted) body = (
        <div className={styles.summary}>
            <div className={styles.summary__total}>Total: ${formatPrice(selectedPlan?.price + totalCustomizationPrice + 21000)}</div>
            <div className={styles.summary__item}>Base price:  ${formatPrice(selectedPlan?.price)}</div>
            <div className={styles.summary__item}>Customizations: ${formatPrice(totalCustomizationPrice)}</div>
            <div className={styles.summary__item}>Site preparation: $21,000</div>
            <div className={styles.summary__action}>
                <Button text="Apply" disabled={currentCategory !== totalCategories} style={{ width: "100%", height: 50 }} onclick={() => Router.replace('/apply')} />
            </div>
        </div>
    );

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
        </div>
    );
};

export default CustomizationUnit;