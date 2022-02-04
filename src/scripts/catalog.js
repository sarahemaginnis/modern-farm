const mainContainer = document.getElementById("container")
export const catalog = (placeholderArray) => {
    let htmlString = ""
    for (let plantObj of placeholderArray) {
        htmlString += `<section class = "plant">${plantObj.type}</section>`
        }
    mainContainer.innerHTML = htmlString
    }