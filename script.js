function showMessage() {
    alert("Hi! I am learning HTML, CSS, and JavaScript.");
}
function validateForm() {
    let valid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    }

    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }

    return valid;
}




