import countryNames from '../data/countryNames.json'
import Link from 'next/link'


export default function Home() {
  return (
    <main
      className={"flex min-h-screen bg-[#5cc6c7] flex-col items-center justify-between px-8 p-24"}
    >
        <h1 className="font-serif font-bold text-3xl md:text-5xl mb-8">Nomad Insurance</h1>

        <p className="font-serif font-normal text-center max-w-prose text-base md:text-lg mb-8">Dive into Safety Flippers: Where insurance seals the deal on your nomadic adventures! 🌊 Get a seal of approval on global coverage, and travel worry-free with our flip-tastic Nomad insurance options!</p>

        <p className="font-serif font-semibold text-xl md:text-3xl mb-8">Choose a country:</p>

        <div className="grid grid-cols-3 gap-8 justify-items-center text-center">

        {countryNames.map(country => {
          return (
            <Link 
              className="hover:underline underline-offset-4"
              href={`/country/${country}`}
              key={country}
            >{country}
            </Link>
          )
        })}
        </div>
        
    </main>
  )
}
