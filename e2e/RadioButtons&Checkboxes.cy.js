
describe ("Check UI Elements",()=>{
    it("Checking radio buttons",()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")

        cy.get('[value="male"]').should('be.visible')
        cy.get('[value="female"]').should("be.visible")
        cy.get('[value="other"]').should("be.visible")

    })
})