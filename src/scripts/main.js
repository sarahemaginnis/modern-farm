console.log("Welcome to the main module")

import { createPlan } from './plan.js';

const yearlyPlan = createPlan();

console.log(yearlyPlan);

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createPotato } from './seeds/potato.js';
const potatoSeed = createPotato()
console.log(potatoSeed)

import { addPlant, usePlants} from "./field.js"

addPlant(asparagusSeed)
const usePlantsResult = usePlants()
addPlant(potatoSeed)
console.log(usePlantsResult)


