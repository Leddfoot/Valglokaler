import { generateFylkeOptionList, generateKommuneList } from './views.js'
import { getDataset, makeKommuneUrl } from './requests.js'

let url = `http://hotell.difi.no/api/json/difi/geo/fylke`

getDataset(url).then((fylke) => {
    fylke.forEach(element => {
        // console.log(element.nummer);
        
        generateFylkeOptionList(element.navn, element.nummer)
    })
}).catch((err) => {
    console.log(`Error: ${err}`)
})

const clearKommuneOptions = () => {
    const kommuneOptions = document.getElementById('kommune-list')
    kommuneOptions.options.length = 0
}

document.querySelector('#fylke-list').addEventListener('change', (e) => {
    // console.log(e.target.value)
    const fylkeNumber = e.target.value
    clearKommuneOptions()
    makeKommuneUrl(fylkeNumber) 

})
