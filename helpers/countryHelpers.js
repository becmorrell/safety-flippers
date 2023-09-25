export async function getCountryData(countryName){
    const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const countryJSON = await countryResponse.json()
    const countryItem = countryJSON[0]

    if(!countryItem){
        return null
    }

    const countryData = {
        capital: countryItem.capital || null,
        region: countryItem.region || null,
        subregion: countryItem.subregion || null,
        languages: countryItem.languages || null,
        latlng: countryItem.latlng || null,
        timezones: countryItem.timezones || null,
        flags: countryItem.flags || null
    }

    return countryData
}

export async function getSubregion(subregion, countryName){
    const subregionResponse = await fetch(`https://restcountries.com/v3.1/subregion/${subregion}`)
    const subregionJSON = await subregionResponse.json()

    if(!subregionJSON?.length){
        return null
    }

    const similarCountriesData = subregionJSON.map(countryData => {
        return {
            name: countryData.name.common,
            flag: {
                src: countryData.flags.svg,
                alt: countryData.flags.alt || null
            }
        }
    })

    const differentCountries = similarCountriesData.filter(country => country.name !== `${countryName}`)
 

    function getRandomItemsFromArray(arr, numItems){
        
        const copyArr = [ ...arr]

        const randomItems = []

        for (let i=0; i < numItems; i++){
            const randomIndex = Math.floor(Math.random() * copyArr.length)
            randomItems.push(copyArr[randomIndex])
            //remove from original array to avoid selecting twice
            copyArr.splice(randomIndex, 1)
        }
        return randomItems
    }

    const randomCountries = getRandomItemsFromArray(differentCountries, 3)
    
    return randomCountries

}

export async function getCountryHeroImages(countryName){
    const apiKey = process.env.ENV_UNSPLASH_API_KEY
    const imageResponse = await fetch(`https://api.unsplash.com/search/photos?orientation=landscape&page=1&query=${countryName}&client_id=${apiKey}`)
    const imageJSON = await imageResponse.json()
    const imageArr = imageJSON.results.splice(0, 2)

    if(!imageResponse){
        return null
    }

    const countryImages = imageArr.map(imageItem => {
        return {
            src: imageItem.urls.raw,
            alt: imageItem.alt_description
        }
    })

    return countryImages
}