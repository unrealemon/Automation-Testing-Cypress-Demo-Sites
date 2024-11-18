

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
 
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin')
      
      
      


    })

    it("Explicit Assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        let expName = "Ani Patrick"

        cy.get('.oxd-userdropdown-tab').then((x)=>{

            //BDD style
            let actName = x.text()
            expect(actName).to.equal(expName)
            //expect(actName).to.not.equal(expName)

            //TDD style
            assert.equal(actName,expName)
            //assert.notEqual(actName,expName)




        })

      
      


    })


})