"use strict"; // for ECMA6

// Simple header phone icon functionality
$(function(){
  $(".js-phone-number").hover(
    () => $(".inner-header .phone-number div").css({"display": "inline-block"}),
    () => $(".inner-header .phone-number div").css({"display": "none"})
  );
});

// Just FYI If you wanted to see how I would do a plain old javascript validation
// of just the email field I'd probably just use a regex test like this:

// function validateEmail(email) {
//   var re = [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?;
//   return re.test(email);
// }

// Source of regex here (I wish I wrote this...): http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
