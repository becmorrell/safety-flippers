import Image from "next/image";

 export function NomadInfoCard({cardTitle, cardText, iconImage, iconAlt, objectFit="cover" }){
     return (
        <div className="flex flex-col gap-4 px-8 pb-10">
            <div data-test-id="card-image-container" className="relative rounded-full overflow-hidden border self-center h-40 w-40">
                <Image 
                    src={iconImage}
                    alt={iconAlt}
                    layout='fill'
                    objectFit={objectFit}
                    unoptimized
                />
            </div>
            <h3 data-test-id="card-title" className="text-center text-3xl">{cardTitle}</h3>
            <p data-test-id="card-text" className="text-lg text-center">{cardText}</p>
        </div>
     )
 }