
describe("Assertions Demo", ()=>{
    
    it("Implicit Assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // implicit assertions
        cy.url().should('include','orangehrmlive.com')
        //should
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //and
        .and('contain','orangehrm')
        //negative case
        .and('not.contain','yellowhrm')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

      




    })
})