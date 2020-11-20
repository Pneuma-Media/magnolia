import React, { useState, useEffect } from 'react';
import styles from './heder.module.scss';
import cx from 'classnames';
import { useRouter } from 'next/router';



const tabs = [
    { id: 1, name: 'Choose your spot', active: false, visit: false, link: '/choose_your_spot' },
    { id: 2, name: 'Select Floorplan', active: false, visit: false, link: '/select_floorplan' },
    { id: 3, name: 'Detailed Floorplan', active: false, visit: false, link: '/detailed_floorplan' },
    { id: 4, name: 'Customize Interior', active: false, visit: false, link: '/customize_lnterior' },
    { id: 5, name: 'Apply', active: false, visit: false, link: '/apply' },
]

const Heder = () => {

    const router = useRouter();

    // const [stateTubs, setStateTabs] = useState(tabs);


    // const applyHandler = (state) => {
    //     const newState = [...state];
    //     const apply = newState.find(e => e.name === 'Apply');

    //     if (router.pathname === '/customize_lnterior') { 
    //         apply.active = true;
    //         apply.visit = true;
    //     }else{
    //         apply.active = false;
    //         apply.visit = false;
    //     }
    //     setStateTabs(newState);
    // }

    // const selectTab = (id) => {
    //     const newState = [...stateTubs];
    //     newState.forEach(element => {
    //         element.active = false;
    //         if (element.id === id && element.visit) {
    //             element.active = true;
    //             router.replace(element.link);
    //         }
           
    //     });
    //     applyHandler(newState);
    // }

    // const handlerTubs = () => {
    //     const newState = [...stateTubs];
    //     newState.forEach(element => {
    //         element.active = false;
    //         if (element.link === router.pathname) {
    //             element.active = true;
    //             element.visit = true;
    //         }
    //     });
       
    //     applyHandler(newState);
    //    // setStateTabs(newState);
    // }


    // useEffect(() => {
    //     handlerTubs();
    // }, [])

    const activeTab = tabs.find(e => e.link === router.pathname);

    const navigate = (id) => {
        if(id < activeTab.id || id === 5) {
            const { link } = tabs.find(e => e.id === id)
            router.replace(link);
        }
    }

    return (
        <div className={styles.Heder}>
            {
                tabs.map((data) => {
                    console.log(data);
                    return (
                        <span
                            onClick={() => navigate(data.id)}
                            className={cx(styles.tab, {
                                [styles.active]: data.id === activeTab.id,
                                [styles.visit]: data.id < activeTab.id,
                                [styles.apply]:data.link === '/apply' && activeTab.id === 4,
                            })}
                            key={data.id}>{data.name}
                        </span>
                    )
                })
            }
        </div>
    );
};

export default Heder;