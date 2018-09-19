import { generateFylkeOptionList, generateKommuneOptionList } from "./views";

const getDataset = async (url) => {
    const response = await
        fetch(url)

    if (response.status === 200) {
        const data = await response.json()
        return data.entries
    } else {
        throw new Error('datahotellet API utilgjengelig')
    }
}

const makeKommuneUrl = (fylkeNumber) => {
    // console.log(fylkeNumber);
    //This don't work find out why
    if (fylkeNumber === '21' || fylkeNumber === '22') {
        // #todo create a status message
        console.log('no kommuner or voting locations in these fylker. show status message in #message');
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