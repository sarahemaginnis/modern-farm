import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plantingPlan) => {
    for (const plantArr of plantingPlan) {
        for (let i = 0; i < plantArr.length; i++) {
            if (plantArr[i] === "Asparagus") {
                addPlant(createAsparagus())
            } else if (plantArr[i] === "Potato") {
                addPlant(createPotato())
            } else if (plantArr[i] === "Soybean") {
                addPlant(createSoybean())
            } else if (plantArr[i] === "Corn") {
                addPlant(createCorn())
            } else if (plantArr[i] === "Sunflower") {
                addPlant(createSunflower())
            } else {
                addPlant(createWheat())
                }
            }
        }
    }

// export const plantSeeds = (plantingPlan) => {
//     for (let i = 0; i < plantingPlan.length; i++) {
//         for (let j = 0; j < plantingPlan[i].length; j++) {
//           if (j === "Asparagus") {
//               return addPlant(createAsparagus)
//           } else if (j === "Potato") {
//               return addPlant(createPotato)
//           } else if (j === "Soybean") {
//               return addPlant(createSoybean)
//           } else if (j === "Corn") {
//               return addPlant(createCorn)
//           } else if (j === "Sunflower") {
//               return addPlant(createSunflower)
//           } else {
//               return addPlant(createWheat)
//           }
//         }
//     }
// }