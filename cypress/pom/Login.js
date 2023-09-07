class Login
{

    setUserName()
{
    cy.get('input[placeholder="Username"]').type("superuser");

}
    
setPassword()
{
    cy.get('input[placeholder="Password"]').type("superuser");

}

ClickLogin()
{
    cy.get('form').get('button').click();
}


VerifyPageLoadedSuccessfully()
{

    cy.get('a[href*="Logout"]').should('exist')
    cy.get('a[href*="members"]').should('exist')

    cy.get('a[href="/travel/members/profile-update.html"]')
    cy.contains('a', 'superuser')
    cy.get('div[id="user-links"] a').eq(1)
    
    cy.get('nav[role="navigation"] img').should('exist')
    

}




}

export default Login;