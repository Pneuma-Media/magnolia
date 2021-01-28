

import NoPhoto from '../assets/img/nophotoavailable.png';

import BartonMhe1 from '../assets/img/plans/barton-mhe/img1.webp';
import BartonMhe2 from '../assets/img/plans/barton-mhe/img2.webp';

import Barton2Mhe1 from '../assets/img/plans/barton2-mhe/img1.webp';
import Barton2Mhe2 from '../assets/img/plans/barton2-mhe/img2.webp';

import GlennCreekMhe2 from '../assets/img/plans/glenn-creek-mhe/img2.webp';

import HazlenutMhe2 from '../assets/img/plans/hazlenut-mhe/img2.webp';

import DsyonFairmont2 from '../assets/img/plans/dyson-fairmont/img2.webp';
import DsyonFairmont3 from '../assets/img/plans/dyson-fairmont/img3.webp';

import DavinciFairmont1 from '../assets/img/plans/davinci-fairmont/img1.webp';
import DavinciFairmont2 from '../assets/img/plans/davinci-fairmont/img2.webp';

import EdisonFarimont2 from '../assets/img/plans/edison-fairmont/img2.webp';
import EdisonFarimont3 from '../assets/img/plans/edison-fairmont/img3.webp';

import FranklinFairmont1 from '../assets/img/plans/franklin-fairmont/img1.webp';
import FranklinFairmont2 from '../assets/img/plans/franklin-fairmont/img2.webp';

import LearondaroFairmont2 from '../assets/img/plans/leonardo-fairmont/img2.webp';
import LearondaroFairmont3 from '../assets/img/plans/leonardo-fairmont/img3.webp';



const plans = [
  {
    id: 1,
    img: BartonMhe1,
    rums: 4,
    toilet: 1,
    kitchenSize: 9,
    bedrooms: 3,
    bathrooms: 2,
    ceil: 2.4,
    s: 1200,
    images: [BartonMhe2, BartonMhe1],
    price: 66335.1,
    title: "Barton - MHE",
    manufacturer: "MHE",
    type: "typeA",
  },
  {
    id: 2,
    img: Barton2Mhe1,
    rums: 5,
    toilet: 1,
    kitchenSize: 9,
    bedrooms: 3,
    bathrooms: 2,
    ceil: 2.4,
    s: 1200,
    images: [Barton2Mhe2, Barton2Mhe1],
    price: 66335.1,
    title: "Barton II - MHE",
    manufacturer: "MHE",
    type: "typeA",
  },
  {
    id: 3,
    img: GlennCreekMhe2,
    rums: 2,
    toilet: 2,
    kitchenSize: 8,
    bedrooms: 3,
    bathrooms: 2,
    ceil: 2.8,
    s: 1500,
    images: [GlennCreekMhe2],
    price: 78061.1,
    title: "Glenn Creek - MHE",
    manufacturer: "MHE",
    type: "typeA",
  },
  {
    id: 4,
    img: HazlenutMhe2,
    rums: 8,
    toilet: 4,
    kitchenSize: 3,
    bedrooms: 4,
    bathrooms: 2,
    ceil: 2.6,
    s: 1600,
    images: [HazlenutMhe2],
    price: 77736.1,
    title: "Hazlenut -  MHE",
    manufacturer: "MHE",
    type: "typeA",
  },
  {
    id: 5,
    img: DsyonFairmont2,
    rums: 5,
    toilet: 5,
    kitchenSize: 7,
    bedrooms: 3,
    bathrooms: 2,
    ceil: 3,
    s: 1100,
    images: [DsyonFairmont2, DsyonFairmont3],
    price: 66214.2,
    title: "Dyson - Fairmont",
    manufacturer: "Fairmont",
    type: "typeA",
  },
  {
    id: 6,
    img: DavinciFairmont1,
    rums: 9,
    toilet: 5,
    kitchenSize: 5,
    bedrooms: 3,
    bathrooms: 2,
    ceil: 4,
    s: 1100,
    images: [DavinciFairmont2, DavinciFairmont1],
    price: 64322.7,
    title: "Davinci - Fairmont",
    manufacturer: "Fairmont",
    type: "typeA",
  },
  {
    id: 7,
    img: EdisonFarimont2,
    rums: 6,
    toilet: 3,
    kitchenSize: 12,
    bedrooms: 3,
    bathrooms: 2,
    ceil: 4,
    s: 1300,
    images: [EdisonFarimont2, EdisonFarimont3],
    price: 68178.5,
    title: "Edison - Fairmont",
    manufacturer: "Fairmont",
    type: "typeA",
  },
  {
    id: 8,
    img: FranklinFairmont1,
    rums: 7,
    toilet: 2,
    kitchenSize: 5,
    bedrooms: 3,
    bathrooms: 2,
    ceil: 2.6,
    s: 1400,
    images: [FranklinFairmont2, FranklinFairmont1],
    price: 70358.6,
    title: "The Franklin - Fairmont",
    manufacturer: "Fairmont",
    type: "typeA",
  },
  {
    id: 9,
    img: LearondaroFairmont2,
    rums: 7,
    toilet: 1,
    kitchenSize: 4,
    bedrooms: 4,
    bathrooms: 2,
    ceil: 3,
    s: 1500,
    images: [LearondaroFairmont2, LearondaroFairmont3],
    price: 78880.1,
    title: "Leonardo - Fairmont",
    manufacturer: "Fairmont",
    type: "typeA",
  },
];

export default plans;