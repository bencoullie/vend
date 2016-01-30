"use strict"; // for ECMA6 (#thefutureisnow)

$(function(){
  // Simple header phone icon functionality
  $(".js-phone-number").hover(
    () => $(".inner-header .phone-number div").css({"display": "inline-block"}),
    () => $(".inner-header .phone-number div").css({"display": "none"})
  );

  // unSlider activation
  $('.my-slider').unslider();
});

// Just FYI If you wanted to see how I would do a plain old javascript validation
// for the email field alone I'd probably just use a regex test like this:

// function validateEmail(email) {
//   let re = [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?;
//   let emailTest = re.test(email input);
// }

// I'd then block/accept form submission and display a visual cue using this boolean as a catalyst.
// Source of regex here (I wish I wrote this...): http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
