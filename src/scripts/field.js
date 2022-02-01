export const emptyFieldArray = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (let i=0; i <seed.length; i++) {
            emptyFieldArray.push(seed[i])
        }
    } else {emptyFieldArray.push(seed)}
}

export const usePlants = () => {
    return [...emptyFieldArray]
}