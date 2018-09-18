import { generateKommuneList } from './views.js'

const getFylke = async () => {
  const response = await
  fetch(`http://hotell.difi.no/api/json/difi/geo/fylke`)

  if (response.status === 200) {
    const data = await response.json()
    return data.entries
  } else {
    throw new Error('datahotellet API utilgjengelig')
  }
}

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

export { getFylke, getKommuner }
