import { getKommuner } from "./requests.js";
// Generate fylke list for dropdown
const generateOptionList = (fylkeName, fylkeNumber) => {
  if (fylkeName === 'Kontinentalsokkelen' || fylkeName === 'Uoppgitt') {
    return
  }

  const fylkeOptionElement = document.createElement('option')
  fylkeOptionElement.textContent = fylkeName
  fylkeOptionElement.value = fylkeNumber

  const fylkeDropdown = document.getElementById('fylke-list')
  fylkeDropdown.appendChild(fylkeOptionElement)

  console.log(`your county is ${fylkeName}. The county number is ${fylkeNumber}`);
}

// const generateKommuneList = (fylkeNumber) => {
//     getKommuner(fylkeNumber).then((kommuner) => {
//         kommuner.forEach(element => {

//         })
//     }).catch((err) => {
//         console.log(`Error: ${err}`)
//     }) 
// }

export { generateOptionList, generateKommuneList }
