const form = document.getElementById('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const erroElement = document.getElementById('error');
const textarea  = document.getElementById('textarea');

form.addEventListener('submit', (e) => {
    let messages = []
    if (fname.value === '' || fname.value == null) {
        messages.push('name is required')
    }
    if (email.value === '' || email.value == null) {
        messages.push('email is required')
    }
    if (textarea.value === '' || textarea.value == null){
        messages.push('message is required')
    }
    if (messages.length > 0) {
     e.preventDefault()
     erroElement.innerText = messages.join(', ')
    }
  
})