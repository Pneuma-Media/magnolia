


const customizationGroup = [
    {
        category: 1,
        active: true,
        name: 'Exterior',
        underCategories: [
            {
                id: 1,
                name: `Roof Pitch`,
                active: null,
                options: [
                    { id: 1, name: `"5/12"`, price: 0 },
                    { id: 2, name: `"7/12"`, price: 5000 },
                ],
            },
            {
                id: 2,
                name: `Shingles`,
                active: null,
                options: [
                    { id: 1, name: `Onyx black`, price: 0 },
                    { id: 2, name: `Teak`, price: 0 },
                    { id: 3, name: `Estate gray`, price: 0 },
                    { id: 4, name: `Colonial slate`, price: 0 },
                    { id: 5, name: `Chateau green `, price: 0 },
                ],
            },
            {
                id: 3,
                name: `Siding`,
                active: null,
                options: [
                    { id: 1, name: `Harbor stone`, price: 0 },
                    { id: 2, name: `White`, price: 0 },
                    { id: 3, name: `Pebble clay`, price: 0 },
                    { id: 4, name: `Warm sandlewood`, price: 0 },
                    { id: 5, name: `Graphite gray`, price: 0 },
                    { id: 6, name: `Mountain pine`, price: 2000 },
                    { id: 7, name: `Blueridge`, price: 2000 },
                    { id: 8, name: `Cypress`, price: 2000 },
                ],
            },
            {
                id: 4,
                name: `Shutters`,
                active: null,
                options: [
                    { id: 9, name: `None`, price: 0 },
                    { id: 1, name: `White`, price: 150 },
                    { id: 2, name: `Clay`, price: 150 },
                    { id: 3, name: `Red`, price: 150 },
                    { id: 4, name: `Blueridge`, price: 150 },
                    { id: 5, name: `Black`, price: 150 },
                    { id: 6, name: `Brown`, price: 150 },
                    { id: 7, name: `Green`, price: 150 },
                ],
            },
            {
                id: 5,
                name: `Doors`,
                active: null,
                options: [
                    { id: 1, name: `Std white`, price: 0 },
                    { id: 2, name: `Arch door 38x82`, price: 400 },
                    { id: 3, name: `9 light rear`, price: 275 },
                    { id: 4, name: `Patio slider`, price: 1200 },
                ],
            },
            // {
            //     id: 6,
            //     name: `Windows`,
            //     active: null,
            //     options: [
            //         { id: 1, name: `30x60`, price: 325 },
            //         { id: 2, name: `36x60`, price: 350 },
            //         { id: 3, name: `60x36 double arch`, price: 125 },
            //         { id: 4, name: `Octagon`, price: 125 },
            //         { id: 5, name: `14x22 bathroom`, price: 125 },
            //         { id: 6, name: `80x14 transom`, price: 350 },
            //     ],
            // },
            {
                id: 7,
                name: `Light`,
                active: null,
                options: [
                    { id: 1, name: `Std white`, price: 0 },
                    { id: 2, name: `White coach`, price: 40 },
                    { id: 3, name: `Oiled bronze light`, price: 125 },
                ],
            },
        ]
    },
    {
        category: 2,
        active: false,
        name: 'Kitchen',
        underCategories: [
            {
                id: 1,
                name: `Countertop`,
                active: null,
                options: [
                    { id: 1, name: `Summer carnival`, price: 0 },
                    { id: 2, name: `Typhone ice`, price: 0 },
                    { id: 3, name: `Tumbled roca`, price: 0 },
                    { id: 4, name: `Toffee`, price: 0 },
                ],
            },
            {
                id: 2,
                name: `Backsplash`,
                active: null,
                options: [
                    { id: 1, name: `Graphite (one row)`, price: 0 },
                    { id: 2, name: `Arrowwood (one row)`, price: 0 },
                    { id: 3, name: `Dark gray (one row)`, price: 0 },
                ],
            },
            {
                id: 3,
                name: `Cabinets`,
                active: null,
                options: [
                    { id: 1, name: `Cherry`, price: 0 },
                    { id: 2, name: `White`, price: 0 },
                    { id: 3, name: `Oak`, price: 0 },
                ],
            },
            {
                id: 4,
                name: `Cabinets size`,
                active: null,
                options: [
                    { id: 1, name: `30 " cabinet`, price: 0 },
                    { id: 2, name: `40" cabinet`, price: 1500 },
                ],
            },
            {
                id: 5,
                name: `Island`,
                active: null,
                options: [
                    { id: 1, name: `None`, price: 0 },
                    { id: 2, name: `Chefs island 4'x7'`, price: 450 },
                    { id: 3, name: `Ultimate table 84x42`, price: 500 },
                    { id: 4, name: `Grand island with pull out shelves`, price: 700 },
                ],
            },
            {
                id: 6,
                name: `Kitchen Sink`,
                active: null,
                options: [
                    { id: 1, name: `Standard`, price: 0 },
                    { id: 2, name: `Arch sprayer kitchen faucet `, price: 450 },
                ],
            },


        ]
    },
    {
        category: 3,
        active: false,
        name: 'Bath',
        underCategories: [
            {
                id: 1,
                name: `Shower/Tub (per room)`,
                active: null,
                options: [
                    { id: 1, name: `Tub/shower combo`, price: 0 },
                    { id: 2, name: `Whirlpool tub drop`, price: 650 },
                    { id: 3, name: `Shower 32x34`, price: 225 },
                    { id: 4, name: `60x30 shower with glass door`, price: 730 },
                    { id: 5, name: `Shower 60x43 with glass door`, price: 800 },
                    { id: 6, name: `Ceramic shower`, price: 1750 },
                ],
            },
            {
                id: 2,
                name: `Bath Vanity`,
                active: null,
                options: [
                    { id: 1, name: `Std vanity w cubbies`, price: 0 },
                    { id: 2, name: `Single vanity w drawers`, price: 450 },
                    { id: 3, name: `DoubLe bowl vanity w drawers`, price: 1000 },
                ],
            },
            {
                id: 3,
                name: `Utility sink`,
                active: null,
                options: [
                    { id: 1, name: `None`, price: 0 },
                    { id: 2, name: `Chrome 4" laundry sink `, price: 400 },
                ],
            },
        ]
    },
    {
        category: 4,
        active: false,
        name: 'Other',
        underCategories: [
            {
                id: 1,
                name: `Trim`,
                active: null,
                options: [
                    { id: 1, name: `White`, price: 0 },
                    { id: 2, name: `Oak`, price: 0 },
                    { id: 3, name: `Cherry`, price: 0 },
                    { id: 4, name: `White wood cove`, price: 1000 },
                    { id: 5, name: `Oak wood cove`, price: 1575 },
                ],
            },
            {
                id: 2,
                name: `Flooring carpet`,
                active: null,
                options: [
                    { id: 1, name: `Angora`, price: 500 },
                    { id: 2, name: `A la mode`, price: 500 },
                    { id: 3, name: `Cookies and cream`, price: 500 },
                    { id: 4, name: `Nougat delight`, price: 500 },
                    { id: 5, name: `Hazelnut`, price: 500 },
                    { id: 6, name: `Neutrino`, price: 500 },
                ],
            },
            {
                id: 3,
                name: `Flooring vynal (per room)`,
                active: null,
                options: [
                    { id: 1, name: `Rustic redwood `, price: 100 },
                    { id: 2, name: `Pacific crest trail`, price: 100 },
                    { id: 3, name: `Mountatin smoke`, price: 100 },
                    { id: 4, name: `Autumn wood`, price: 100 },
                ],
            },
            {
                id: 4,
                name: `Appliances`,
                active: null,
                options: [
                    { id: 1, name: `Black standard`, price: 0 },
                    { id: 2, name: `White standard`, price: 0 },
                    { id: 3, name: `Stainless package`, price: 1900 },
                    { id: 4, name: `Black side-by-side w ice maker`, price: 600 },
                    { id: 5, name: `White side-by-side w ice maker`, price: 600 },
                ],
            },
            {
                id: 5,
                name: `Fireplace`,
                active: null,
                options: [
                    { id: 1, name: `None`, price: 0 },
                    { id: 2, name: `Half stone gas`, price: 2800 },
                    { id: 3, name: `Half stonne wood burning`, price: 1900 },
                    { id: 4, name: `Full stone gas`, price: 3000 },
                    { id: 5, name: `Full stone wood burning `, price: 1500 },
                ],
            },
            {
                id: 6,
                name: `Thermostat`,
                active: null,
                options: [
                    { id: 1, name: `Standard`, price: 0 },
                    { id: 2, name: `Lux upgrade`, price: 200 },
                ],
            },
            {
                id: 7,
                name: `Washer/Dryer`,
                active: null,
                options: [
                    { id: 2, name: `None`, price: 0 },
                    { id: 1, name: `Std washer/dryer`, price: 895 },
                ],
            },
            {
                id: 8,
                name: `Hot Water Heater`,
                active: null,
                options: [
                    { id: 1, name: `40 gallon`, price: 0 },
                    { id: 2, name: `50 gallon`, price: 850 },
                ],
            },


        ]
    },
];

export default customizationGroup;
