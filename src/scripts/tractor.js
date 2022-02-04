import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plantingPlan) => {
    for (const plantArr of plantingPlan) {
        for (const innerArr of plantArr) {
            if (innerArr === "Asparagus") {
                addPlant(createAsparagus())
            } else if (innerArr === "Potato") {
                addPlant(createPotato())
            } else if (innerArr === "Soybean") {
                addPlant(createSoybean())
            } else if (innerArr === "Corn") {
                createCorn().forEach(addPlant)
            } else if (innerArr === "Sunflower") {
                addPlant(createSunflower())
            } else {
                addPlant(createWheat())
                }
            }
        }
    }