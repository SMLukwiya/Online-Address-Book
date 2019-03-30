$(document).ready(function() {
  $('form').submit(function(event){
    event.preventDefault();
    var newContact= new contact;
    var contacts=[]
    contacts.push(newContact)

    $("ul#contact").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $("input#fname").val("");
    $("input#lname").val("");
    $("input#tel").val("");
    $("input#email").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");

    $("#contact li").last().click(function(){
      $("div.showContact").show();
      $("div.showContact").html("First Name: "+(newContact.firstName)+"<br>"+
      "Last Name: "+(newContact.secondName)+ "<br>"+
      "Telephone: "+(newContact.phoneNumber)+ "<br>"+
      "Email: "+(newContact.email)+ "<br>"+
      "Address: "+(newContact.street)+ ", "+
      (newContact.city)+ ", "+
      (newContact.state));

    })

  })
})
