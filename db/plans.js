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

import v10_1 from '../assets/img/imgToPlans/10/1.jpg';
import v10_2 from '../assets/img/imgToPlans/10/2.jpg';
import v10_3 from '../assets/img/imgToPlans/10/3.jpg';
import v10_4 from '../assets/img/imgToPlans/10/4.jpg';
import v10_5 from '../assets/img/imgToPlans/10/4.jpg';


const plans = [
    {
        id:1,
        img:p1,
        rums:4,
        toilet:1,
        kitchenSize:9,
        bedrooms:4,
        bathrooms:2,
        ceil:2.4,
        s:1212,
        images:[v1_1, v1_2, v1_3],
        price:10000,
        title:'Hampton - RM1031-2',
    },
    {
        id:2,
        img:p2,
        rums:5,
        toilet:1,
        kitchenSize:9,
        bedrooms:2,
        bathrooms:1,
        ceil:2.4,
        s:123,
        images:[v2_1, v2_2, v2_3],
        price:20000,
        title:'Advantage - 3280 217',
    },
    {
        id:3,
        img:p3,
        rums:2,
        toilet:2,
        kitchenSize:8,
        bedrooms:1,
        bathrooms:3,
        ceil:2.8,
        s:654,
        images:[v3_1, v3_2, v3_3],
        price:30000,
        title:'Advantage 1680 265',
    },
    {
        id:4,
        img:p4,
        rums:8,
        toilet:4,
        kitchenSize:3,
        bedrooms:4,
        bathrooms:3,
        ceil:2.6,
        s:300,
        images:[v4_1, v4_2, v4_3, v4_4],
        price:40000,
        title:'Advantage FS1324-9',
    },
    {
        id:5,
        img:p5,
        rums:5,
        toilet:5,
        kitchenSize:7,
        bedrooms:1,
        bathrooms:1,
        ceil:3,
        s:200,
        images:[v5_1, v5_2, v5_3, v5_4],
        price:50000,
        title:'Hampton - RM1031-2',
    },
    {
        id:6,
        img:p6,
        rums:9,
        toilet:5,
        kitchenSize:5,
        bedrooms:2,
        bathrooms:2,
        ceil:4,
        s:432,
        images:[v6_1, v6_2, v6_3 ],
        price:60000,
        title:'Hampton - RM1031-2',
    },
    {
        id:7,
        img:p7,
        rums:6,
        toilet:3,
        kitchenSize:12,
        bedrooms:5,
        bathrooms:4,
        ceil:4,
        s:555,
        images:[v7_1, v7_2, v7_3, v7_4 ],
        price:70000,
        title:'Hampton - RM1031-2',
    },
    {
        id:8,
        img:p8,
        rums:7,
        toilet:2,
        kitchenSize:5,
        bedrooms:4,
        bathrooms:2,
        ceil:2.6,
        s:239,
        images:[v8_1, v8_2, v8_3, v8_4 ],
        price:80000,
        title:'Advantage FS1324-9',
    },
    {
        id:9,
        img:p9,
        rums:7,
        toilet:1,
        kitchenSize:4,
        bedrooms:3,
        bathrooms:3,
        ceil:3,
        s:346,
        images:[v9_1, v9_2, v9_3, v9_4 ],
        price:90000,
        title:'Advantage - 3280 217',
    },
    {
        id:10,
        img:p10,
        rums:3,
        toilet:3,
        kitchenSize:3,
        bedrooms:4,
        bathrooms:4,
        ceil:2,
        s:111,
        images:[v10_1, v10_2, v10_3, v10_4, v10_5 ],
        price:1000000,
        title:'Advantage - 32nnw3345 55',
    },
]

export default plans;