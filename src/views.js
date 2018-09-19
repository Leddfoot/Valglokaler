var _ = require('underscore');
import { getDataset } from './requests.js'
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

  const kommuneDropdown = document.getElementById('kommune-list')
  const kommuneOptionElement = document.createElement('option')
  kommuneOptionElement.textContent = kommune
  kommuneOptionElement.value = kommuneCode
  kommuneDropdown.appendChild(kommuneOptionElement)
}

const sortPollingPlacesList = (url) => {
  const pollingPlaces = getDataset(url).then((pollingPlaces) => {
    const sortedPollingPlaces = _.sortBy(pollingPlaces, 'area')
    generatePollingPlacesList(sortedPollingPlaces)
  }).catch((err) => {
    return
  })
}

const generatePollingPlacesDom = (element) => {
  const resultsContainer = document.getElementById('results')
  console.log('generating');
  // resultsContainer.appendChild(element)
}

const generatePollingPlacesList = (sortedPollingPlaces) => {
    const resultsContainer = document.getElementById('results')
    resultsContainer.innerHTML = ''
    sortedPollingPlaces.forEach(element => {
    const pollingPlaceElement = `<p>Sted: ${element.area} Adresse: ${element.address_line} Sted Navn: ${element.area}</p>`

    console.log(`Polling place: ${element.area} at this address ${element.address_line}`)
    generatePollingPlacesDom(pollingPlaceElement)
  }).catch((err) => {
    return
  })
}

export { generateFylkeOptionList, generateKommuneOptionList, sortPollingPlacesList }
