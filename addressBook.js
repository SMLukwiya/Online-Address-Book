function contact(aFirstName,aSecondName,aPhoneNumber,anEmail,aStreet,aCity,aState) {
  var aFirstName= document.getElementById('fname').value
  var aSecondName=document.getElementById('lname').value
  var aPhoneNumber=document.getElementById('tel').value
  var anEmail=document.getElementById('email').value
  var aStreet=document.getElementById('street').value
  var aCity=document.getElementById('city').value
  var aState=document.getElementById('state').value
  this.firstName   = aFirstName,
  this.secondName  = aSecondName,
  this.phoneNumber = aPhoneNumber,
  this.email= anEmail,
  this.street=aStreet,
  this.city=aCity,
  this.state=aState;

}
