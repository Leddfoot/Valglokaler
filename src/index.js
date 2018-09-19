import { generateFylkeOptionList } from './views.js'
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
  const url = `https://hotell.difi.no/api/json/valg/valglokaler/2017?municipality_id=${e.target.value}`
  const url1 = `https://hotell.difi.no/api/json/valg/valglokaler/2017?municipality_id=220`
  console.log(url)
  console.log(url1)
  //This is the point where I ran out of time!
  // Problem. First digit zero added to municipality id only for 3 digit numbers, ?municipality_id=0220 doesnt work must be id=220
  // if(id is 3 digits && first digit is 0) {
  // trim the first digit
  // }

  const pollingPlaces = getDataset(url).then((pollingPlace) => {
    pollingPlace.forEach(element => {
      console.log(`Polling place: ${element.area} at this address ${element.address_line}`)
    })
  }).catch((err) => {
    console.log(`Error: ${err}`)
  })
})
