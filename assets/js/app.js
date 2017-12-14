var randomNumber = (function() {
  var code = "";
  var str = "1234567890";
  for (var i = 0; i < 3; i++) {
    code += str.charAt(Math.floor(Math.random() * str.length));
  }
  return code;
});

$(document).ready(function() {
  setTimeout(function(){
    $("#loader").fadeOut();
  },5000);
  $("#signup-btn").click(function() {
    $("#login").fadeOut();
    $("body").append(sectionSignup);
    $("#country").countrySelect();
    $("#loader").css({"display":"flex"});
    $("#signup").fadeIn();
    setTimeout(function(){
      $("#loader").fadeOut();
    },1000);
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
      var avoidLetters = /^[0-9]*$/;
      var thisInput = $(this).val();
      if (thisInput.length >= 10 && avoidLetters.test(thisInput)) {
        $("#signup-next-btn").removeClass("disabled");
      } else {
        $("#signup-next-btn").addClass("disabled");
      }
    });

    $("#signup-next-btn").click(function() {
      var userCode = randomNumber();
      alert(userCode);
      $("#signup").fadeOut();
      $("#loader").css({"display":"flex"});
      $("body").append(sectionVerify);
      $("#verify").fadeIn();
      setTimeout(function(){
        $("#loader").fadeOut();
      },1000);
      $("#verify-btn").click(function() {
        var verifyInput = $("#verify-input").val();
        if (verifyInput == userCode) {
          alert("holi");
        };
      });
    });
  });

});

// alert("It seems that we don't have your calling code. Please add it manually :)");