const userExample = {
  email: `johndoe${Math.floor(Math.random() * 100)}@gmail.com`,
  password: '123'
}

describe('Signup spec', () => {
  it('should create an account on system', () => {
    cy.visit('http://localhost:5173/signup')
    cy.get('#email').type(userExample.email)
    cy.get('#password').type(userExample.password)
    cy.get('#confirmPassword').type(userExample.password)
    cy.get('#submitButton').click()

    expect(cy.url().should('eq', 'http://localhost:5173/'))
  })
})

describe('Login Spec', () => {
  it('should login on system', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#email').type('fq@gmail.com')
    cy.get('#password').type('123')
    cy.get('#submitButton').click()

    expect(cy.url().should('eq', 'http://localhost:5173/dashboard'))
  })
})

describe('Edit Profile Spec', () => {
  it('should login and edit profile by chaging name', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#email').type('fq@gmail.com')
    cy.get('#password').type('123')
    cy.get('#submitButton').click()
    expect(cy.url().should('eq', 'http://localhost:5173/dashboard'))
    cy.wait(100)
    cy.get('#editProfileLink').click()
    expect(cy.url().should('eq', 'http://localhost:5173/dashboard/update'))
    cy.wait(100)
    cy.get('#name').clear().type('Felipe Queiroz')
    cy.get('#submitButton').click()
    expect(cy.url().should('eq', 'http://localhost:5173/dashboard'))
    cy.wait(100)
    cy.get('h1').contains('Welcome, Felipe Queiroz')
  })
})