function validate() {
    //check that from is not empty. if it is, then display error message and do not submit the form.
    if (document.sendEmail.from.value == "") {
        alert('Your email adderss is required.');
        document.sendEmail.from.focus();
        return false;
    }
    //check that a subject is selected if it is not, then display error message and do not submit the form.
    else if (document.sendEmail.subject.value == "-1") {
        alert('Please select the subject of your email.');
        document.sendEmail.subject.focus();
        return false;
    }
    //check that firstname is not empty if it is, then display error message and do not submit the form.
    else if (document.sendEmail.firstname.value == "") {
        alert('Please enter your first name.');
        document.sendEmail.firstname.focus();
        return false;
    }
    //check that lastname is not empty if it is, then display error message and do not submit the form.
    else if (document.sendEmail.lastname.value == "") {
        alert('Please enter your last name.');
        document.sendEmail.lastname.focus();
        return false;
    }
    //display a thank you message after form is sent
    else {
        alert('Thanks for your feedback!');
        return (true);
    }
}
