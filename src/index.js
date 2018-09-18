import { getFylke, getKommuner } from './requests.js'
import { generateOptionList, generateKommuneList } from './views.js'

getFylke().then((fylke) => {
  fylke.forEach(element => {
    console.log(element)

    generateOptionList(element.navn, element.nummer)
  })
}).catch((err) => {
  console.log(`Error: ${err}`)
})

document.querySelector('#fylke-list').addEventListener('change', (e) => {
//   console.log(e.target.value)
  const fylkeNumber = e.target.value
  generateKommuneList(fylkeNumber)
})
