// import { generateKommuneList } from './views.js'

// const getFylke = async () => {
//   const response = await
//   fetch(`http://hotell.difi.no/api/json/difi/geo/fylke`)

//   if (response.status === 200) {
//     const data = await response.json()
//     return data.entries
//   } else {
//     throw new Error('datahotellet API utilgjengelig')
//   }
// }

// const getKommuner = async (fylkeNumber) => {
//   const url = `http://hotell.difi.no/api/json/difi/geo/kommune?fylke=${fylkeNumber}`
//   const response = await

//   fetch(url)

//   if (response.status === 200) {
//       console.log(url);
//     const data = await response.json()
//     console.log(data);
//     if (data.entries.length === 0) {
//         // console.log('no stations');
//     } else {
//         generateKommuneList()
//         return data.entries
//     }

//   } else {
//     throw new Error('datahotellet API utilgjengelig')
//   }
// }

// export { getFylke }


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
    if (fylkeNumber === 21 || fylkeNumber === 22) {
        console.log('no kommuner in these fylker. show status message in #message');
    }
   
    

    const url = `http://hotell.difi.no/api/json/difi/geo/kommune?fylke=${fylkeNumber}`
    // console.log(url);

    getDataset(url).then((kommune) => {        
        kommune.forEach(element => {
            generateKommuneOptionList(element.navn)
        })
    }).catch((err) => {
        console.log(`Error: ${err}`)
    })

}

export { getDataset, makeKommuneUrl }