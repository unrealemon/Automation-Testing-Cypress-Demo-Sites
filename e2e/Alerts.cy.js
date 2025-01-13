
describe('Alerts', ()=> {

    it('Js alerts', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(2000)

        cy.get(':nth-child(1) > button').click();
        cy.wait(2000)

        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert');
        } )
        cy.wait(2000)
        cy.get('#result').should("have.text", "You successfully clicked an alert")
        //cypress closes alerts automatically, so there is no need to write separate cases for it.

    })

    it('Js confirm - Ok', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(2000)

        cy.get(':nth-child(2) > button').click();
        cy.wait(2000)

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
        } )
        cy.wait(2000)
        cy.get('#result').should("have.text", "You clicked: Ok")
        //cypress closes alerts automatically using ok, so there is no need to write separate cases for it.

    })

    it('Js confirm - Cancel', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(2000)

        cy.get(':nth-child(2) > button').click();
        cy.wait(2000)

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
        } )

        cy.on('window:confirm', ()=>false) //closing alert by cancel

        cy.wait(2000)
        cy.get('#result').should("have.text", "You clicked: Cancel")
        cy.wait(2000)

    })

    it('Js Prompt - Ok', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(2000)


        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Inserted');
        })

        cy.get(':nth-child(3) > button').click();
       
        cy.wait(2000)

        cy.get('#result').should("have.text", "You entered: Inserted")
        cy.wait(2000)

    })

    
    it('Js Prompt - Cancel', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(2000)


        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Inserted')
        })

        cy.get(':nth-child(3) > button').click();
       
        cy.wait(2000)

        cy.on('window:prompt', ()=>false) //closing alert by cancel

        cy.get('#result').should("have.text", "You entered: Inserted")
        cy.wait(2000)

    })

    it('Authentication from pop up- Approach 1', ()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth:
            {
                username: "admin",
                password: "admin"
            }
        })
        cy.wait(2000)
        cy.get('p').should('have.contain', 'Congratulations! You must have the proper credentials.')
        cy.wait(2000)
    })

    it('Authentication from pop up- Approach 2', ()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.wait(2000)
        cy.get('p').should('have.contain', 'Congratulations! You must have the proper credentials.')
        cy.wait(2000)
    })


})
    
    