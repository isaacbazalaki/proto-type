const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const heading = document.querySelector('h1');
const headingTwo = document.querySelector('h2');
const header = document.querySelector('header')

myForm.addEventListener('submit', onSubmit);

function onSubmit (e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}



heading.textContent = 'Phonebook';
headingTwo.innerHTML = '<h3>Add Contact</h3>';

const errorMessage = document.querySelector('.msg');
errorMessage.style.color = 'black';
myForm.style.background = '#ccc'
header.style.background = '#ccc'

