import { createPlan } from './plan.js';
import { addPlant, usePlants} from "./field.js"
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js';
import { createAsparagus } from './seeds/asparagus.js';

console.log("Welcome to the main module")

const yearlyPlan = createPlan(); //defines three rows of crops to be planted, with 6 plots of land in each row

/*console.log(`${yearlyPlan} logging yearlyPlan, which is the variable storing the createPlan function`)
console.log(`${asparagusSeed.type} logging the createAsparagus function - should create a seed object`) //not sure if there's something wrong with my seed functions - according to the instructions, this code whould display an object with three properties - type, height, output - in the developer console.
console.log(`${usePlantsResult} logging the usePlantsResult to make sure that my field is tilling correctly`)*/

const testArray = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

plantSeeds(testArray)
//console.log(usePlants())
const harvestPlantsResult = harvestPlants(usePlants())
console.log(harvestPlantsResult)
catalog(harvestPlantsResult)