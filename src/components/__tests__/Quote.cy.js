import Quote from '../Quote.vue'

describe('Quote', () => {
  it('playground', () => {
    cy.mount(Quote, { props: { quote: "quote" } })
  })

  it('renders properly', () => {
    cy.mount(Quote, { props: { quote: "my quote" } })
    cy.get('h3').should('contain', 'my quote')

  })
})
