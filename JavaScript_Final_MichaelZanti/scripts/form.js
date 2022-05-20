// JavaScript Document



	
  function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var message = document.getElementById("message").value;
 
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 6){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
	  
  if(address.length < 6){
    text = "Please Enter a Valid Address";
    error_message.innerHTML = text;
    return false;
  }
	  
  if(state.length != 2){ 
   
    text = "Please enter Valid state Code";
    error_message.innerHTML = text;
    return false;
  }

  if(isNaN(zip) || zip.length != 5){
    text = "Please Enter a Valid Zip Code";
    error_message.innerHTML = text;
    return false;
  }
	  
  
	 
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
	  

  if(message.length <= 25){
    text = "Please Enter More Than 25 Characters";
    error_message.innerHTML = text;
    return false;
  }
	  
  
	  
	  
  alert("Form Submitted Successfully!");
  return true;
}

	

	

