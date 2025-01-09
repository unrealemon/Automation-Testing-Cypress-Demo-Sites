

describe('handle dropdown',()=>{

    it.skip('Dropdown with select',()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.wait(2000)
        cy.get('#zcf_address_country')
        .select('Zambia')
        cy.wait(2000)
        cy.get('#zcf_address_country')
        .should('have.value','Zambia')
        cy.wait(2000)
        cy.get('#zcf_address_country')
        .select('Bangladesh')
        cy.wait(2000)
        cy.get('#zcf_address_country')
        .should('have.value','Bangladesh')
        cy.wait(2000)


    })

    it.skip('Dropdown without select',()=>{

        cy.visit("https://bookonwardticket.com/dummy-ticket/?gad_source=1&gclid=Cj0KCQiAuou6BhDhARIsAIfgrn7yaXZUGTjE1NpKjQG3G7pIgwNNWA1Uq7sFhrz6DdW8mSQ-X5VIcT8aAtgJEALw_wcB")
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(2) > .wpcf7-form-control-wrap > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
        cy.wait(2000)
        cy.get('.select2-search__field').type('Dhaka').type('{enter}')
        cy.wait(2000)
    })


    it.skip('Auto suggest dropdown',()=>{

        cy.visit("https://www.wikipedia.org/")
        cy.wait(2000)
        cy.get('#searchInput').type('Dhaka')
        cy.wait(2000)
        cy.get(".suggestion-title").contains("Dhaka Metro Rail").click()

        
        cy.wait(2000)
    })


    it('Dynamic dropdown',()=>{

        cy.visit("https://www.google.com/")
        cy.wait(2000)
        cy.get("textarea[name='q']").type("Cypress automation").click()
        cy.wait(2000)
        cy.get("div.wM6W7d>span").should('have.length',13)
        cy.get("div.wM6W7d>span").each(($el, index, $list)=>{
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })
        cy.get("textarea[name='q']").should('have.value','cypress automation tutorial')
        cy.wait(2000)
    })
})