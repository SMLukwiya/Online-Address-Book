$(document).ready(function() {
  $("#show-contact").hide()
  $('form').submit(function(event){
    event.preventDefault();
    var newContact= new contact;
    $("ul#contact").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
    $("#contact").last().click(function(){
      $("#show-contact").show();
      $("#showFName").text(newContact.firstName);
      $("#showSName").text(newContact.secondName);
      $("#showEmail").text(newContact.email);
      $("#showTelephone").text(newContact.phoneNumber);
      $("#showStreet").text(newContact.street);
      $("#showCity").text(newContact.city);
      $("#showState").text(newContact.state);
    })

  })


})
