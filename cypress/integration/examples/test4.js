describe('My Second Test Suite', function()
{
    it('My Second test case',function()
    {
        //usage of next()
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      /*cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        const text=$el.text()
        
        if (text.includes('Python')) {
          
            
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText =price.text()
                expect(priceText).to.equal('25')
            }
            )
        } 
      })
      cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        const text=$el.text()
        if (text.includes('Python')) {
            const prices=$el.next().text()
            expect(prices).to.equal('25')
        }
        
    } )
    
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        const text=$el.text()
        if (text.includes('Python')) {
            expect($el.next().text()).to.equal('25')
            //cy.wrap($el).next().should('have.text', '25')
        }
    
    } )*/
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        if ($el.text().includes('Python')) {
            expect($el.next().text()).to.equal('25')
            //cy.wrap($el).next().should('have.text', '25')
        }
    
    } )
  })
    })
