import c1_1_1 from '../assets/img/groupCollections/category1/Shingles/1.jpg';
import c1_1_2 from '../assets/img/groupCollections/category1/Shingles/2.jpg';
import c1_1_3 from '../assets/img/groupCollections/category1/Shingles/3.jpg';

import c1_2_1 from '../assets/img/groupCollections/category1/Siding/1.jpg';
import c1_2_2 from '../assets/img/groupCollections/category1/Siding/2.jpg';
import c1_2_3 from '../assets/img/groupCollections/category1/Siding/3.jpg';

import c1_3_1 from '../assets/img/groupCollections/category1/Shutters/1.jpg';
import c1_3_2 from '../assets/img/groupCollections/category1/Shutters/2.jpg';
import c1_3_3 from '../assets/img/groupCollections/category1/Shutters/3.jpg';



import c2_1_1 from '../assets/img/groupCollections/category2/Countertop/1.jpg';
import c2_1_2 from '../assets/img/groupCollections/category2/Countertop/2.jpg';
import c2_1_3 from '../assets/img/groupCollections/category2/Countertop/3.jpg';

import c2_2_1 from '../assets/img/groupCollections/category2/Backsplash/1.jpg';
import c2_2_2 from '../assets/img/groupCollections/category2/Backsplash/2.jpg';
import c2_2_3 from '../assets/img/groupCollections/category2/Backsplash/3.jpg';

import c2_3_1 from '../assets/img/groupCollections/category2/Cabinets/1.jpg';
import c2_3_2 from '../assets/img/groupCollections/category2/Cabinets/2.jpg';
import c2_3_3 from '../assets/img/groupCollections/category2/Cabinets/3.jpg';

import c3_1_1 from '../assets/img/groupCollections/category3/Flooring/1.jpg';
import c3_1_2 from '../assets/img/groupCollections/category3/Flooring/2.jpg';
import c3_1_3 from '../assets/img/groupCollections/category3/Flooring/3.jpg';
import c3_1_4 from '../assets/img/groupCollections/category3/Flooring/4.jpg';
import c3_1_5 from '../assets/img/groupCollections/category3/Flooring/5.jpg';


const customizationGroup = [
    {
        category: 1,
        name: 'Exterior Customizations',
        underCategories: [
            {
                id: 1,
                name: 'Shingles',
                active: 1,
                options: [
                    { id: 1, name: 'name 1', img: c1_1_1, price: 20 },
                    { id: 2, name: 'name 2', img: c1_1_2, price: 30 },
                    { id: 3, name: 'name 3', img: c1_1_3, price: 50 },
                ],
            },
            {
                id: 2,
                name: 'Siding',
                active: 4,
                options: [
                    { id: 4, name: 'name 4', img: c1_2_1, price: 240 },
                    { id: 5, name: 'name 5', img: c1_2_2, price: 304 },
                    { id: 6, name: 'name 6', img: c1_2_3, price: 540 },
                ],
            },
            {
                id: 3,
                name: 'Shutters',
                active: 7,
                options: [
                    { id: 7, name: 'name 7', img: c1_3_1, price: 89 },
                    { id: 8, name: 'name 8', img: c1_3_2, price: 65 },
                    { id: 9, name: 'name 9', img: c1_3_3, price: 67 },
                ],
            },
        ]
    },
    {
        category: 2,
        name: 'Kitchen Customizations',
        underCategories: [
            {
                id: 4,
                name: 'Countertop',
                active: 10,
                options: [
                    { id: 10, name: 'name 1', img: c2_1_1, price: 11 },
                    { id: 11, name: 'name 2', img: c2_1_2, price: 22 },
                    { id: 12, name: 'name 3', img: c2_1_3, price: 33 },
                ],
            },
            {
                id: 5,
                name: 'Backsplash',
                active: 13,
                options: [
                    { id: 13, name: 'name 4', img: c2_2_1, price: 859 },
                    { id: 14, name: 'name 5', img: c2_2_2, price: 655 },
                    { id: 15, name: 'name 6', img: c2_2_3, price: 657 },
                ],
            },
            {
                id: 6,
                name: 'Cabinets',
                active: 17,
                options: [
                    { id: 17, name: 'name 7', img: c2_3_1, price: 829 },
                    { id: 18, name: 'name 8', img: c2_3_2, price: 625 },
                    { id: 19, name: 'name 9', img: c2_3_3, price: 627 },
                ],
            },
        ]
    },
    {
        category: 7,
        name: 'Other Customizations',
        underCategories: [
            {
                id: 7,
                name: 'Flooring',
                active: 20,
                options: [
                    { id: 20, name: 'name 1', img: c3_1_1, price: 11 },
                    { id: 21, name: 'name 2', img: c3_1_2, price: 22 },
                    { id: 22, name: 'name 3', img: c3_1_3, price: 33 },
                    { id: 23, name: 'name 2', img: c3_1_4, price: 22 },
                    { id: 24, name: 'name 3', img: c3_1_5, price: 33 },
                ],
            },
        ]
    },

   
];

export default customizationGroup;
