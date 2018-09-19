import { getKommuner } from './requests.js'
// Generate fylke list for dropdown
const generateFylkeOptionList = (fylkeName, fylkeNumber) => {
  if (fylkeName === 'Kontinentalsokkelen' || fylkeName === 'Uoppgitt') {
    return
  }

  const fylkeOptionElement = document.createElement('option')
  fylkeOptionElement.textContent = fylkeName
  fylkeOptionElement.value = fylkeNumber

  const fylkeDropdown = document.getElementById('fylke-list')
  fylkeDropdown.appendChild(fylkeOptionElement)
}



const generateKommuneOptionList = (kommune, kommuneCode) => {
  // console.log(`this is what you are looking for ${kommuneCode}`);
  
  const kommuneDropdown = document.getElementById('kommune-list')  
  const kommuneOptionElement = document.createElement('option')  
  kommuneOptionElement.textContent = kommune
  kommuneOptionElement.value = kommuneCode  
  kommuneDropdown.appendChild(kommuneOptionElement)  
}

export { generateFylkeOptionList, generateKommuneOptionList }
