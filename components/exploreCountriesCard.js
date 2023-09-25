import Image from "next/image";
import Link from "next/link";

export default function SimilarCountriesCard({country}) {
    return (
        <div className="flex flex-col items-center gap-6 border border-1 border-white rounded-md overflow-hidden pb-10 bg-[#5cc6c7]">
            <div className="h-56 w-full relative">
                <Image 
                    src={country.flag.src}
                    alt={country.flag.alt}
                    layout="fill"
                    objectFit="cover"
                    unoptimized
                />
                </div>
                    <h3 data-test-id="card-title" className="text-center text-3xl">{country.name}</h3>
                    <Link data-test-id="card-link" href={`/country/${country.name}`}>
                    <button className="flex border border-white border-2 p-4 rounded-md">
                        Explore Nomad insurance
                    </button>
                    </Link>                
                </div>
    )
                           
}