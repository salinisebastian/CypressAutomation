describe('My Second Test Suite', function()
{
    it('My Second test case',function()
    {
        //checkbox
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
         cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //select dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('ar')
        cy.get('.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front').find('.ui-menu-item').each(($el, index, $list) => {
            const tex=$el.text()
            if(tex==='Argentina')
            {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','Argentina')
        //visible invisible
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        //alert
        cy.get('#alertbtn').click()
        
        cy.on('window:alert',(str)=>
        {
            
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('[value="Confirm"]').click()
        cy.on('window:confirm',(str)=>
        {
            
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //how to handle child window
        cy.get('#opentab').invoke('removeAttr','target').click()
        //checking correct url 
        cy.url().should('include','rahulshetty')
        //go back to previous url
        cy.wait(10000)
       cy.go('back')
cy.url().should('include','AutomationPractice')
    })
})
