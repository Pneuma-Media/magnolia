import styles from './CustomizationUntit.module.scss';
import Button from '../../../components/UI/Button/Button';

import OptionGroup from './OptionsGroup/OptionsGroup';

const CustomizationUnit = () => {
    return (
        <div className={styles.customization}>
            <div className={[styles.customization__header, styles.header].join(' ')}>
                <div className={styles.header__top}>
                    <div className={styles.header__info}>
                        <h3>Customize your house</h3>
                        <div>Total completed 1 out 4, +$0</div>
                    </div>
                    <div className={styles.header__actions}>
                        <Button text="Back" noArrow theme4 />
                        <Button text="Next" noArrow />
                    </div>
                </div>
                <div className={styles.header__progress}>
                    <div className={styles.header__progressState}></div>
                </div>
            </div>
            <div className={[styles.customization__body, styles.body].join(' ')}>
                <div className={styles.body__category}>
                    <div className={styles.body__categoryName}>Kitchen</div>
                    <div className={styles.body__categoryDivider}></div>
                </div>
                <div className={styles.body__list}>
                    <OptionGroup />
                    <OptionGroup />
                    <OptionGroup />
                    <OptionGroup />
                </div>
            </div>
        </div>
    );
};

export default CustomizationUnit;