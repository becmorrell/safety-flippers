export default function Meta({title, image, url}) {
    return (
        <>
        <meta name="robots" content="index,follow"/>

        {/* Open Graph tags */}
        <meta property="og:title" content={title}/>
        <meta property="og:site_name" content="SafetyFlippers"/>
        <meta property="og:url" content={url}/>
        <meta property="og:description" content="Dive into Safety Flippers: Where insurance seals the deal on your nomadic adventures! 🌊 Get a 'seal' of approval on global coverage, and travel worry-free with our flip-tastic Nomad insurance options!"/>
        <meta property="og:type" content="website"/>

        {/* Open Graph Images */}
        <meta property="og:image" content={image}/>

        <meta name="author" content="Rebecca Morrell"/>
        <meta name="description" content="Dive into Safety Flippers: Where insurance seals the deal on your nomadic adventures! 🌊 Get a 'seal' of approval on global coverage, and travel worry-free with our flip-tastic Nomad insurance options!"/>

        <link rel="canonical" href={url}/>
        <link rel="icon" href="/assets/seal.png" sizes="any" />
      </>
    )
}