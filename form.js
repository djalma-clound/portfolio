const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorMassage = document.getElementById("errorMessage");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (nameInput.value.trim() === '') {
    errorName.innerText = 'Please enter your name';
    nameInput.focus();
    return;
  }else{
    errorName.innerText = '';
    
    
  }
  
  if (emailInput.value.trim() === '') {
    errorEmail.innerText = 'Please enter your email address';
    emailInput.focus();
    return;
  }else{
    errorEmail.innerText = '';

  }
  
  if (!isValidEmail(emailInput.value.trim())) {
    errorEmail.innerText = 'Please enter a valid email address';
    emailInput.focus();
    return;
  }else{
    errorEmail.innerText = '';

  }
  
  if (messageInput.value.trim() === '') {
    errorMassage.innerText = 'Please enter a message';
    messageInput.focus();
    return;
  }else{
    errorMassage.innerText = '';

  }
  // Submit the form
  form.submit();
});

function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
