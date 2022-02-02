import { createPlan } from './plan.js';
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from './seeds/potato.js';
import { addPlant, emptyFieldArray, usePlants} from "./field.js"
import { plantSeeds } from './tractor.js';
import { harvestPlants, useHarvest } from './harvester.js';

console.log("Welcome to the main module")

const yearlyPlan = createPlan();
const usePlantsResult = usePlants();
const harvestResult = harvestPlants(usePlantsResult);
const useHarvestResult = useHarvest()

plantSeeds(yearlyPlan)
console.log(usePlantsResult)
harvestPlants(usePlantsResult)
console.log(useHarvestResult)

// console.log(`${yearlyPlan} console logging yearlyPlan`);

// console.log(usePlantsResult)

// console.log(`${yearlyPlan} console logging usePlantsResult after running plantSeeds`)

// console.log("break between plantSeeds function with yearlyPlan passed through")

// console.log(usePlantsResult)
// harvestPlants(usePlantsResult)
// console.log(`${harvestResult} console logging usePlantsResult after running it through the harvestPlants function`)

