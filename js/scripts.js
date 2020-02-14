
  // Business Logic for Tickets ---------
  // This is a constructor
  function Ticket(movie, time, age) {
    this.movie = movie,
    this.time = time,
    this.age = age
  }
  
  // This is a prototype method to the constructor
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }
  
  // User Interface Logic ---------
  // The first function shows contacts as they're being added to the address book (first and last name is visible)
  // For each contact, assign the variable htmlForContactInfo an html list element with an id, first name and last name. This Li will go into the empty ul element.
  var addressBook = new AddressBook();
  // here we created a new AddressBook object as a global variable
  
  function displayMovieDetails(MoviesToDisplay) {
    var contactsList = $("ul#contacts");
    var htmlForContactInfo = "";
    addressBookToDisplay.contacts.forEach(function(contact) {
      htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + " " + contact.emailAddress + " " + contact.workEmailAddress + " " + contact.physicalAddress + "</li>";
    });
    contactsList.html(htmlForContactInfo);
  };
  // The second function is for the event listener to show/hide the div with visible first and last name and phone number.
  function showContact(contactId) {
    var contact = addressBook.findContact(contactId);
    $("#show-contact").show();
    $(".first-name").html(contact.firstName);
    $(".last-name").html(contact.lastName);
    $(".phone-number").html(contact.phoneNumber);
    $(".email-address").html(contact.emailAddress);
    $(".work-email-address").html(contact.workEmailAddress);
    $(".physical-address").html(contact.physicalAddress);
    var buttons = $("#buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" + + contact.id + ">Delete</button>");
  }
  // The third function - the on method within this function takes two arguments, 1) click on parent ul element 2) click on child li element
  // the click on the parent ul element is delegated to its child li elements, or the li click event bubbles up to the parent.
  // after submitting the form this will show first and last,when you click the li element you get first and last name and phone number returned.
  // the parent element 
  function attachTicketPrices() {
    $("ul#contacts").on("click", "li", function() {
     showContact(this.id);
         //show contact method passes this.id as an argument and returns an id based on the findContact prototype method
    });
  };


  $(document).ready(function() {
      
    $("form#price-show").submit(function(event) {
      event.preventDefault();

    
 
    //   var inputtedFirstName = $(".dropdown-item").val();
    //   var inputtedLastName = $("input#new-last-name").val();
    //   var inputtedPhoneNumber = $("input#new-phone-number").val();
    //   var inputtedEmailAddress = $("input#new-email-address").val();
    //   var inputtedWorkEmailAddress = $("input#new-work-email-address").val();
    //   var inputtedPhysicalAddress = $("input#new-physical-address").val();
    //   $("input#new-first-name").val("");
    //   $("input#new-last-name").val("");
    //   $("input#new-phone-number").val("");
    //   $("input#new-email-address").val("");
    //   $("input#new-work-email-address").val("");
    //   $("input#new-physical-address").val("");
    //   $("p").not(".not-this").remove();
    

    //   var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress, inputtedWorkEmailAddress, inputtedPhysicalAddress);
    //   addressBook.addContact(newContact);
    //   displayContactDetails(addressBook);
    })
  })