describe('My First Test', () => 

  {
    it('Verify Title-Positive', () => 
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.title().should('eq',"OrangeHRM");
    })

    it('Verify Title-Negative', () => 
        {
          cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
          cy.title().should('eq',"OrangeHRM123");
        })
  })