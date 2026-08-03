const output = document.getElementById("storedData");
const sessionUser = document.getElementById("sessionUser");

// Save Feedback
function saveFeedback() {

    // Get values entered by the user
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value;

    // Error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const courseError = document.getElementById("courseError");
    const feedbackError = document.getElementById("feedbackError");

    // Clear previous error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    courseError.innerHTML = "";
    feedbackError.innerHTML = "";

    let valid = true;

    // Name Validation
    if (name == "") {
        nameError.innerHTML = "Please enter your name.";
        valid = false;
    }
    else if (name.length < 3) {
        nameError.innerHTML = "Name must contain at least 3 characters.";
        valid = false;
    }

    // Email Validation
    if (email == "") {
        emailError.innerHTML = "Please enter email.";
        valid = false;
    }
    else if (!email.includes("@") || !email.includes(".")) {
        emailError.innerHTML = "Enter a valid email.";
        valid = false;
    }

    // Course Validation
    if (course == "") {
        courseError.innerHTML = "Please select a course.";
        valid = false;
    }

    // Feedback Validation
    if (feedback == "") {
        feedbackError.innerHTML = "Please enter feedback.";
        valid = false;
    }

    // Store data only if validation is successful
    if (valid) {

        // Store in Local Storage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("course", course);
        localStorage.setItem("feedback", feedback);

        // Store only name in Session Storage
        sessionStorage.setItem("currentUser", name);

        // Display stored data
        showFeedback();

        // Clear the form
        document.getElementById("feedbackForm").reset();
    }
}

// Display stored data
function showFeedback() {

    // Read Local Storage
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const course = localStorage.getItem("course");
    const feedback = localStorage.getItem("feedback");

    // Read Session Storage
    const currentUser = sessionStorage.getItem("currentUser");

    let message = "";

    // Check Local Storage
    if (name !== null) {

        message += "<b>Name :</b> " + name + "<br>";
        message += "<b>Email :</b> " + email + "<br>";
        message += "<b>Course :</b> " + course + "<br>";
        message += "<b>Feedback :</b> " + feedback;

    } else {

        message += "No feedback stored.";
    }

    output.innerHTML = message;

    // Check Session Storage
    if (currentUser !== null) {

        sessionUser.innerHTML = "Current Session User: " + currentUser;

    } else {

        sessionUser.innerHTML = "";
    }
}

// Delete Stored Data
function deleteData() {

    // Remove Local Storage
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("course");
    localStorage.removeItem("feedback");

    // Remove Session Storage
    sessionStorage.removeItem("currentUser");

    output.innerHTML = "No feedback stored.";
    sessionUser.innerHTML = "";
}

// Remove error messages automatically
document.getElementById("name").oninput = function () {
    document.getElementById("nameError").innerHTML = "";
};

document.getElementById("email").oninput = function () {
    document.getElementById("emailError").innerHTML = "";
};

document.getElementById("course").onchange = function () {
    document.getElementById("courseError").innerHTML = "";
};

document.getElementById("feedback").oninput = function () {
    document.getElementById("feedbackError").innerHTML = "";
};

// Display stored data when page loads
showFeedback();