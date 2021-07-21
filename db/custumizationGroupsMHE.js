const customizationGroup = [
  {
    category: 1,
    active: true,
    name: "Exterior",
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
          { id: 1, name: `Onyx Black`, price: 0 },
          { id: 2, name: `Teak`, price: 0 },
          { id: 3, name: `Estate Gray`, price: 0 },
          { id: 4, name: `Colonial Slate`, price: 0 },
          { id: 5, name: `Chateau Green `, price: 0 },
        ],
      },
      {
        id: 3,
        name: `Siding`,
        active: null,
        options: [
          { id: 1, name: `Harbor Stone`, price: 0 },
          { id: 2, name: `White`, price: 0 },
          { id: 3, name: `Pebble Clay`, price: 0 },
          { id: 4, name: `Warm Sandlewood`, price: 0 },
          { id: 5, name: `Graphite Gray`, price: 0 },
          { id: 6, name: `Mountain Pine`, price: 2000 },
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
      // {
      //   id: 5,
      //   name: `Doors`,
      //   active: null,
      //   options: [
      //     { id: 1, name: `Standard White`, price: 0 },
      //     { id: 2, name: `Arch Door 38x82`, price: 400 },
      //     { id: 3, name: `9 Light Rear`, price: 275 },
      //     { id: 4, name: `Patio Slider`, price: 1200 },
      //   ],
      // },
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
        name: `Outdoor Lighting`,
        active: null,
        options: [
          { id: 1, name: `Standard White`, price: 0 },
          { id: 2, name: `White Coach`, price: 40 },
          { id: 3, name: `Oiled Bronze Light`, price: 125 },
        ],
      },
    ],
  },
  {
    category: 2,
    active: false,
    name: "Kitchen",
    underCategories: [
      {
        id: 1,
        name: `Countertop`,
        active: null,
        options: [
          { id: 1, name: `Summer Сarnival`, price: 0 },
          { id: 2, name: `Typhone Ice`, price: 0 },
          { id: 3, name: `Tumbled Roca`, price: 0 },
          { id: 4, name: `Toffee`, price: 0 },
        ],
      },
      {
        id: 2,
        name: `Backsplash`,
        active: null,
        options: [
          { id: 1, name: `Graphite (One Row)`, price: 0 },
          { id: 2, name: `Arrowwood (One Row)`, price: 0 },
          { id: 3, name: `Dark gray (One Row)`, price: 0 },
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
          { id: 1, name: `Cabinet (30")`, price: 0 },
          { id: 2, name: `Сabinet (40")`, price: 1500 },
        ],
      },
      {
        id: 5,
        name: `Island`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `Chef's Island (48"x84")`, price: 450 },
          { id: 3, name: `Ultimate Table 84"x4`, price: 500 },
          { id: 4, name: `Grand Island With Pull Out Shelves`, price: 700 },
        ],
      },
      {
        id: 6,
        name: `Kitchen Sink`,
        active: null,
        options: [
          { id: 1, name: `Standard`, price: 0 },
          { id: 2, name: `Arch Sprayer Kitchen Faucet `, price: 450 },
        ],
      },
    ],
  },
  {
    category: 3,
    active: false,
    name: "Bath",
    underCategories: [
      {
        id: `1-master-bath-shower`,
        name: `Master Bathroom: Shower/Tub`,
        active: null,
        options: [
          { id: 1, name: `Tub/Shower Combo`, price: 0 },
          { id: 3, name: `Shower (32"x34")`, price: 225 },
          { id: 2, name: `Whirlpool Tub Drop`, price: 650 },
          { id: 4, name: `Shower With Glass Door (60"x30")`, price: 730 },
          { id: 5, name: `Shower With Glass Door (60"x43")`, price: 800 },
          { id: 6, name: `Ceramic Shower`, price: 1750 },
        ],
      },
      {
        id: `2-master-bath-vanity`,
        name: `Master Bathroom: Bath Vanity`,
        active: null,
        options: [
          { id: 1, name: `Standard Vanity With Cubbies`, price: 0 },
          { id: 2, name: `Single Vanity With Drawers`, price: 450 },
          { id: 3, name: `Double Bowl Vanity With Drawers`, price: 1000 },
        ],
      },
      {
        id: `3-guest-bath-shower`,
        name: `Guest Bathroom: Shower/Tub`,
        active: null,
        options: [
          { id: 1, name: `Tub/Shower Combo`, price: 0 },
          { id: 3, name: `Shower (32"x34")`, price: 225 },
          { id: 4, name: `Shower With Glass Door (60"x30")`, price: 730 },
          { id: 5, name: `Shower With Glass Door (60"x43")`, price: 800 },
        ],
      },
      {
        id: `4-guest-bath-vanity`,
        name: `Guest Bathroom: Bath Vanity`,
        active: null,
        options: [
          { id: 1, name: `Standard Vanity With Cubbies`, price: 0 },
          { id: 2, name: `Single Vanity With Drawers`, price: 450 },
        ],
      },


    ],
  },
  {
    category: 4,
    active: false,
    name: "Other",
    underCategories: [
      {
        id: 1,
        name: `Trim`,
        active: null,
        options: [
          { id: 1, name: `White`, price: 0 },
          { id: 2, name: `Oak`, price: 0 },
          { id: 3, name: `Cherry`, price: 0 },
          { id: 4, name: `White Wood Cove`, price: 1000 },
          { id: 5, name: `Oak Wood Cove`, price: 1575 },
        ],
      },
      // {
      //     id: 2,
      //     name: `Flooring carpet`,
      //     active: null,
      //     options: [
      //         { id: 1, name: `Angora`, price: 500 },
      //         { id: 2, name: `A la mode`, price: 500 },
      //         { id: 3, name: `Cookies and cream`, price: 500 },
      //         { id: 4, name: `Nougat delight`, price: 500 },
      //         { id: 5, name: `Hazelnut`, price: 500 },
      //         { id: 6, name: `Neutrino`, price: 500 },
      //     ],
      // },
      // {
      //     id: 3,
      //     name: `Flooring vynal (per room)`,
      //     active: null,
      //     options: [
      //         { id: 1, name: `Rustic redwood `, price: 100 },
      //         { id: 2, name: `Pacific crest trail`, price: 100 },
      //         { id: 3, name: `Mountatin smoke`, price: 100 },
      //         { id: 4, name: `Autumn wood`, price: 100 },
      //     ],
      // },

      {
        id: 4,
        name: `Appliances`,
        active: null,
        options: [
          { id: 1, name: `Black Standard`, price: 0 },
          { id: 2, name: `White Standard`, price: 0 },
          { id: 4, name: `Black Side-By-Side With Ice Maker`, price: 600 },
          { id: 5, name: `White Side-By-Side With Ice Maker`, price: 600 },
          { id: 3, name: `Stainless Package`, price: 1900 },
          
        ],
      },
      {
        id: 5,
        name: `Fireplace`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 5, name: `Full Stone Wood Burning `, price: 1500 },
          { id: 3, name: `Half Stone Wood Burning`, price: 1900 },
          { id: 2, name: `Half Stone Gas`, price: 2800 },
          { id: 4, name: `Full Stone Gas`, price: 3000 },
          
        ],
      },
      {
        id: 6,
        name: `Thermostat`,
        active: null,
        options: [
          { id: 1, name: `Standard`, price: 0 },
          { id: 2, name: `Lux Upgrade`, price: 200 },
        ],
      },
      {
        id: 7,
        name: `Washer/Dryer`,
        active: null,
        options: [
          { id: 2, name: `None`, price: 0 },
          { id: 1, name: `Standard Washer/Dryer`, price: 895 },
        ],
      },
      {
        id: 8,
        name: `Hot Water Heater`,
        active: null,
        options: [
          { id: 1, name: `40 Gallon`, price: 0 },
          { id: 2, name: `50 Gallon`, price: 850 },
        ],
      },
      {
        id: '8-utility-sink',
        name: `Utility Sink (Laundry Room)`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `Chrome Laundry Sink (4")`, price: 400 },
        ],
      },
    ],
  },
  {
    category: 5,
    active: false,
    name: "Flooring",
    underCategories: [
      {
        id: 1,
        name: `Flooring`,
        active: null,
        options: [
          {
            id: 1,
            name: `inputName`,
            type: 'textarea',
            active: 1,
            price: 0,
            value: " ",
          },
        ],
      },
    ],
  },
];

export default customizationGroup;
