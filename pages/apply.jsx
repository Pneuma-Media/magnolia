import React, { useEffect } from 'react';
import ApplyTemplate from '../templates/ApplyTemplate/ApplyTemplate';
import useTimeout from '../UTILS/useTimeout';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ReactGA from 'react-ga';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';
import { format } from 'number-currency-format';

const formatPrice = (price) => {
    return format(price, {
        showDecimals: 'NEVER',
    })
};

const schema = yup.object().shape({
    FirstName: yup.string().required('Please enter your first name'),
    LastName: yup.string().required('Please enter your last name'),
    Email: yup.string().email('Please check your email').required('Please enter your email'),
    Description: yup.string().optional(),
});

const Apply = () => {




    const { handleSubmit, register, errors, reset } = useForm({
        resolver: yupResolver(schema)
    });


    const selectorLot = useSelector(state => state.lot);
    const сustomizations = useSelector(state => state.customization.customization);


    // const underCategories = selectorCustomization?.map((data1, i) => {
    //     const obj = { categoryName: data1.name };

    //     const fullObj = data1.underCategories.map((data2) => {
    //         return ({ ...obj, ...{ underCategory: data2.name }, ...{ active_Und_Cat: data2.active } });
    //     })
    //     return (fullObj);
    // });


    const lot = selectorLot.lotData;
    const Plan = selectorLot.planData;


    useTimeout();



    async function sendEmail(e) {
        let html = ``;
        let price = 0;
        сustomizations?.forEach(c => {
            html += `<h3>${c.name}</h3>`
            html += '<ul>';
            c.underCategories.forEach(cc => {
                console.log(cc);
                const option = cc.options.find(o => o.id === cc.active);
                price += option.price
                html += '<li>';
                html += `<span>${cc.name}</span>: <span><b>${option.name}($${formatPrice(option.price)})</b></span>`;
                html += '</li>';
            });
            html += '</ul>';
        })
        console.log('html >>', html);

        let lotName = `№${lot.id} ${lot.usp} (${lot.width}x${lot.length})`;
        let planName = `${Plan.title}`;
        const obj = { ...e, lot: lotName, Plan: planName, customization: html }


        // ReactGA.event({
        //     category: 'User',
        //     action: 'Send Email'
        // });

        console.log(lot);
        console.log(Plan);

        await emailjs.send('gmail', 'applicatoin', obj, 'user_2Bq5Rvgr1IGkLbUwbjy7z');

        await emailjs.send("gmail", "user_report", {
            first_name: e.FirstName,
            lot_id: lot.id,
            lot_area: lot.length * lot.width,
            lot_width: lot.width,
            lot_length: lot.length,
            floorplan_name: Plan.title,
            floorplan_area: Plan.s,
            floorplan_bedrooms: Plan.bedrooms,
            floorplan_bathrooms: Plan.bathrooms,
            floorplan_price: formatPrice(Plan.price),
            customizations_price: formatPrice(price),
            total_price: formatPrice(Plan.price + price),
            customizatoins: html,
            to: e.Email,
        }, 'user_2Bq5Rvgr1IGkLbUwbjy7z');

        reset({
            FirstName: '',
            LastName: '',
            Email: '',
            Description: '',
        });

        window && window.dataLayer && window.dataLayer.push({ event: 'ApplyFormSubmitted' });
    }

    return (
        <>
            <ApplyTemplate
                register={register}
                submit={handleSubmit(sendEmail)}
                errors={errors}
            />
        </>
    );
};

export default Apply;