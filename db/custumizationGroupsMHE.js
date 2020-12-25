


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
                    { id: 1, name: `onyx black`, price: 0 },
                    { id: 2, name: `teak`, price: 0 },
                    { id: 3, name: `estate gray`, price: 0 },
                    { id: 4, name: `colonial slate`, price: 0 },
                    { id: 5, name: `chateau green `, price: 0 },
                ],
            },
            {
                id: 3,
                name: `Siding`,
                active: null,
                options: [
                    { id: 1, name: `Harbor stone`, price: 0 },
                    { id: 2, name: `White`, price: 0 },
                    { id: 3, name: `Pebble Clay`, price: 0 },
                    { id: 4, name: `Warm sandlewood`, price: 0 },
                    { id: 5, name: `graphite gray`, price: 0 },
                    { id: 6, name: `mountain pine`, price: 2000 },
                    { id: 7, name: `blueridge`, price: 2000 },
                    { id: 8, name: `cypress`, price: 2000 },
                ],
            },
            {
                id: 4,
                name: `Shutters`,
                active: null,
                options: [
                    { id: 1, name: `white`, price: 150 },
                    { id: 2, name: `clay`, price: 150 },
                    { id: 3, name: `red`, price: 150 },
                    { id: 4, name: `blueridge`, price: 150 },
                    { id: 5, name: `black`, price: 150 },
                    { id: 6, name: `brown`, price: 150 },
                    { id: 7, name: `green`, price: 150 },
                ],
            },
            {
                id: 5,
                name: `Doors`,
                active: null,
                options: [
                    { id: 1, name: `std white`, price: 0 },
                    { id: 2, name: `Arch door 38x82`, price: 400 },
                    { id: 3, name: `9 light rear`, price: 275 },
                    { id: 4, name: `patio slider`, price: 1200 },
                ],
            },
            {
                id: 6,
                name: `Window`,
                active: null,
                options: [
                    { id: 1, name: `30x60`, price: 325 },
                    { id: 2, name: `36x60`, price: 350 },
                    { id: 3, name: `60x36 double arch`, price: 125 },
                    { id: 4, name: `octagon`, price: 125 },
                    { id: 5, name: `14x22 bathroom`, price: 125 },
                    { id: 6, name: `80x14 transom`, price: 350 },
                ],
            },
            {
                id: 7,
                name: `Light`,
                active: null,
                options: [
                    { id: 1, name: `std white`, price: 0 },
                    { id: 2, name: `white coach`, price: 40 },
                    { id: 3, name: `oiled bronze light`, price: 125 },
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
                    { id: 2, name: `typhone ice`, price: 0 },
                    { id: 3, name: `Tumbled roca`, price: 0 },
                    { id: 4, name: `Toffee`, price: 0 },
                ],
            },
            {
                id: 2,
                name: `Backsplash`,
                active: null,
                options: [
                    { id: 1, name: `graphite (one row)`, price: 0 },
                    { id: 2, name: `arrowwood (one row)`, price: 0 },
                    { id: 3, name: `dark gray (one row)`, price: 0 },
                ],
            },
            {
                id: 3,
                name: `Cabinets`,
                active: null,
                options: [
                    { id: 1, name: `cherry`, price: 0 },
                    { id: 2, name: `white`, price: 0 },
                    { id: 3, name: `oak`, price: 0 },
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
                    { id: 1, name: `no`, price: 0 },
                    { id: 2, name: `chefs island 4'x7'`, price: 450 },
                    { id: 3, name: `ultimate table 84x42`, price: 500 },
                    { id: 4, name: `grand island w pull out shelves`, price: 700 },
                ],
            },
            {
                id: 6,
                name: `Kitchen Sink`,
                active: null,
                options: [
                    { id: 1, name: `standard`, price: 0 },
                    { id: 2, name: `arch sprayer kitchen faucet `, price: 450 },
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
                    { id: 1, name: `tub/shower combo`, price: 0 },
                    { id: 2, name: `whirlpool tub drop`, price: 650 },
                    { id: 3, name: `shower 32x34`, price: 225 },
                    { id: 4, name: `60x30 shower with glass door`, price: 730 },
                    { id: 5, name: `shower 60x43 with glass door`, price: 800 },
                    { id: 6, name: `ceramic shower`, price: 1750 },
                ],
            },
            {
                id: 2,
                name: `Bath Vanity`,
                active: null,
                options: [
                    { id: 1, name: `std vanity w cubbies`, price: 0 },
                    { id: 2, name: `single vanity w drawers`, price: 450 },
                    { id: 3, name: `doulbe bowl vanity w drawers`, price: 1000 },
                ],
            },
            {
                id: 3,
                name: `Utility sink`,
                active: null,
                options: [
                    { id: 1, name: `standard`, price: 0 },
                    { id: 2, name: `chrome 4" laundry sink `, price: 400 },
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
                    { id: 1, name: `white`, price: 0 },
                    { id: 2, name: `oak`, price: 0 },
                    { id: 3, name: `cherry`, price: 0 },
                    { id: 4, name: `white wood cove`, price: 1000 },
                    { id: 5, name: `oak wood cove`, price: 1575 },
                ],
            },
            {
                id: 2,
                name: `Flooring carpet`,
                active: null,
                options: [
                    { id: 1, name: `angora`, price: 500 },
                    { id: 2, name: `a la mode`, price: 500 },
                    { id: 3, name: `cookies and cream`, price: 500 },
                    { id: 4, name: `nougat delight`, price: 500 },
                    { id: 5, name: `hazelnut`, price: 500 },
                    { id: 6, name: `neutrino`, price: 500 },
                ],
            },
            {
                id: 3,
                name: `Flooring vynal (per room)`,
                active: null,
                options: [
                    { id: 1, name: `rustic redwood `, price: 100 },
                    { id: 2, name: `pacific crest trail`, price: 100 },
                    { id: 3, name: `mountatin smoke`, price: 100 },
                    { id: 4, name: `autumn wood`, price: 100 },
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
                    { id: 1, name: `no`, price: 0 },
                    { id: 2, name: `half stone gas`, price: 2800 },
                    { id: 3, name: `half stonne wood burning`, price: 1900 },
                    { id: 4, name: `full stone gas`, price: 3000 },
                    { id: 5, name: `full stone wood burning `, price: 1500 },
                ],
            },
            {
                id: 6,
                name: `Thermostat`,
                active: null,
                options: [
                    { id: 1, name: `standard`, price: 0 },
                    { id: 2, name: `Lux upgrade`, price: 200 },
                ],
            },
            {
                id: 7,
                name: `Washer/Dryer`,
                active: null,
                options: [
                    { id: 2, name: `no`, price: 0 },
                    { id: 1, name: `std washer/dryer`, price: 895 },
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
