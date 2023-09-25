export default function({capitaliseCountry, countryName, countryImage}) {
    return (
        <>
        <meta name="robots" content="index,follow"/>

        {/* Open Graph tags */}
        <meta property="og:title" content={`Nomad Insurance in ${capitaliseCountry} by SafetyFlippers`}/>
        <meta property="og:site_name" content="SafetyFlippers"/>
        <meta property="og:url" content={`https://www.safetyFlippers.com/country/${countryName}`}/>
        <meta property="og:description" content="hi"/>
        <meta property="og:type" content="website"/>

        {/* Open Graph Images */}
        <meta property="og:image" content={countryImage}/>

        <meta name="author" content="Rebecca Morrell"/>
        <meta name="description" content="hi"/>

        <link rel="canonical" href={`https://www.safetyFlippers.com/country/${countryName}`}/>
      </>
    )
}