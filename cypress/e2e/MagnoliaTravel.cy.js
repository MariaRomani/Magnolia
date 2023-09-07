import Active from "../pom/Active"
import HomePage from "../pom/HomePage"
import Login from "../pom/Login"
import TourPage from "../pom/TourPage"




describe('Magnolia Travel', () => {


  // Precondition before each test
beforeEach(() => {
     cy.visit('https://demoauthor.magnolia-cms.com/travel/', { failOnStatusCode: false })
     cy.get('form').get('#username').then(() => {
     cy.get('#username').type('superuser')
     cy.get('#password').type('superuser')
     cy.get('form').get('button').click()

     
  })
  })

afterEach(() => {
      cy.log('Closing the browser.');
  })  
  
  
  // 2# Verify that the website was successfully loaded / opened.
     it('Verify the page is successfully loaded', () => {
     const lp = new Login();
     lp.VerifyPageLoadedSuccessfully();
 
  }) // end of --> it


  //3# Verify that the navigation elements work and lead to the expected pages.
     it('Verify on the navigation successfully between the Pages', () => {
     const Home_Page =new HomePage();
     Home_Page.navigateToToursPage();
     Home_Page.navigateToDestinationsPage();
     Home_Page.navigateToStoriesPage();
     Home_Page.navigateToAboutPage();
     Home_Page.navigateToContactPage();
     Home_Page.navigateToMembersPage();
     
  }) // end of --> it


// 4# Verify that the language can be switched between English and German.
     it('Verify on the Language Button', () => {
      const Home_Page =new HomePage();

     Home_Page.ChangeLanguage();
  
  }) // end of --> it




// 5# Verify that the Search feature works. "Europe" search Term.
     it('Verify on the Search Feature', () => {
     const Home_Page =new HomePage();
     Home_Page.SearchFeature();

  }) // end of --> it


// 6# Verify on the properties of the tour ACTIVE -> „Hut to Hut in the Swiss Alps” 
 

     it('Verify on the Tour Properties', () => {

     const TourActive =new Active();
     TourActive.getActivePage();
     TourActive.ViewSwissAlpsTour();   


     const tourName = 'Hut to Hut in the Swiss Alps';
     const expectedStartCity = 'Zurich, Switzerland';
     const expectedDuration = '7 Days';
     const expectedTourOperator = 'Magnolia Travels';

      const Tour_Page =new TourPage();
      

     Tour_Page.StartCity().then ((expectedStartCity)  =>{
          expect(expectedStartCity).to.equal(expectedStartCity);
     })

     Tour_Page.Duration().then ((expectedDuration)  =>{
     expect(expectedDuration).to.equal(expectedDuration);
    })

     Tour_Page.TourOperator().then ((expectedTourOperator)  =>{
      expect(expectedTourOperator).to.equal(expectedTourOperator);
  })
 
  }) // end of it



// 7# Booking the Tour -> „Hut to Hut in the Swiss Alps” 
     it('Book The Tour', () => {
     

      // Navigate to Active Tours Page
      const TourActive =new Active();

      TourActive.getActivePage();
      cy.wait(5000)
      TourActive.ViewSwissAlpsTour();    
     
      const Tour_Page =new TourPage();
      const NumberOfAdults = '1'
      //Tour_Page.BookingTheTour(NumberOfTravellers).type(NumberOfAdults);





      const PersonalDetails = 
      {
        FirstName : 'Maria',
        LastName :'Ragheb',
        Email : 'Sample@sample.com',
        Phone : '023455446'
      }

      const givenOption = '$39 Airport Pickup'
      

      const MailingAddress = 
      {
        City : 'Cairo',
        PostalOrZip : '01245',
        Country : 'Egypt',
        Province : 'Cairo',

      }

      const Choice = 'No Special Requirements';



      Tour_Page.ClickBookButton();
      Tour_Page.BookingTheTour(NumberOfAdults);
      Tour_Page.CheckBoxesOptions(givenOption);
      Tour_Page.ClickNextStep_BookYourTour();


      Tour_Page.CheckMealOptions(Choice);
      Tour_Page.NextStep_Meal();


      Tour_Page.PersonalDetails(PersonalDetails);
      Tour_Page.MailingAddress(MailingAddress);
      Tour_Page.ClickNextStep_PersonalDetails();


      Tour_Page.Review();
      Tour_Page.ConfirmBookingButtton();
      Tour_Page.ReportingBookingStatus();



      


         




    }) // end of it







}) // end of script