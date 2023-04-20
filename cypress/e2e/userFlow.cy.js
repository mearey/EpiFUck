describe('dropdown select should work', () => {
  it('Meningitis passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Meningitis')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Covid19 passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Covid19')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Cholera passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Cholera')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Measles passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Measles')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Monkeypox passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Monkeypox')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Diphtheria passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Diphtheria')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
})

describe('view charts should work', () => {
  it('tab switch passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="tabsCharts"]')
      .click()
    cy.get('[name="graph"]').should('exist')
  })

  // check if select works on differnt tab
  it('Meningitis passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Meningitis')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Covid19 passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Covid19')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Cholera passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Cholera')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Measles passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Measles')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Monkeypox passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Monkeypox')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })
  it('Diphtheria passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000/');

    cy.get('[name="disease"]').select('Diphtheria')
    cy.get('[id="downloadBtn"]')
      .click()
    cy.get('[name="success message"]').should('exist')
  })


})
