import React from 'react'
import SimilarCountriesCard from './exploreCountriesCard'

const testProps = {
  country: {
    name: 'italy',
    flag: {
      src: '/assets/feather-white-icon.png',
      alt: "a white feather test image"
    }
  }
}

describe('<SimilarCountriesCard />', () => {
  it('renders with the correct props passed', () => {
    
    cy.mount(<SimilarCountriesCard {...testProps} />)
    cy.get('[data-test-id="card-title"]').should("have.text", testProps.country.name)
  })


  it('should click the <a> tag and navigate to a different page', () => {
    cy.mount(<SimilarCountriesCard {...testProps} />)

    cy.get('[data-test-id="card-link"]')
      .should('exist') 
      .should('have.attr', 'href')
    })
})