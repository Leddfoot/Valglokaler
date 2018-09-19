import { generateKommuneOptionList } from './views'

const getDataset = async (url) => {
  const response = await
  fetch(url)

  if (response.status === 200) {
    const data = await response.json()
    return data.entries
  } else {
    throw new Error('datahotellet API utilgjengelig ?? or just err ??')
  }
}

//Did this while tired ... seems like a poor setup ...check!!
const makeKommuneUrl = (fylkeNumber) => {
  if (fylkeNumber === '21' || fylkeNumber === '22') {
    // #todo create a status message
  }

  const url = `http://hotell.difi.no/api/json/difi/geo/kommune?fylke=${fylkeNumber}`

  getDataset(url).then((kommune) => {
    kommune.forEach(element => {
      generateKommuneOptionList(element.navn, element.kommune)
    })
  }).catch((err) => {
    console.log(`Error: ${err}`)
  })
}

export { getDataset, makeKommuneUrl }
