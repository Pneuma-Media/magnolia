


const customizationGroup = [
    {
        category: 1,
        active: true,
        name: 'MHE Exterior',
        activeSubCategory: 1,
        underCategories: [
            {
                id: 1,
                name: 'Shingles',
                active: null,
                options: [
                    { id: 1, name: 'name 1', price: 20 },
                    { id: 2, name: 'name 2', price: 30 },
                    { id: 3, name: 'name 3', price: 50 },
                ],
            },
            {
                id: 2,
                name: 'Siding',
                active: null,
                options: [
                    { id: 4, name: 'name 4', price: 240 },
                    { id: 5, name: 'name 5', price: 304 },
                    { id: 6, name: 'name 6', price: 540 },
                ],
            },
            {
                id: 3,
                name: 'Shutters',
                active: null,
                options: [
                    { id: 7, name: 'name 7', price: 89 },
                    { id: 8, name: 'name 8', price: 65 },
                    { id: 9, name: 'name 9', price: 67 },
                ],
            },
        ]
    },
    {
        category: 2,
        active: false,
        name: 'MHE Kitchen',
        activeSubCategory: 4,
        underCategories: [
            {
                id: 4,
                name: 'Countertop',
                active: null,
                options: [
                    { id: 10, name: 'name 1', price: 11 },
                    { id: 11, name: 'name 2', price: 22 },
                    { id: 12, name: 'name 3', price: 33 },
                ],
            },
            {
                id: 5,
                name: 'Backsplash',

                active: null,
                options: [
                    { id: 13, name: 'name 4', price: 859 },
                    { id: 14, name: 'name 5', price: 655 },
                    { id: 15, name: 'name 6', price: 657 },
                ],
            },
            {
                id: 6,
                name: 'Cabinets',

                active: null,
                options: [
                    { id: 17, name: 'name 7', price: 829 },
                    { id: 18, name: 'name 8', price: 625 },
                    { id: 19, name: 'name 9', price: 627 },
                ],
            },
        ]
    },
    {
        category: 3,
        active: false,
        name: 'MHE Other',
        activeSubCategory: 7,
        underCategories: [
            {
                id: 7,
                name: 'Flooring',

                active: null,
                options: [
                    { id: 20, name: 'name 1', price: 11 },
                    { id: 21, name: 'name 2', price: 22 },
                    { id: 22, name: 'name 3', price: 33 },
                    { id: 23, name: 'name 2', price: 22 },
                    { id: 24, name: 'name 3', price: 33 },
                ],
            },
        ]
    },


];

export default customizationGroup;
