$(document).ready(function() {
  $("#country").countrySelect();
  setTimeout(function(){
    $("#loader").fadeOut();
  },5000);
  $("#signup-btn").click(function() {
    $("#login").fadeOut();
    $("#signup").fadeIn();
  });

  /**
  * Determine the calling code per country
  */
  $("#phone-input").click(function() {
    for (var i = 0; i < data.length; i++) {
      var countryVal = $("#country").val();
      if (countryVal.includes(data[i].name.common) || countryVal.includes(data[i].name.common)) {
        $(this).val(data[i].callingCode);
      }
    }
  });

  $("#phone-input").keyup(function() {
    if ($(this).val().length >= 10) {
      $("#signup-next-btn").removeClass("disabled");
    } else {
      $("#signup-next-btn").addClass("disabled");
    }
  })
});

// alert("It seems that we don't have your calling code. Please add it manually :)");