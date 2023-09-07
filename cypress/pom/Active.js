class Active {


 




    // Navigate to Tours --> Active

getActivePage() 
    {
      var subMenus = cy.get('.navbar-nav > li:first-child ul a')
      var firstSubMenu = subMenus.first()
    
      cy.get('.navbar-nav > li:first-child').first().click()
      firstSubMenu.click()

        }
   
      
ViewSwissAlpsTour()    
    {
      cy.wait(5000)
      cy.contains('.tour-card-content', 'Hut to Hut in the Swiss Alps').click();

      
    } 



}





export default Active;