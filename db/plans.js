import p1 from '../assets/img/plans/p1.jpeg';
import p2 from '../assets/img/plans/p2.jpeg';
import p3 from '../assets/img/plans/p3.jpeg';
import p4 from '../assets/img/plans/p4.jpeg';
import p5 from '../assets/img/plans/p5.png';
import p6 from '../assets/img/plans/p6.jpeg';
import p7 from '../assets/img/plans/p7.jpeg';
import p8 from '../assets/img/plans/p8.jpeg';
import p9 from '../assets/img/plans/p9.jpeg';
import p10 from '../assets/img/plans/p10.png';

import v1_1 from '../assets/img/imgToPlans/1/1.jpg';
import v1_2 from '../assets/img/imgToPlans/1/2.jpg';
import v1_3 from '../assets/img/imgToPlans/1/3.jpg';

import v2_1 from '../assets/img/imgToPlans/2/1.jpg';
import v2_2 from '../assets/img/imgToPlans/2/2.jpg';
import v2_3 from '../assets/img/imgToPlans/3/3.jpg';

import v3_1 from '../assets/img/imgToPlans/3/1.jpg';
import v3_2 from '../assets/img/imgToPlans/3/2.jpg';
import v3_3 from '../assets/img/imgToPlans/3/3.jpg';

import v4_1 from '../assets/img/imgToPlans/4/1.jpg';
import v4_2 from '../assets/img/imgToPlans/4/2.jpg';
import v4_3 from '../assets/img/imgToPlans/4/3.jpg';
import v4_4 from '../assets/img/imgToPlans/4/4.jpg';

import v5_1 from '../assets/img/imgToPlans/5/1.jpg';
import v5_2 from '../assets/img/imgToPlans/5/2.jpg';
import v5_3 from '../assets/img/imgToPlans/5/3.jpg';
import v5_4 from '../assets/img/imgToPlans/5/4.jpg';

import v6_1 from '../assets/img/imgToPlans/6/1.jpg';
import v6_2 from '../assets/img/imgToPlans/6/2.jpg';
import v6_3 from '../assets/img/imgToPlans/6/3.jpg';

import v7_1 from '../assets/img/imgToPlans/7/1.jpg';
import v7_2 from '../assets/img/imgToPlans/7/2.jpg';
import v7_3 from '../assets/img/imgToPlans/7/3.jpg';
import v7_4 from '../assets/img/imgToPlans/7/4.jpg';

import v8_1 from '../assets/img/imgToPlans/8/1.jpg';
import v8_2 from '../assets/img/imgToPlans/8/2.jpg';
import v8_3 from '../assets/img/imgToPlans/8/3.jpg';
import v8_4 from '../assets/img/imgToPlans/8/4.jpg';

import v9_1 from '../assets/img/imgToPlans/9/1.jpg';
import v9_2 from '../assets/img/imgToPlans/9/2.jpg';
import v9_3 from '../assets/img/imgToPlans/9/3.jpg';
import v9_4 from '../assets/img/imgToPlans/9/4.jpg';

import NoPhoto from '../assets/img/nophotoavailable.png';

const plans = [
    {
        id: 1,
        img: NoPhoto,
        rums: 4,
        toilet: 1,
        kitchenSize: 9,
        bedrooms: 3,
        bathrooms: 2,
        ceil: 2.4,
        s: 1200,
        images: [NoPhoto],
        price: 66335.10,
        title: 'Barton - MHE',
        manufacturer: 'MHE',
        type: 'typeA',
    },
    {
        id: 2,
        img: NoPhoto,
        rums: 5,
        toilet: 1,
        kitchenSize: 9,
        bedrooms: 3,
        bathrooms: 2,
        ceil: 2.4,
        s: 1200,
        images: [NoPhoto],
        price: 66335.10,
        title: 'Barton II - MHE',
        manufacturer: 'MHE',
        type: 'typeA',
    },
    {
        id: 3,
        img: NoPhoto,
        rums: 2,
        toilet: 2,
        kitchenSize: 8,
        bedrooms: 3,
        bathrooms: 2,
        ceil: 2.8,
        s: 1500,
        images: [NoPhoto],
        price: 78061.10,
        title: 'Glenn Creek - MHE',
        manufacturer: 'MHE',
        type: 'typeA',
    },
    {
        id: 4,
        img: NoPhoto,
        rums: 8,
        toilet: 4,
        kitchenSize: 3,
        bedrooms: 4,
        bathrooms: 2,
        ceil: 2.6,
        s: 1600,
        images: [NoPhoto],
        price: 77736.10,
        title: 'Hazlenut -  MHE',
        manufacturer: 'MHE',
        type: 'typeA',
    },
    {
        id: 5,
        img: NoPhoto,
        rums: 5,
        toilet: 5,
        kitchenSize: 7,
        bedrooms: 3,
        bathrooms: 2,
        ceil: 3,
        s: 1100,
        images: [NoPhoto],
        price: 66214.20,
        title: 'Dyson - Fairmont',
        manufacturer: 'Fairmont',
        type: 'typeA',
    },
    {
        id: 6,
        img: NoPhoto,
        rums: 9,
        toilet: 5,
        kitchenSize: 5,
        bedrooms: 3,
        bathrooms: 2,
        ceil: 4,
        s: 1100,
        images: [NoPhoto],
        price: 64322.70,
        title: 'Davinci - Fairmont',
        manufacturer: 'Fairmont',
        type: "typeA",
    },
    {
        id: 7,
        img: NoPhoto,
        rums: 6,
        toilet: 3,
        kitchenSize: 12,
        bedrooms: 3,
        bathrooms: 2,
        ceil: 4,
        s: 1300,
        images: [NoPhoto],
        price: 68178.50,
        title: 'Edison - Fairmont',
        manufacturer: 'Fairmont',
        type: "typeA",
    },
    {
        id: 8,
        img: NoPhoto,
        rums: 7,
        toilet: 2,
        kitchenSize: 5,
        bedrooms: 3,
        bathrooms: 2,
        ceil: 2.6,
        s: 1400,
        images: [NoPhoto],
        price: 70358.60,
        title: 'The Franklin - Fairmont',
        manufacturer: 'Fairmont',
        type: "typeA",
    },
    {
        id: 9,
        img: NoPhoto,
        rums: 7,
        toilet: 1,
        kitchenSize: 4,
        bedrooms: 4,
        bathrooms: 2,
        ceil: 3,
        s: 1500,
        images: [NoPhoto],
        price: 78880.10,
        title: 'Leonardo - Fairmont',
        manufacturer: 'Fairmont',
        type: "typeA",
    },
]

export default plans;