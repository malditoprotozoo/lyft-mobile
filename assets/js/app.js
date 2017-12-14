$(document).ready(function() {
  $("#country").countrySelect();
  $.getJSON("https://github.com/mledoze/countries/blob/master/countries.json", function() {
    console.log(this);
  })
  setTimeout(function(){
    $("#loader").fadeOut();
  },5000);
  $("#signup-btn").click(function() {
    $("#login").fadeOut();
    $("#signup").fadeIn();
  });
});