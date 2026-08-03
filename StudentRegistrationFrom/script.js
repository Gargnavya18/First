const form = document.getElementById("registrationForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

const successMessage = document.getElementById("successMessage");

// Runs whenever the user types in the Name field
name.addEventListener("input", function () {

    console.log("Name:", name.value);

});


email.addEventListener("input", function () {

    console.log("Email:", email.value);

});


age.addEventListener("input", function () {

    console.log("Age:", age.value);

});


form.addEventListener("submit", function(event){
   
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if(name.value == ""){

        nameError.textContent = "Name is required";
        isValid = false;

    }

    if(email.value == ""){

        emailError.textContent = "Email is required";
        isValid = false;

    }
    else if(email.value.includes("@") == false){

        emailError.textContent = "Enter a valid email";
        isValid = false;

    }

    if(age.value == ""){

        ageError.textContent = "Age is required";
        isValid = false;

    }
    else if(age.value < 18){

        ageError.textContent = "Age must be 18 or above";
        isValid = false;

    }

    if(isValid){

        successMessage.textContent = "Registration Successful!";

        console.log("Name:", name.value);
        console.log("Email:", email.value);
        console.log("Age:", age.value);

        form.reset();

    }

});