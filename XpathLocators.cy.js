describe('XPathLocators', () => 

    {
      it('Find no products', () => 
      {
      
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.scrollTo(0, 200)
        cy.wait(2000)
        cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers').click()
        cy.wait(2000)
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length', 6)

    
      })
  
      
    }) 