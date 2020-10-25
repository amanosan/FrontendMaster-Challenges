const form = document.getElementById("form")

form.addEventListener("submit", e => {
    e.preventDefault();
    const firstName = form['firstName'].value;
    const lastName = form['lastName'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(firstName === '') {
        addErrorTo('firstName', "First name cannot be empty");
    } else {
        removeErrorFrom('firstName');
    }

    if(lastName === '') {
        addErrorTo('lastName', "Last name cannot be empty");
    } else {
        removeErrorFrom('lastName');
    }

    if(!validateEmail(email)) {
        addErrorTo('email', "Looks like this is not an email");
    } else {
        removeErrorFrom('email');
    }

    if(password === '') {
        addErrorTo('password', "Password cannot be empty");
    } else {
        removeErrorFrom('password');
    }
})

function addErrorTo(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    formControl.classList.add('email-error');
    if (field === 'email') {
        formControl.querySelector('input').setAttribute('placeholder', 'email@example.com');
    } else {
        formControl.querySelector('input').setAttribute('placeholder', '');
    }
    formControl.querySelector('img').style.opacity = "1";
    const warning = formControl.querySelector('small');
    warning.innerText = message;
    warning.style.opacity = "1";
}

function removeErrorFrom(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
    formControl.querySelector('img').style.opacity = "0";
    const warning = formControl.querySelector('small');
    warning.style.opacity = "0";
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}