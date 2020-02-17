
  // Business Logic for Tickets ---------
  // This is a constructor
  function Ticket(movie, time, age) {
    this.movie = movie;
    this.time = time;
    this.age = age;
  }
  
  // This is a prototype method to the constructor
  
  Ticket.prototype.showPrice = function() {
    var price = 0;
    
    if (this.movie.includes('Uncut Gems')) {
        price += 13;
        console.log(this.movie);
    };
    if (this.time.includes('7:30 pm')) {
        price += 15;
    } else {
      price += 14;
    };
    if (this.age.includes('55+')) {
      price += 8;
    } else if (this.age.includes('19-22')) {
      price += 11;
    } else {
      price += 12;
    }
    this.price = price;
  };


  $(document).ready(function() {
    $("form#price-show").submit(function(event) {
      event.preventDefault();
      var movie = $("#movies").val("");
      var time = $("#times").val("");
      var age = $("#age").val("");
      var ticketResults = new Ticket(movie, time, age);
      ticketResults.showPrice();
      console.log(ticketResults);
      $("#price-results").text("Thank you! Your price for " + ticketResults.movie + " was " + ticketResults.price + " at " + ticketResults.time + "pm. Your price was dependendent on your " + ticketResults.age + " age(range) ");
    })
  })