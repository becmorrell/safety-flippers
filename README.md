
## Overview:

- Whilst searching for nomad insurance for a specific country, I noticed there were no country-specific landing pages from insurance providers.
- This is a big opportunity to improve SEO ranking for these specific search terms, decrease ad-spend by supporting these search terms organically and improving Click-Through-Rate with more engaging and relevant landing page previews.

  <img width="400" alt="Screenshot 2023-09-26 at 12 11 02" src="https://github.com/becmorrell/safety-flippers/assets/77584099/cad521ec-37f4-4411-8cd7-ddc919c558fb" alt="a search on google for nomad insurance barbados"><br>

- I have built a prototype to solve this problem, by dynamically creating a unique landing page for every country, without the need for manual content curation for them all!

- Each country’s page displays relevant content, images and insurance information, as well as linking to the pages for similar countries. The latter improves SEO ranking, through increased user interaction and making the pages interconnected.
  
- There is also a supporting sitemap for Google Search indexing.


## How it works:
- Dynamic country page (/country/[country].js)
    - Requested path is used to retrieve country data, similar countries and a hero image
    - Uses NextJS Server Side Rendering (SSR), to return dynamic meta title, description and opengraph tags, whilst still using a dynamic page template. This is important for Google Search Indexing and previews when sharing via social channels.

- Country list page (/index.js)
    - Links to landing pages for every country, to facilitate testing (I will not be submitting the site for Google Indexing!)

- Sitemap (/sitemap.xml)
    - Created with a NodeJS script to quickly create a sitemap for every country, to submit to Google Search Console.


## Tech Used:
- React.js
- Next.js
- Tailwind
- Cypress
- https://restcountries.com/
- https://unsplash.com/documentation#search
- js2xmlparser
- Vercel (Deployment & Hosting)
