import { cy, it, describe } from 'local-cypress'

describe('authentication', () => {
    it('Login as distict admin', () => {
        cy.visit('http://localhost:4000/')

        // Login
        cy.get('input[name="username"]').type('karadmin')
        cy.get('input[name="password"]').type('passwordR0FL')
        cy.get('button').contains('Login').click()

        // Check URL
        cy.url().should('include', '/facility')

        // Assert user
        cy.get('a').contains('Profile').click()
        cy.url().should('include', '/user/profile')
        cy.get('dd').should('contain', 'karadmin')
        cy.get('dd').should('contain', 'DistrictAdmin')
    })
})
