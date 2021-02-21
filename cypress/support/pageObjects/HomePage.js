class HomePage
{
getName()
{   
    return cy.get(':nth-child(1) > .form-control')
}
getEmail()
{
    return cy.get(':nth-child(2) > .form-control')
}
getPassword()
{
    return cy.get('#exampleInputPassword1')
}
getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}
getGender()
{
    return cy.get('select[class="form-control"]')
}
getEntrepreneur()
{
    return cy.get('#inlineRadio3')
}
getShopTab()
{
    return cy.get(':nth-child(2) > .nav-link')
}
}
export default HomePage;