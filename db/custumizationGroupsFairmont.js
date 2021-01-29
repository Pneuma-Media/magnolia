//Exterior
// - Shingles
// - Siding
// - Shutters
// - Doors
//Kitchen
// - Cabinets
// - Counters
// - Sinks
// - Islands
// - Backsplash
//Bath
// - Sinks
// - Shower/Tub
//Other
// - Flooring
// - Trim
// - Lighting

const customizationGroup = [
  {
    category: 1,
    active: true,
    name: "Exterior",
    underCategories: [
      {
        id: 1,
        name: "Roof Pitch",
        active: null,
        options: [
          { id: 1, name: '"4/12"', price: 0 },
          { id: 2, name: '"5/12"', price: 2000 },
          { id: 3, name: '"7/12"', price: 5000 },
        ],
      },
      {
        id: 2,
        name: "Shingles",
        active: null,
        options: [
          { id: 1, name: `Onxy Black`, price: 0 },
          { id: 2, name: `Estate Gray`, price: 0 },
          { id: 3, name: `Driftwood`, price: 0 },
        ],
      },
      {
        id: 3,
        name: "Siding",
        active: null,
        options: [
          { id: 1, name: `Cypress`, price: 0 },
          { id: 2, name: `Harvard Slate`, price: 0 },
          { id: 3, name: `Wicker`, price: 0 },
          { id: 4, name: `Pebble Clay`, price: 0 },
          { id: 5, name: `White`, price: 0 },
          { id: 6, name: `Marine Blue`, price: 2500 },
          { id: 7, name: `Graphite`, price: 2500 },
          { id: 8, name: `Redwood`, price: 2500 },
        ],
      },
      {
        id: 4,
        name: "Shutters",
        active: null,
        options: [
          { id: 5, name: `None`, price: 0 },
          { id: 1, name: `Berry`, price: 100 },
          { id: 2, name: `Royal`, price: 100 },
          { id: 3, name: `Black`, price: 100 },
          { id: 4, name: `Pine`, price: 100 },
        ],
      },
      {
        id: 5,
        name: "Doors",
        active: null,
        options: [
          { id: 1, name: `Regular White 34x82`, price: 0 },
          {
            id: 2,
            name: `52"x82" Round Top Etch Glass w/sidelight`,
            price: 2000,
          },
          {
            id: 3,
            name: `66.5"x82" Round top Etch Glass w/ Double sidelight`,
            price: 2500,
          },
          { id: 4, name: `Fire Rated Door`, price: 500 },
          { id: 5, name: `72"x80" glass slider`, price: 1100 },
          { id: 6, name: `75.5"x82" swing french doors`, price: 2500 },
        ],
      },
      // {
      //     id: 6,
      //     name: 'Windows',
      //     active: null,
      //     options: [
      //         { id: 1, name: `Arch Top *may require engineering fee`, price: 600 },
      //         { id: 2, name: `Additional 30"x60" window (per)`, price: 250 },
      //         { id: 3, name: `72"x14" transom`, price: 750 },
      //     ],
      // },
      {
        id: 7,
        name: "Lights",
        active: null,
        options: [
          { id: 1, name: `Rust Coach`, price: 175 },
          { id: 2, name: `Craftsman Coach`, price: 200 },
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
          { id: 1, name: `Imperial Sand`, price: 0 },
          { id: 2, name: `Bernard Granite`, price: 0 },
          { id: 3, name: `Winter Carnival`, price: 0 },
          { id: 4, name: `Spring Carnival`, price: 0 },
          { id: 5, name: `Ebony Fusion`, price: 0 },
          { id: 6, name: `Azul Aran`, price: 900 },
          { id: 7, name: `Dolce Vita`, price: 900 },
          { id: 8, name: `Calcutta Marble`, price: 900 },
        ],
      },
      {
        id: 2,
        name: `Backsplash`,
        active: null,
        options: [
          { id: 1, name: `White (one row)`, price: 500 },
          { id: 2, name: `Steel (one row)`, price: 500 },
          { id: 3, name: `Graphite (one row)`, price: 500 },
          { id: 4, name: `White (full)`, price: 2000 },
          { id: 5, name: `Steel (full)`, price: 2000 },
          { id: 6, name: `Graphite (full)`, price: 2000 },
          { id: 7, name: `Contemporary stack (upgrade)`, price: 2500 },
          { id: 8, name: `Split face mosaic (upgrade)`, price: 2500 },
          { id: 9, name: `Taberna Rye (upgrade)`, price: 2500 },
        ],
      },
      {
        id: 3,
        name: `Cabinets`,
        active: null,
        options: [
          { id: 1, name: `Milan`, price: 0 },
          { id: 2, name: `Java`, price: 0 },
          { id: 3, name: `Rustic Shore`, price: 1000 },
          { id: 4, name: `Vintage Oak`, price: 1000 },
          { id: 5, name: `Stonehenge`, price: 1000 },
        ],
      },
      {
        id: 4,
        name: `Cabinets size`,
        active: null,
        options: [
          { id: 1, name: `30" cabinets`, price: 0 },
          { id: 2, name: `40" cabinets`, price: 2250 },
        ],
      },
      {
        id: 5,
        name: `Island`,
        active: null,
        options: [
          { id: 4, name: `None`, price: 0 },
          { id: 1, name: `38 x 59 CE-1374`, price: 500 },
          { id: 2, name: `36 x 96 CE-1277`, price: 800 },
          { id: 3, name: `28 x 40 CE 1248`, price: 300 },
        ],
      },
      {
        id: 6,
        name: `Kitchen Sink upgrade`,
        active: null,
        options: [
          { id: 1, name: `No upgrade`, price: 0 },
          { id: 2, name: `Farm sink w moen facuet`, price: 500 },
          { id: 3, name: `9" deep steel sink`, price: 500 },
          { id: 4, name: `Moen kitchen faucet with sprayer`, price: 500 },
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
        id: 1,
        name: `Shower/Tub (per room)`,
        active: null,
        options: [
          { id: 1, name: `1 pc tub w shower`, price: 0 },
          { id: 2, name: `Bench shower`, price: 1200 },
          { id: 3, name: `48" 2 seat shower`, price: 400 },
          { id: 4, name: `Corner shower`, price: 250 },
          { id: 5, name: `Ceramic tile shower`, price: 3000 },
          { id: 6, name: `1 pc corner tub`, price: 750 },
          { id: 7, name: `Whirpool tub`, price: 1000 },
          { id: 8, name: `Stand alone tub`, price: 350 },
        ],
      },
      {
        id: 2,
        name: `Utility Sink`,
        active: null,
        options: [
          { id: 5, name: `None`, price: 0 },
          { id: 1, name: `Deep sink SB-30`, price: 1100 },
          { id: 2, name: `51" deep sink CB-790`, price: 1300 },
          { id: 3, name: `60" deep sink CB-772`, price: 1500 },
          { id: 4, name: `51" deep sink w overhead cab`, price: 1700 },
        ],
      },
      {
        id: 3,
        name: `Hot Water Heater`,
        active: null,
        options: [
          { id: 1, name: `40 gallon gas`, price: 0 },
          { id: 2, name: `50 gallon gas`, price: 650 },
        ],
      },
      {
        id: 4,
        name: `Washer/dryer`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `Include`, price: 1200 },
        ],
      },
    ],
  },
  {
    category: 5,
    active: false,
    name: "General",
    underCategories: [
      // {
      //     id: 1,
      //     name: `Flooring carpet`,
      //     active: null,
      //     options: [
      //         { id: 1, name: `Quarry cabinet 16 oz`, price: 0 },
      //         { id: 2, name: `Wood Smoke 18oz`, price: 600 },
      //         { id: 3, name: `Spanish Grey 18oz`, price: 600 },
      //         { id: 4, name: `Russet 18 oz`, price: 600 },
      //         { id: 5, name: `Baled Hay 18 0z`, price: 600 },
      //         { id: 6, name: `Sand Dollar 25 oz`, price: 1200 },
      //         { id: 7, name: `Mushroom Cap 25 oz`, price: 1200 },
      //         { id: 8, name: `Cloudburst 25 oz`, price: 1200 },
      //         { id: 9, name: `Truffle 25 oz`, price: 1200 },
      //         { id: 10, name: `Winter White 40oz`, price: 3000 },
      //         { id: 11, name: `Townhouse 40 oz`, price: 3000 },
      //         { id: 12, name: `Cold Water 40 oz`, price: 3000 },
      //         { id: 13, name: `Chamois 40 oz`, price: 3000 },
      //     ],
      // },
      // {
      //     id: 2,
      //     name: `Flooring vynal (per room)`,
      //     active: null,
      //     options: [
      //         { id: 1, name: `Rustic Adobe`, price: 300 },
      //         { id: 2, name: `Barnwood Greige`, price: 300 },
      //         { id: 3, name: `Cookies and Cream`, price: 300 },
      //     ],
      // },
      {
        id: 3,
        name: `Doors additional`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `36" 6 panel white`, price: 150 },
          { id: 3, name: `White sliding barn door`, price: 1500 },
        ],
      },
      {
        id: 4,
        name: `Appliances`,
        active: null,
        options: [
          { id: 1, name: `Black standard`, price: 0 },
          { id: 2, name: `Black upgraded`, price: 1800 },
          { id: 3, name: `Stainless upgrade`, price: 1800 },
        ],
      },
      {
        id: 5,
        name: `Fireplace`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `charleston stack full stone gas`, price: 1600 },
          { id: 3, name: `charleston stack half stone gas`, price: 1200 },
          { id: 4, name: `charleston stack half stone electric`, price: 1600 },
          { id: 5, name: `charleston stack half stone electric`, price: 1200 },
        ],
      },
      {
        id: 6,
        name: `Home Entertainment System`,
        active: null,
        options: [
          { id: 5, name: `None`, price: 0 },
          { id: 1, name: `90" Floating FEC901616 (no bookcase)`, price: 1200 },
          { id: 2, name: `90" Floating BC429418 w bookcase`, price: 1700 },
          { id: 3, name: `48x42 CE - 2006`, price: 500 },
          { id: 4, name: `48" CE-2036`, price: 500 },
        ],
      },
      {
        id: 7,
        name: `Drop Zones`,
        active: null,
        options: [
          { id: 1, name: `None`, price: 0 },
          { id: 2, name: `2 hooks, bench, shoe storage CG-355`, price: 500 },
          {
            id: 3,
            name: `3 hooks, bench, overhead cab and shoe storage CG-411`,
            price: 600,
          },
        ],
      },
      {
        id: 8,
        name: `Trim`,
        active: null,
        options: [
          { id: 1, name: `Interior Trim - Java Wrapped`, price: 0 },
          { id: 2, name: `Interior Trim - Ibis Wrapped`, price: 0 },
          { id: 3, name: `Interior Trim - Wrapped - White`, price: 0 },
        ],
      },
    ],
  },
  // {
  //     category: 4,
  //     active: false,
  //     name: '',
  //     underCategories: [
  //         {
  //             id: 1,
  //             name: ``,
  //             active: null,
  //             options: [
  //                 { id: 1, name: ``, price: 0 },
  //                 { id: 2, name: ``, price: 0 },
  //                 { id: 3, name: ``, price: 0 },
  //                 { id: 4, name: ``, price: 0 },
  //                 { id: 5, name: ``, price: 0 },
  //                 { id: 6, name: ``, price: 0 },
  //                 { id: 7, name: ``, price: 0 },
  //                 { id: 8, name: ``, price: 0 },
  //             ],
  //         },

  //     ]
  // },

  {
    category: 5,
    active: false,
    name: "Flooring",
    underCategories: [
      {
        id: 1,
        name: `Flooring`,
        active: null,
        options: [{ id: 1, name: `inputName`, price: 0, value: "" }],
      },
    ],
  },
];

export default customizationGroup;
