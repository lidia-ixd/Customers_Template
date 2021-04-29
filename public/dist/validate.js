$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye-slash");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });
});



$("#show_hide_confirm_password a").on('click', function(event) {
    event.preventDefault();
    if ($('#show_hide_confirm_password input').attr("type") == "text") {
        $('#show_hide_confirm_password input').attr('type', 'password');
        $('#show_hide_confirm_password i').addClass("fa-eye-slash");
        $('#show_hide_confirm_password i').removeClass("fa-eye");
    } else if ($('#show_hide_confirm_password input').attr("type") == "password") {
        $('#show_hide_confirm_password input').attr('type', 'text');
        $('#show_hide_confirm_password i').removeClass("fa-eye-slash");
        $('#show_hide_confirm_password i').addClass("fa-eye");
    }
});

// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Retrieving the values of form elements 
var firstName = document.contactForm.firstName;
var lastName = document.contactForm.lastName;
var address1 = document.contactForm.address1;
var address2 = document.contactForm.address2;
var cityTown = document.contactForm.cityTown;
var state = document.contactForm.state;
var zip = document.contactForm.zip;
var phoneNumber = document.contactForm.phoneNumber;
var mobilePhone = document.contactForm.mobilePhone;
var emailAddress = document.contactForm.emailAddress;
var password = document.contactForm.password;
var confirmPassword = document.contactForm.confirmPassword;
var over18 = document.contactForm.over18;


// Defining error variables with a default value
var firstNameErr = lastNameErr = address1Err = address2Err = cityTownErr = stateErr = zipErr =
    phoneNumberErr = mobilePhoneErr = emailAddressErr = passwordErr = confirmPasswordErr = over18Err = true;

function valid(el, iconID) {
    el.style.border = "1px solid green";
    var elIcon = document.getElementById(iconID);
    elIcon.parentNode.style.border = "1px solid green";
    elIcon.style.color = "green";
    elIcon.classList.remove("fa-star");
    elIcon.classList.remove("fa-exclamation-triangle");
    elIcon.classList.add("fa-check");
}

function inValid(el, iconID) {
    el.style.border = "1px solid red";
    var elIcon = document.getElementById(iconID);
    elIcon.parentNode.style.border = "1px solid red";
    elIcon.style.color = "red";
    elIcon.classList.remove("fa-star");
    elIcon.classList.remove("fa-check");
    elIcon.classList.add("fa-exclamation-triangle");
}

// Validate first name
function validateFirstName() {

    if (firstName.value == "") {
        printError("firstNameErr", "Please enter your first name");
        inValid(firstName, "firstNameIcon");

    } else {
        var regex = /^[A-Z][a-z]*/;
        if (regex.test(firstName.value) === false) {
            printError("firstNameErr", "Please enter a valid first name");
            inValid(firstName, "firstNameIcon");
        } else {
            printError("firstNameErr", "");
            firstNameErr = false;
            valid(firstName, "firstNameIcon");
        }
    }
}


// Validate last name
function validateLastName() {
    if (lastName.value == "") {
        printError("lastNameErr", "Please enter your last name");
        inValid(lastName, "lastNameIcon");
    } else {
        var regex = /^[A-Z][a-z]*/;
        if (regex.test(lastName.value) === false) {
            printError("lastNameErr", "Please enter a valid last name");
            inValid(lastName, "lastNameIcon");
        } else {
            printError("lastNameErr", "");
            lastNameErr = false;
            valid(lastName, "lastNameIcon");
        }
    }
}



// Validate address 1
function validateAddress1() {
    if (address1.value == "") {
        address1Err = true;
        inValid(address1, "address1Icon");
        printError("address1Err", "Please enter address1");
    } else if (address1.value != "") {
        // Regular expression for basic address1 validation
        var regex = /[a-zA-Z0-9\s]+$/;
        var regex2 = /\bP(ost|ostal)?([ \.]*(O|0)(ffice)?)?([ \.]*Box)?\b/i;
        if (regex.test(address1.value) === false) {
            printError("address1Err", "Please enter a valid address1");
            inValid(address1, "address1Icon");
        } else if (regex2.test(address1.value)) {
            printError("address1Err", "Address can not be P.O. Box");
            inValid(address1, "address1Icon");
        } else {
            printError("address1Err", "");
            address1Err = false;
            valid(address1, "address1Icon");
        }
    }
}

// Validate Address 2
function validateAddress2() {
    if (address2.value == "") {
        printError("address2Err", "");
        address2Err = false;
        valid(address2, "address2Icon");
    } else if (address2.value != "") {
        // Regular expression for basic address2 validation
        var regex = /[a-zA-Z0-9\s]+$/;
        var regex2 = /\bP(ost|ostal)?([ \.]*(O|0)(ffice)?)?([ \.]*Box)?\b/i;
        if (regex.test(address2.value) === false) {
            printError("address2Err", "Please enter a valid address2");
            inValid(address2, "address2Icon");
        } else if (regex2.test(address2.value)) {
            printError("address2Err", "Address can not be P.O. Box");
            inValid(address2, "address2Icon");
        } else {
            printError("address2Err", "");
            address2Err = false;
            valid(address2, "address2Icon");
        }
    }
}


function validateCity() {
    // Validate city/town
    if (cityTown.value == "") {
        printError("cityTownErr", "Please enter your city/town");
        inValid(cityTown, "cityIcon");
    } else {
        // Regular expression for basic address validation
        var regex = /^[A-Z][a-z]*/; // ex: Farmingdale
        var regex2 = /^[A-Z][a-z]*\s[A-Z][a-z]*/; // ex: New York

        if ((regex.test(cityTown.value) || regex2.test(cityTown.value)) === false) {
            printError("cityTownErr", "Please enter a valid city/town");
            inValid(cityTown, "cityIcon");
        } else {
            printError("cityTownErr", "");
            cityTownErr = false;
            valid(cityTown, "cityIcon");
        }
    }
}

// Validate state
function validateState() {
    // Validate state
    if (state.value == "") {
        printError("stateErr", "Please select your state");
        inValid(state, "stateIcon");
    } else {
        printError("stateErr", "");
        stateErr = false;
        valid(state, "stateIcon");
    }
}

// Validate zip
function validateZip() {
    if (zip.value == "") {
        printError("zipErr", "Please enter your zip");
        inValid(zip, "zipIcon");
    } else {
        var regex = /^\d{5}$|^\d{5}-\d{4}$/; // ex: 38980 and 83900-8789               
        if (regex.test(zip.value) === false) {
            printError("zipErr", "Please enter a valid zip");
            inValid(zip, "zipIcon");
        } else {
            printError("zipErr", "");
            zipErr = false;
            valid(zip, "zipIcon");
        }
    }
}

// Validate phone number
function validatePhoneNumber() {
    if (phoneNumber.value == "") {
        printError("phoneNumberErr", "Please enter your phone number");
        inValid(phoneNumber, "phoneNumberIcon");
    } else {
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regex.test(phoneNumber.value) === false) {
            printError("phoneNumberErr", "Please enter a valid 10 digit phone number");
            inValid(phoneNumber, "phoneNumberIcon");
        } else {
            printError("phoneNumberErr", "");
            phoneNumberErr = false;
            valid(phoneNumber, "phoneNumberIcon");
        }
    }
}

// Validate mobile number
function validateMobilePhone() {
    if (mobilePhone.value == "") {
        printError("mobilePhoneErr", "Please enter your mobile number");
        inValid(mobilePhone, "mobilePhoneIcon");
    } else {
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regex.test(mobilePhone.value) === false) {
            printError("mobilePhoneErr", "Please enter a valid 10 digit mobile number");
            inValid(mobilePhone, "mobilePhoneIcon");
        } else {
            printError("mobilePhoneErr", "");
            mobilePhoneErr = false;
            valid(mobilePhone, "mobilePhoneIcon");
        }
    }

}

// Validate email address
function validateEmailAddress() {
    if (emailAddress.value == "") {
        printError("emailAddressErr", "Please enter your email address");
        inValid(emailAddress, "emailAddressIcon");
    } else {

        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(emailAddress.value) === false) {
            printError("emailAddressErr", "Please enter a valid email address");
            inValid(emailAddress, "emailAddressIcon");
        } else {
            printError("emailAddressErr", "");
            emailAddressErr = false;
            valid(emailAddress, "emailAddressIcon");
        }
    }
}

// Validate password
function validatePassword() {
    if (password.value == "") {
        printError("passwordErr", "Please enter your password");
        inValid(password, "passwordIcon");
    } else {
        if (password.value.length < 8) {
            printError("passwordErr", "Password Length should be greater than 8 characters.");
            inValid(password, "passwordIcon");
        } else if (password.value.length > 15) {
            printError("passwordErr", "Password Length should be less than or equal 15 characters.");
            inValid(password, "passwordIcon");
        } else if (/(?=.*[0-9])/.test(password.value) === false) {
            printError("passwordErr", "Password must contain a number.");
            inValid(password, "passwordIcon");
        } else
        if (/(?=.*[a-z])/.test(password.value) === false) {
            printError("passwordErr", "Password must contain a lower case letter.");
            inValid(password, "passwordIcon");
        } else
        if (/(?=.*[A-Z])/.test(password.value) === false) {
            printError("passwordErr", "Password must contain an upper case letter.");
            inValid(password, "passwordIcon");
        } else
        if (/(?=.*[!@#$%^&*()_,.?:{}|<>])/.test(password.value) === false) {
            printError("passwordErr", "Password must contain a special character.");
            inValid(password, "passwordIcon");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
            valid(password, "passwordIcon");
        }
    }
}

function validateConfirmPassword() {
    // Confirm password
    if (confirmPassword.value == "") {
        printError("confirmPasswordErr", "Please confirm your password");
        inValid(confirmPassword, "confirmPasswordIcon");
    } else {
        if (confirmPassword.value != password.value) {
            printError("confirmPasswordErr", "Password does not match.");
            inValid(confirmPassword, "confirmPasswordIcon");
        } else {
            printError("confirmPasswordErr", "");
            confirmPasswordErr = false;
            valid(confirmPassword, "confirmPasswordIcon");
        }
    }
}



// Defining a function to validate form 
function validateForm() {
    validateFirstName();
    validateLastName();
    validateAddress1();
    validateAddress2();
    validateCity();
    validateState();
    validateZip();
    validatePhoneNumber();
    validateMobilePhone();
    validateEmailAddress();
    validatePassword();
    validateConfirmPassword();

    if (!over18.checked) {
        printError("over18Err", "You must certify that you are over 18 years old.");
        return false;
    } else {
        printError("over18Err", "");
        over18Err = false;
    }


    // Prevent the form from being submitted if there are any errors
    if ((firstNameErr || lastNameErr || address1Err || address2Err || cityTownErr || stateErr ||
            zipErr || phoneNumberErr || mobilePhoneErr || emailAddressErr || passwordErr || confirmPasswordErr || over18Err) == true) {
        return false;
    } else {
        return true;
    }

};