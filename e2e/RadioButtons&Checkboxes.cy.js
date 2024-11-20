
describe ("Check UI Elements",()=>{
    /*it("Checking Radio buttons",()=>{

        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")

        //visibility of radio buttons
        cy.get('[value="male"]').should('be.visible')
        cy.get('[value="female"]').should("be.visible")
        cy.get('[value="other"]').should("be.visible")

        //selecting male radio button
        cy.get('[value="male"]').check().should('be.checked')
        cy.get('[value="female"]').should("not.be.checked")
        cy.get('[value="other"]').should("not.be.checked")
        cy.wait(2000)

        //selecting female radio button
        cy.get('[value="female"]').check().should("be.checked")
        cy.get('[value="male"]').should('not.be.checked')
        cy.get('[value="other"]').should("not.be.checked")
        cy.wait(2000)

         //selecting other radio button
         cy.get('[value="other"]').check().should("be.checked")
         cy.get('[value="male"]').should('not.be.checked')
         cy.get('[value="female"]').should("not.be.checked")
         cy.wait(2000)
    })*/

         it("Checking Check boxes",()=>{

            cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
    
            //visibility of Check boxes
            cy.get('[value="Bike"]').should('be.visible')
            cy.wait(2000)

            cy.get('[value="Car"]').should("be.visible")
            cy.wait(2000)
    
            //selecting Bike Check box
            cy.get('[value="Bike"]').check().should('be.checked')
            cy.wait(2000)

            //Unselecting Bike Check box
            cy.get('[value="Bike"]').uncheck().should('not.be.checked')
            cy.wait(2000)

            //selecting Car Check box
            cy.get('[value="Car"]').check().should("be.checked")
            cy.wait(2000)

            //Unselecting Car Check box
            cy.get('[value="Car"]').uncheck().should("not.be.checked")
            cy.wait(2000)

            //selecting All Check boxes
            cy.get("input[type='checkbox']").check().should("be.checked")
            cy.wait(2000)

            //Unselecting All Check boxes
            cy.get("input[type='checkbox']").uncheck().should("not.be.checked")
            cy.wait(2000)

            //selecting first Check boxe
            cy.get("input[type='checkbox']").first().check().should("be.checked")
            cy.wait(2000)

            //selecting last Check boxe
            cy.get("input[type='checkbox']").last().check().should("be.checked")
            cy.wait(2000)

    
             
        })
})