import { generateFylkeOptionList, sortPollingPlacesList } from './views.js'
import { getDataset, makeKommuneUrl } from './requests.js'

let url = `http://hotell.difi.no/api/json/difi/geo/fylke`

getDataset(url).then((fylke) => {
  fylke.forEach(element => {
    generateFylkeOptionList(element.navn, element.nummer)
  })
}).catch((err) => {
  console.log(`Error: ${err}`)
})

const clearKommuneOptions = () => {
  const kommuneOptions = document.getElementById('kommune-list')
  kommuneOptions.options.length = 1
}

document.querySelector('#fylke-list').addEventListener('change', (e) => {
  clearKommuneOptions()
  makeKommuneUrl(e.target.value)
})

document.querySelector('#kommune-list').addEventListener('change', (e) => {
  const municipalityId = e.target.value
  const checkingForZero = e.target.value.charAt(0)
  let url
  if (checkingForZero === '0') {
    const trimmedId = municipalityId.substr(1)
    url = `https://hotell.difi.no/api/json/valg/valglokaler/2017?municipality_id=${trimmedId}`
  } else {
    url = `https://hotell.difi.no/api/json/valg/valglokaler/2017?municipality_id=${municipalityId}`
  }

  sortPollingPlacesList(url)
})
