const form = document.getElementById("form");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("textarea");
const thankYou = document.querySelector(".thank-you");
const name = document.querySelector('input[name="name');

form.addEventListener("submit", (e) => {
  //e.preventDefault();
  checkInputs();

  if (name.value) {
    nameInput.classList.add("invalid");
    nameInput.nextElementSibling.classList.remove("hidden");
  } 
 

 if (isFormValid) {
   form.submit();
   thankYou.classList.remove("hidden");
 }
});

let isFormValid = false;

function checkInputs(){
 const fnameValue = fname.value.trim();
 const emailValue = email.value.trim();
 const subjectValue = subject.value.trim();
 const messageValue = message.value.trim();
 


 message.style.visibility="hidden";
  message.innerText="";
  message.style.visibility="visible";



 if(fnameValue === "") { 
let parent=fname.parentElement;
let message=parent.querySelector("small");
message.style.visibility="visible";
message.innerText=" can't be ampty";
 } else {
  let parent=fname.parentElement;
  let message=parent.querySelector("small");
  message.style.visibility="hidden";
  message.innerText="";
  isFormValid = true;
 }

 if(emailValue === "") {
  let parent=email.parentElement;
  let message=parent.querySelector("small");
  message.style.visibility="visible";
  message.innerText="can't be ampty";
   } else {
    let parent=email.parentElement;
    let message=parent.querySelector("small");
    message.style.visibility="hidden";
    message.innerText="";
    isFormValid = true;
}

if(subjectValue === "") {
  let parent=subject.parentElement;
  let message=parent.querySelector("small");
  message.style.visibility="visible";
  message.innerText="can't be ampty";
   } else {
    let parent=subject.parentElement;
    let message=parent.querySelector("small");
    message.style.visibility="hidden";
    message.innerText="";
    isFormValid = true;
}
 if(messageValue === "") {
  //let parent=message.parentElement;
  //let message=parent.querySelector("small");
  message.style.visibility="visible";
  message.innerText="";
  
   } else {
   // let parent=message.parentElement;
   // let message=parent.querySelector("small");
    message.style.visibility="visible";
    message.innerText="";
  isFormValid = true;
 }

}

function setErrorfor(input, message) {
  const formControl = input.parentElement;
  const formControler = input.parentElement;
  const small = document.getElementById('small');

  small.innerText = message;

  formControl.className = 'form-control error';
  formControler.className = 'form-control success';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
name.addEventListener('input', () => {
checkInputs();
});


email.addEventListener('input', () => {
checkInputs();
});

subject.addEventListener('input', () => {
  checkInputs();
  });


    