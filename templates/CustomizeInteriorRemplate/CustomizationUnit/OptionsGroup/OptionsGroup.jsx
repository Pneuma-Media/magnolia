import { useState } from 'react';
import styles from './OptionsGroup.module.scss';
import Checkbox from '../../../../components/UI/Checkbox/Checkbox'

const OptionsGroup = ({ groupName, options, activeOptionId, onChange }) => {

    
    return (
        <div className={styles.group}>
            <div className={styles.group__name}>
                {groupName}
            </div>
            <div className={styles.group__options}>
                {
                    options.map(o => {
                        const optionClasses = [styles.option];
                        if (activeOptionId == o.id) optionClasses.push(styles.option_active);

                        let price = o.price;

                        if (price > 1000) {
                            price = price.toString();
                            price = `${price.slice(0,1)},${price.slice(1,4)}`
                        } else if (price > 10000) {
                            price = price.toString();
                            price = `${price.slice(0,2)},${price.slice(2,5)}`
                        }

                        return (
                            <div className={optionClasses.join(' ')} onClick={() => onChange(o.id)}>
                                <div className={styles.option__label}>
                                    <Checkbox
                                        checked={activeOptionId == o.id}
                                    />
                                    <span>
                                        {o.name}
                                    </span>
                                </div>
                                <div className={styles.option__price}>
                                    +${price}
                                </div>
                            </div>
                        );
                    })
                }


            </div>
        </div>
    );
};

export default OptionsGroup;