import React from 'react'
import { NomadInfoCard } from './NomadInfoCard'


const testProps = {
  cardTitle: 'Test card title',
  cardText: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  iconImage: '/assets/feather-white-icon.png',
  iconAlt: "some info about the image"
}

describe('<NomadInfoCard />', () => {
  it('when props are passed to the card, it renders correctly', () => {

    cy.mount(<NomadInfoCard {...testProps} />)

    cy.get('[data-test-id="card-title"]').should('have.text', testProps.cardTitle)
    cy.get('[data-test-id="card-text"]').should('have.text', testProps.cardText)

    cy.get('[data-test-id="card-image-container"]').should('exist');

    cy.get('[data-test-id="card-image-container"]')
      .find('img')
      .should('be.visible')
      .should('have.attr', 'src', testProps.iconImage)
      .should('have.attr', 'alt', testProps.iconAlt)
  })
})