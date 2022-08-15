   // Below Function Executes On Form Submit
function Validate() {
    // Storing Field Values In Variables
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    // Regular Expression For Email
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    // Conditions
    if (name != '' && email != '' && subject != '') {
    if (email.match(emailReg)) {
    if (document.getElementById("male").checked || document.getElementById("female").checked) {
    if (subject.length == 10) {
    alert("All type of validation has done on OnSubmit event.");
    return true;
    } else {
    alert("The Contact No. must be at least 10 digit long!");
    return false;
    }
    } else {
    alert("You must select gender.....!");
    return false;
    }
    } else {
    alert("Invalid Email Address...!!!");
    return false;
    }
    } else {
    alert("All fields are required.....!");
    return false;
    }
    }
   
   
   
   /*function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('fname');
   
    if (elUsername.value.length < 5) {
        elMsg.textContent = 'Name must be 5 characters or more';

    } else {
        elMsg.textContent = '';
    }

}

var elUsername = document.getElementById('fname');
elUsername.onblur = checkUsername;
  
function checkEmail() {  
    var elMsg = document.getElementById('feedback');
 var email = document.getElementById('email');
    if (email.value.length < 10) {
        elMsg.textContent = 'email cannot be ampty';
       } else {
        elMsg.textContent = '';
       }

 }

 var email = document.getElementById('email');
 email.onblur = checkEmail; */