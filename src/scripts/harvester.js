import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

let harvestPlantsResult = []

export const harvestPlants = (usePlantsResult) => {
    for (const plantObj of usePlantsResult) {
        if (plantObj.type === "Asparagus") {
            for (let j = 0; j < plantObj.output; j++) {
                harvestPlantsResult.push(createAsparagus())
            }
        } else if (plantObj.type === "Potato") {
            for (let j = 0; j < plantObj.output; j++) {
                harvestPlantsResult.push(createPotato())
            }
        } else if (plantObj.type === "Soybean") {
            for (let j = 0; j < plantObj.output; j++) {
                harvestPlantsResult.push(createSoybean())
            }
        } else if (plantObj.type === "Sunflower") {
            for (let j = 0; j < plantObj.output; j++) {
                harvestPlantsResult.push(createSunflower())
            }
        } else if (plantObj.type === "Wheat") {
            for (let j = 0; j < plantObj.output; j++) {
                harvestPlantsResult.push(createWheat())
            }
        } else {
            for (let j = 0; j < (plantObj.output / 2); j++) {
                harvestPlantsResult.push(createCorn())
            }
        }
    }
}

export const useHarvest = () => {
    return harvestPlantsResult
}