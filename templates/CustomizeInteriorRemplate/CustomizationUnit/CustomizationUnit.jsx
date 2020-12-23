import styles from './CustomizationUntit.module.scss';
import Button from '../../../components/UI/Button/Button';

import OptionGroup from './OptionsGroup/OptionsGroup';

const CustomizationUnit = ({ categoryName, optionGroups, onChange, onNext, onBack, totalCategories, currentCategory }) => {
    console.log(categoryName, optionGroups);
    return (
        <div className={styles.customization}>
            <div className={[styles.customization__header, styles.header].join(' ')}>
                <div className={styles.header__top}>
                    <div className={styles.header__info}>
                        <h3>Customize your house</h3>
                        <div>Total completed {currentCategory} out {totalCategories}, +$0</div>
                    </div>
                    <div className={styles.header__actions}>
                        {currentCategory > 1 && <Button text="Back" noArrow theme4 onclick={onBack} />}
                        <Button text="Next" noArrow onclick={onNext} disabled={totalCategories === currentCategory} />
                    </div>
                </div>
                <div className={styles.header__progress}>
                    <div className={styles.header__progressState} style={{width: `${100 * currentCategory / totalCategories}%`}}></div>
                </div>
            </div>
            <div className={[styles.customization__body, styles.body].join(' ')}>
                <div className={styles.body__category}>
                    <div className={styles.body__categoryName}>{categoryName}</div>
                    <div className={styles.body__categoryDivider}></div>
                </div>
                <div className={styles.body__list}>
                    {optionGroups.map(og => {
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
            </div>
        </div>
    );
};

export default CustomizationUnit;