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


document.querySelector('#kommune-list').addEventListener('change', (e) => {
     console.log(e.target.value)
     const kommuneNumber = e.target.value
     //YOU ARE HERE!!!
     //BEWARE OF THIS[{"name":"Fylkesnummer","shortName":"fylke","groupable":true,"searchable":false,"indexPrimaryKey":false,"description":"...","definition":"fylkenr"},{"name":"Kommunenummer","shortName":"kommune","groupable":true,"searchable":false,"indexPrimaryKey":false,"description":"...","definition":"kommunenr"},{"name":"Kommunenavn","shortName":"navn","groupable":false,"searchable":true,"indexPrimaryKey":false,"description":"...","definition":"navn"}]
     //for example https://hotell.difi.no/api/json/difi/geo/kommune?municipality_name=V%C3%A5ler
    //
})
