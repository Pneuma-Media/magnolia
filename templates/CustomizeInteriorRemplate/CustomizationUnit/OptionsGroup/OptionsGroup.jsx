import { useState } from 'react';
import { format } from 'number-currency-format';

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
                                   ${format(o.price, {
                            spacing: true,
                            showDecimals: 'NEVER',
                        })}
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