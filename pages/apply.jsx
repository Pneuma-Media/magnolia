import React, { useState } from 'react';
import ApplyTemplate from '../templates/ApplyTemplate/ApplyTemplate';
import useTimeout from '../UTILS/useTimeout';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ReactGA from 'react-ga';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';
import { format } from 'number-currency-format';
import { getLetter } from '../assets/letter';
import imgToBase64 from '../UTILS/imgToBase64';

const formatPrice = (price) => {
    return format(price, {
        showDecimals: 'NEVER',
    })
};

const schema = yup.object().shape({
    FirstName: yup.string().required('Please enter your first name'),
    LastName: yup.string().required('Please enter your last name'),
    phone: yup.string().required('Please enter your phone number'),
    Email: yup.string().email('Please check your email').required('Please enter your email'),
    Description: yup.string().optional(),
});

const Apply = () => {



    const [isCompleted, setCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit, register, errors, reset } = useForm({
        resolver: yupResolver(schema)
    });


    const selectorLot = useSelector(state => state.lot);
    const сustomizations = useSelector(state => state.customization.customization);
    const floorplan = useSelector(state => state.floorplan.floorplan);

    const lot = selectorLot.lotData;
    const Plan = selectorLot.planData;


    useTimeout();

    async function sendEmail(e) {
        setIsLoading(true);
        let html = ``;
        let price = 0;
        сustomizations?.forEach(c => {
            html += `<h3 style="text-align: center;">${c.name}</h3>`
            html += '<ul style="list-style: none; text-align: center;  padding-left: 0;">';
            c.underCategories.forEach(cc => {
                const option = cc.options.find(o => o.id === cc.active);

                price += option?.price

                let shownFieldToUser = `<span>${option?.name} ($${formatPrice(option?.price)})</span>`
                if (option?.type === 'textarea') shownFieldToUser = `<span>${option.value ? option?.value : 'not specified'}</span>`;

                html += '<li style="text-align: center; margin-left: 0;">';
                html += `<span>${cc.name}</span>: ${shownFieldToUser}`;
                html += '</li>';

            });
            html += '</ul>';
        })

        if (e.Description) {
            html += `<h3 style="text-align: center;">Misc Notes</h3>`;
            html += '<ul style="list-style: none; text-align: center;  padding-left: 0;">';
            html += '<li style="text-align: center; margin-left: 0;">';
            html += `${e.Description}`;
            html += '</li>';
            html += '</ul>';
        }

        let financeBlock = ``;
        if(floorplan.manufacturer === 'Fairmont') {
            financeBlock += '<h3 style="text-align: center;">Financing Information:</h3>';
            financeBlock += `<p style="text-align: center;margin:0;">Manufacturer: Fairmont Homes, LLC</p>`;
            financeBlock += '<ul style="list-style: none; text-align: center;  padding-left: 0;">';
            financeBlock += '<li style="text-align: center; margin-left: 0;">'
            financeBlock += `Model, Size: ${floorplan.title} <b>${floorplan.width} x ${floorplan.length} Fairmont Builder</b>`;
            financeBlock += '</li>';
            financeBlock += '<li style="text-align: center; margin-left: 0;">Name of Community: Courtyard Communities: 510 N. Range St. Westport, IN 47283</li>';
            financeBlock += '</ul>';
        }else if (floorplan.manufacturer === 'MHE') {
            financeBlock += '<h3 style="text-align: center;">Financing Information:</h3>';
            financeBlock += `<p style="text-align: center;margin:0;">Manufacturer: Manufactured Housing Enterprises, Inc</p>`;
            financeBlock += '<ul style="list-style: none; text-align: center;  padding-left: 0;">';
            financeBlock += '<li style="text-align: center; margin-left: 0;">'
            financeBlock += `Model, Size: ${floorplan.title} ${floorplan.width} x ${floorplan.length} <b>MHE Builder</b>`;
            financeBlock += '</li>';
            financeBlock += '<li style="text-align: center; margin-left: 0;">Name of Community: Courtyard Communities: 510 N. Range St. Westport, IN 47283</li>';
            financeBlock += '</ul>';
        }

        let lotName = `№${lot.id}`;
        let planName = `${Plan.title}`;
        const obj = { ...e, lot: lotName, Plan: planName, customization: html, financeBlock: financeBlock }


        // ReactGA.event({
        //     category: 'User',
        //     action: 'Send Email'
        // });

        // console.log(lot);
        // console.log(Plan);

        await emailjs.send('service_pb301o9', 'applicatoin', obj, 'user_2Bq5Rvgr1IGkLbUwbjy7z');
        await emailjs.send("service_pb301o9", "user_report", {
            preview: getLetter(Plan.images.map(i => `https://rrc-home-configurator-git-dev-vpilip.vercel.app${i}`)),
            first_name: e.FirstName,
            last_name: e.LastName,
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
            financeBlock: financeBlock,
            to: e.Email,
        }, 'user_2Bq5Rvgr1IGkLbUwbjy7z');

        reset({
            FirstName: '',
            LastName: '',
            Email: '',
            phone: '',
            Description: '',
        });
        setCompleted(true);
        window && window.dataLayer && window.dataLayer.push({ event: 'ApplyFormSubmitted' });
    }

    return (
        <>
            <ApplyTemplate
                register={register}
                submit={handleSubmit(sendEmail)}
                errors={errors}
                isCompleted={isCompleted}
                isLoading={isLoading}
            />
        </>
    );
};

export default Apply;