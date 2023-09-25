const fs = require('fs')
const js2xmlparser = require('js2xmlparser')
const path = require('path')

// Read the input JSON file
const inputFile = 'countryNames.json'
const inputData = fs.readFileSync(inputFile, 'utf8')

try {
  // Parse the input JSON data
  const jsonData = JSON.parse(inputData)

  // Create sitemap xml file
  const sitemapObject = {
    '@': {
      xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    },
    url: jsonData.map((item) => ({
      loc: `https://www.safety-flippers.co.uk/country/${item}`
    }))
  }

  const sitemapXML = js2xmlparser.parse('urlset', sitemapObject)

  // Save the mapped data to a new JSON file
  const outputFilePath = 'sitemap.xml'
  fs.writeFileSync(outputFilePath, sitemapXML, 'utf8')

  console.log(`Data has been transformed and saved`)
} catch (error) {
  console.error('Error processing JSON:', error.message)
}