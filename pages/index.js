import countryNames from '../data/countryNames.json'
import Link from 'next/link'


export default function Home() {
  return (
    <main
      className={"flex min-h-screen bg-[#5cc6c7] flex-col items-center justify-between p-8 md:p-24"}
    >
        <h1 className="font-serif font-bold text-7xl mb-8">Nomad Insurance</h1>

        <p className="font-serif font-semibold text-3xl mb-8">Examples of links:</p>

        <div className="grid grid-cols-3 gap-8 justify-items-center text-center">

        {countryNames.map(country => {
          return (
            <Link 
              className="hover:underline underline-offset-4"
              href={`/country/${country}`}
            >{country}</Link>
          )
        })}
        </div>
        
    </main>
  )
}
