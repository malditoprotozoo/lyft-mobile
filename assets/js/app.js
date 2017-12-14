/**
* Generates random number (duh)
*/
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
    $("body").prepend(sectionSignup);
    $("#country").countrySelect();
    $("#loader").css({"display":"flex"});
    $("#signup").fadeIn();
    setTimeout(function(){
      /**
      * Loader added to all transitions, to avoid watching the site when is loading
      */
      $("#loader").fadeOut();
    },1000);
    /**
    * Determine the calling code per country
    */
    $("#signup-prev-btn").click(function() {
      $("#signup").fadeOut();
      $("#loader").css({"display":"flex"});
      $("#login").fadeIn();
      setTimeout(function(){
        $("#loader").fadeOut();
      },1000);
    });

    $("#phone-input").click(function() {
      for (var i = 0; i < data.length; i++) {
        var countryVal = $("#country").val();
        if (countryVal.includes(data[i].name.common) || countryVal.includes(data[i].name.common)) {
          $(this).val(data[i].callingCode);
        }
      }
    });

    $("#phone-input").keyup(function() {
      /**
      * Regular expression to add the class disabled when the user inputs letters
      */
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
      $("body").prepend(sectionVerify);
      $("#verify").fadeIn();
      var newCode = randomNumber();
      $("#resend").click(function() {
        alert(newCode);
      });
      setTimeout(function(){
        $("#loader").fadeOut();
      },1000);
      $("#verify-prev-btn").click(function() {
        $("#verify").fadeOut();
        $("#loader").css({"display":"flex"});
        $("#signup").fadeIn();
        setTimeout(function() {
          $("#loader").fadeOut();
        },1000);
      });
      
      $("#verify-input").keyup(function() {
        var thisValue = $(this).val();
        if (thisValue.length == 3) {
          $("#verify-btn").removeClass("disabled");
        } else {
          $("#verify-btn").addClass("disabled");
        }
      });

      $("#verify-btn").click(function() {
        var verifyInput = $("#verify-input").val();
        if (verifyInput == userCode || verifyInput == newCode) {
          $("#verify").fadeOut();
          $("#loader").css({"display":"flex"});
          $("body").prepend(sectionRegister);
          $("#register").fadeIn();
          setTimeout(function(){
            $("#loader").fadeOut();
          },1000);
          $("#register-prev-btn").click(function() {
            $("#register").fadeOut();
            $("#loader").css({"display":"flex"});
            $("#verify").fadeIn();
            setTimeout(function() {
              $("#loader").fadeOut();
            },1000);
          });
        } else {
          alert("This number is incorrect.");
        }
        $("#agreement").click(function() {
          var firstName = $("#first-name").val().length;
          var lastName = $("#last-name").val().length;
          var emailInput = $("#email").val().length;
          var agree = $(this).val();
          if(firstName !== 0 && lastName !== 0 && emailInput !== 0 && agree == "on") {
            $("#register-btn").removeClass("disabled");
          } else {
            $("#register-btn").addClass("disabled");
          }
          $("#register-btn").click(function() {
            $("#register").fadeOut();
            $("#loader").css({"display":"flex"});
            $("body").prepend(sectionSuccessful);
            $("#successful").fadeIn();
            setTimeout(function() {
              $("#loader").fadeOut();
            },1000);
            $("#successful-btn").click(function() {
              $("#successful").fadeOut();
              $("#loader").css({"display":"flex"});
              $("#login").fadeIn();
              setTimeout(function() {
                $("#loader").fadeOut();
              },1000);
            });
          });
        });
      });
    });
  });
});