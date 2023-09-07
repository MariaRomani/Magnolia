class TourPage
{
    constructor() {

    this.tourName = 'Hut to Hut in the Swiss Alps';
    this.expectedStartCity = 'Zurich, Switzerland';
    this.expectedDuration = '7 Days';
    this.expectedTourOperator = 'Magnolia Travels';
    }


  
    
// Define page elements using Cypress commands or locators
 StartCity() 
    {
      return cy.get('.product-property .property-label').contains('start city').siblings('.property-value').invoke('text');    

    // .contains('start city')
     //.siblings('.property-value')
    }

 Duration() 
    {
     return cy.get('.product-property .property-label').contains('duration').siblings('.property-value').invoke('text'); 
    }
 
  
 TourOperator() 
    {
      return cy.get('.product-property .property-label').contains('tour operator').siblings('.property-value').invoke('text'); 
    }



 ClickBookButton() 
     { 
        cy.wait(4000);
        cy.get('div.product-action input[type=submit]').click(); 
  
     }


 BookingTheTour(NumberOfAdults) 
    {
     cy.get('input#adults').type(NumberOfAdults); 
    }



 CheckBoxesOptions(givenOption) {
        if (givenOption.includes('$39 Airport Pickup')) {
            cy.get('input#upgrades_0').check();


        } else if (givenOption.includes('$99 Carbon Offset'))
        {
            cy.get('input#upgrades_1').check();

        }
          else (givenOption.includes('$299 Support local community social, environmental, small business, emergency relief.'))
          {
              cy.get('input#upgrades_2').check();
  
          }




      }


    
     
 ClickNextStep_BookYourTour ()
     {
     cy.get('div.button-wrapper input[type=submit]').click(); 
     cy.wait(3000);
     }

     

 CheckMealOptions(Choice) 
 {
    if (Choice.includes('Gluten Free')) {
        cy.get('input#mealOptions_0').click();


    } 
    else if (Choice.includes('Halal'))
    {
        cy.get('input#mealOptions_1').click();

    }
    else if (Choice.includes('Kosher'))
    {
        cy.get('input#mealOptions_2').click();

    }
    else if (Choice.includes('Vegan'))
    {
        cy.get('input#mealOptions_3').click();

    }
    else if (Choice.includes('Vegetarian'))
    {
        cy.get('input#mealOptions_4').click();

    }
    else (Choice.includes('No Special Requirements'))
      {
          cy.get('input#mealOptions_5').click();

      }

   
}


NextStep_Meal ()
    {
     cy.get('div.button-wrapper input[value="Next step"]').click(); 
    }



PersonalDetails (PersonalDetails)
    {
    //cy.get('input#adults').type(NumberOfTravellers.NumberOfAdults); 
     cy.get('input#firstName').type(PersonalDetails.FirstName); 
     cy.get('input#lastName').type(PersonalDetails.LastName); 
     cy.get('input#email').type(PersonalDetails.Email); 
     cy.get('input#phone').type(PersonalDetails.Phone); 
    }

MailingAddress (MailingAddress)
     {

     cy.get('input#city').type(MailingAddress.City); 
     cy.get('input#postalOrZip').type(MailingAddress.PostalOrZip); 
     cy.get('input#country').type(MailingAddress.Country); 
     cy.get('input#province').type(MailingAddress.Province); 
     }


 ClickNextStep_PersonalDetails () 
    {
     cy.get('div.button-wrapper input[value="Next step"]').click(); 

    }   
    


Review () 
    {
     cy.get('input#photograph').selectFile('cypress/fixtures/PhotoSample.png'), 
     {
     action: 'drag-drop',
     }
    }
       


ConfirmBookingButtton ()
    {
     cy.get('div.button-wrapper input[value="Confirm Booking"]').click(); 
    }

 

   
ReportingBookingStatus ()
    {
        cy.get('div.error').invoke('text').then((text) => {
            if(text.includes('error'))
             throw new Error('Unexpected error: ' + text.trim())
        });
    }
       
 

}






export default TourPage;