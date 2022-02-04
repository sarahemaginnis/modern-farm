
export const harvestPlants = (usePlantsResult) => {
    let harvestPlantsResult = []
    for (const plantObj of usePlantsResult) {
        for (let i = 0; i < plantObj.output; i++) {
            if (plantObj.type === "Corn") {
                i++
            }
            harvestPlantsResult.push(plantObj)
        }
    }
    return harvestPlantsResult
}