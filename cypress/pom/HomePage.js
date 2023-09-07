class HomePage {


    navigateToToursPage() {
    
             var subMenus = cy.get('.navbar-nav > li:first-child ul a')
             subMenus.each(singleSubMenu => {
             cy.get('.navbar-nav > li:first-child').first().click();
             cy.get('.navbar-nav > li:first-child ul a[href*="'+singleSubMenu.attr('href')+'"]').click();
             cy.get('h1.category').should('have.text', singleSubMenu.text());
    
           })
    
         }
    
    
     
    
    navigateToDestinationsPage() {
    
           var subMenus = cy.get('.navbar-nav > li:nth-child(2) ul a')
           subMenus.each(singleSubMenu => {
    
           cy.get('.navbar-nav > li:nth-child(2)').first().click();
           cy.log('.navbar-nav > li:nth-child(2) ul a[href*="'+singleSubMenu.attr('href')+'"]');
           cy.get('.navbar-nav > li:nth-child(2) ul a[href*="'+singleSubMenu.attr('href')+'"]').click();
           cy.get('h1.category').should('have.text', singleSubMenu.text());
    
           })
        }
        
    
    
    navigateToStoriesPage() {
    
           cy.get('a[href*="/travel/stories.html"]').click();
    
           // Assert the resulting URL or content of the target page
           cy.url().should('eq', 'https://demoauthor.magnolia-cms.com/travel/stories.html');
          
           cy.get('.active > a').click();
           cy.get('h1').click();
           cy.get('.story-main > .title-wrapper').click();
           cy.url().should('contains', 'story~');
           cy.go('back');
           cy.wait(2000)
            
        }
    
    
    navigateToAboutPage() {
    
           cy.get('a[href*="/travel/about.html"]').first().click();
          
           // Assert the resulting URL or content of the target page
           cy.url().should('eq', 'https://demoauthor.magnolia-cms.com/travel/about.html');
        
           cy.contains('h2', 'About Magnolia Travels').should('exist')
           cy.contains('.jumbotron', 'About Magnolia Travels');    
               
        }
    
    
    navigateToContactPage() {
    
           // Navigation to "Contact" page
             
           cy.get('a[href*="/travel/contact.html"]').first().click();
          
           // Assert the resulting URL or content of the target page
           cy.url().should('eq', 'https://demoauthor.magnolia-cms.com/travel/contact.html');
        
           cy.contains('h2', 'Contact').should('exist')
           cy.contains('.jumbotron', 'Contact');
          
        }
    
    
    navigateToMembersPage() {
    
          //Navigation to "Members" page
             
           cy.get('a[href*="/travel/members.html"]').first().click();
          
           // Assert the resulting URL or content of the target page
           cy.url().should('eq', 'https://demoauthor.magnolia-cms.com/travel/members.html');
          
           cy.contains('h2', 'Members').should('exist')
           cy.contains('.jumbotron', 'Members');
          
          
           // Assertion on Member "content button"
           cy.get('a[href*="/travel/members/protected.html"]').should('exist');
           cy.get('a[href*="/travel/members/protected.html"]').first().click();
          
           // Assert the resulting URL or content of the target page
           cy.url().should('eq', 'https://demoauthor.magnolia-cms.com/travel/members/protected.html');
          
          
           cy.contains('h2', 'Member Content').should('exist')
           cy.contains('.text-section', 'Member Content');
           cy.go('back');
           cy.wait(3000)
        
        }
    
    
        ChangeLanguage() {
    
           function changeLanguage() {
           cy.get('div#language-link li a').first().click()
           }
            
           function isGerman() {
           cy.get('a[href*="members.htm"]').first().should('have.text', 'Mitglieder')
           }
            
           function isEnglish() {
           cy.get('a[href*="members.htm"]').first().should('have.text', 'Members')
           } 
                  
        }
    
    
        SearchFeature() {
           cy.get('input#nav-search').type('EUROPE\n')
           cy.get('h3 > em').first().should('have.text', '3')
           cy.get('.list-group > a.list-group-item:not(.clearfix)').should('have.length', 3)
           cy.get('.list-group > a.list-group-item:not(.clearfix)').first().click({ force: true})
           cy.get('body').should('include.text', 'Europe')
    
        }
    
      
    
    
    
    
    
    
    
      }
    
    export default HomePage;