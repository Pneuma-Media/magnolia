import React, { useEffect } from 'react';
import ApplyTemplate from '../templates/ApplyTemplate/ApplyTemplate';
import useTimeout from '../UTILS/useTimeout';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ReactGA from 'react-ga';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';


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



    function sendEmail(e) {
        let html = ``;
        сustomizations?.forEach(c => {
            html += `<h2>${c.name}</h2>`
            html += '<ul>';
            c.underCategories.forEach(cc => {
                console.log(cc);
                const option = cc.options.find(o => o.id === cc.active);
                html += '<li>';
                html += `<span>${cc.name}</span>: <span><b>${option.name}($${option.price})</b></span>`;
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


        emailjs.send('gmail', 'applicatoin', obj, 'user_2Bq5Rvgr1IGkLbUwbjy7z')
            .then((result) => {
                reset({
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    Description: '',
                });
                console.log('sdf');
            }, (error) => {

            });
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