$(document).ready(function() {
  $("#country").countrySelect();
  setTimeout(function(){
    $("#loader").fadeOut();
  },5000);
  $("#signup-btn").click(function() {
    $("#login").fadeOut();
    $("#signup").fadeIn();
  });
});