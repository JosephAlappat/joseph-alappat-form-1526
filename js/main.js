let button = document.getElementById('btn');
let email = document.getElementById('email');
let firstname = document.getElementById('firstname');
let message = document.getElementById('message');

let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


function formValidation() {
    preventDefault();
    let userinput = {};
    let errors = [];


    firstname.value = firstname.value.trim();

    if (firstname.value) {
        userinput.user_name = firstname.value;
    } else {
        errors.push('Please give your Name');
    }


    email.value = email.value.trim();

    if (email.value) {
        if (pattern.test(email.value)) {
            userinput.user_email = email.value;
        } else {
            errors.push('Your Email is Invalid');
        }
    } else {
        errors.push('Please enter your email');
    }


    message.value = message.value.trim();

    if (message.value) {
        userinput.user_message = message.value;
    } else {
        errors.push('Please write a message');
    }


    console.log(userinput);


    if (errors == 0) {
        console.log('Form Submission Successful!');
        console.log(userinput.user_name);
        console.log(userinput.user_email);
        console.log(userinput.user_message);
    } else {
        console.log(errors);
    }



}

button.addEventListener('click', formValidation);
