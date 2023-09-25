import { getCountryData, getSubregion, getCountryHeroImages } from "@/helpers/countryHelpers"
import { NomadInfoCard } from "@/components/NomadInfoCard"
import Image from "next/image"
import SimilarCountriesCard from "@/components/exploreCountriesCard"
import Meta from "@/components/Meta"
import useWindowSize from "@/hooks/useWindowSize"
import { useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"


export default function Country({ country, countryData, similarCountries, heroImages }) {

    //get window size and set initial width so not reloading hero image everytime window width changes
    const windowSize = useWindowSize()
    const [initialWidth, setInitialWidth] = useState(null)
    useEffect(() => {
        if(windowSize.width && !initialWidth){
            setInitialWidth(windowSize.width)
        }
    }, [windowSize, initialWidth])


    const split = country.split('')
    const capitaliseCountry = split[0].toUpperCase() + split.splice(1).join('')

    return (
        <>
        <Head>
            <title>
                Nomad Insurance in {capitaliseCountry} by SafetyFlippers
            </title>
            <Meta
                capitaliseCountry={capitaliseCountry}
                countryName={country}
                countryImage={heroImages[0].src + '&w=1200&h=630'}
                >
            </Meta>

        </Head>
        <main id="main-container" className="grid gap-12 justify-items-center bg-[#5cc6c7]">
            <div className="relative w-full h-[32rem]">
                <Image
                    src={heroImages[0].src + `&w=${initialWidth}&h=512&dpr=3&q=50`}
                    alt={heroImages[0].alt}
                    layout="fill"
                    objectFit="cover"
                    unoptimized
                    key={heroImages[0].src} //unique identifier to force component to reload when url changes
                    priority
                />
            </div>
            <div className="max-w-[50%] min-w-min text-center mt-[-12rem] p-8 z-[1] min-h-min bg-[#283b49] mb-10">
            <h1 className="font-bold font-serif text-white text-5xl md:text-7xl">Nomad Insurance in <span className="text-[#5cc6c7]">{capitaliseCountry}</span></h1>
            </div>

            <div className="grid md:grid-cols-3 px-8">
                <NomadInfoCard
                    countryData={countryData}
                    capitaliseCountry={capitaliseCountry}
                    cardTitle="Digital Nomads"
                    cardText={`Picture this: the sun-kissed beaches, the charming cobblestone streets, and a laptop as your trusty companion. Welcome to the life of a digital nomad in ${capitaliseCountry}, where work seamlessly blends with the beauty of this ${countryData.subregion || 'beautiful'} paradise.`}
                    iconImage={countryData.flags.png}
                    iconAlt={`flag of ${country}`}
                    />
                <NomadInfoCard
                    countryData={countryData}
                    capitaliseCountry={capitaliseCountry}
                    cardTitle="Freedom to explore"
                    cardText={`As a digital nomad, you have the freedom to choose your workspace. Whether it's the urban buzz of a city, the tranquility of a coastal paradise, or the serenity of a mountain retreat, your office is wherever you decide to unpack your laptop.`}
                    iconImage={heroImages[1].src + '&w=158&h=158&dpr=3&q=50'}
                    iconAlt={heroImages[1].alt}
                    key={heroImages[1].src}
                    />
                <NomadInfoCard
                    countryData={countryData}
                    capitaliseCountry={capitaliseCountry}
                    cardTitle="Protect your journey"
                    cardText="While the digital nomad lifestyle is exhilarating, it's wise to safeguard your journey with nomad insurance. Nomad insurance provides peace of mind, ensuring you're covered in case of unexpected events, from health emergencies to travel disruptions. With this reliable safety net, you can focus on your work and adventures, knowing that you're prepared for whatever comes your way."
                    iconImage="/assets/feather-white-icon.png"
                    iconAlt="a white feather"
                    objectFit="contain"
                    />
            </div>

            {similarCountries?.length > 0 && 
            <div className="w-screen bg-[#283b49] py-12 pb-32">
                <h2 className="font-serif text-center text-5xl pb-12">Explore similar countries</h2>
           
                <div className="grid md:grid-cols-3 md:grid-row-2 px-8 sm:px-28 md:px-24 lg:px-32 gap-8 md:gap-4 lg:gap-8">     
                    {similarCountries.map(country => {
                        return (
                            <SimilarCountriesCard
                                country={country}
                                key={country}
                            />
                        )
                    })}
                
                </div>
            </div>
            }
        </main>
        
        </>
    )
}

export async function getServerSideProps(context){
    let {country} = context.query

    const countryData = await getCountryData(country)

    if(countryData){
        const similarCountries = await getSubregion(countryData.subregion, country)
        const heroImages = await getCountryHeroImages(country)
        
        return {
            props: {
                country,
                countryData,
                similarCountries,
                heroImages
            }
        }
    }
    else {
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
    }

    
}