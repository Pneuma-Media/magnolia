import React, { useEffect } from 'react';
import ApplyTemplate from '../templates/ApplyTemplate/ApplyTemplate';
import useTimeout from '../UTILS/useTimeout';
import { useForm } from 'react-hook-form';
import ReactGA from 'react-ga';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';


const Apply = () => {

    const { handleSubmit, register } = useForm();
    const selectorLot = useSelector(state => state.lot);
    const selectorCustomization = useSelector(state => state.customization.customization);
  

    const underCategories = selectorCustomization?.map((data1,i) => {
      const obj = {categoryName:data1.name};

      const fullObj =  data1.underCategories.map((data2) => {
          console.log(data2);
          return({...obj, ...{underCategory:data2.name}, ...{active_Und_Cat:data2.active}});
      })
      return(fullObj);
    });


    const lot = selectorLot.lotData?.id;
    const Plan = selectorLot.planData?.id;


    useTimeout();

    let html = ``;
    underCategories.forEach(c => {
        html += '<ul>';
        c.forEach(cc => {
            console.log(cc);
            html += '<li>';
            html += `<span><b>${cc.categoryName}</b></span> >>> <span>${cc.underCategory}</span> >>> <span>active_Und_Cat   <b>${cc.active_Und_Cat}</b></span>`;
            html += '</li>';
        });
        html += '</ul>';
    })
   

    function sendEmail(e) {

       const obj = {...e, ...{lot}, ...{Plan}, ...{customization:html}}

     
        // ReactGA.event({
        //     category: 'User',
        //     action: 'Send Email'
        // });
    
       // e.preventDefault();

        emailjs.send('service_lraww6p', 'Home_configuration_lead', obj, 'user_n2iF0lXWDz5Qyjph1IzZO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                 console.log(error.text);
            });
    }

    return (
        <>
            <ApplyTemplate
                register={register}
                submit={handleSubmit(sendEmail)}
            />
        </>
    );
};

export default Apply;