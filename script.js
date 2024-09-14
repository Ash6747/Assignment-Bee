document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailValue = emailInput.value.trim();

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        errorMessage.textContent = "Email field cannot be empty.";
        emailInput.style.borderColor = "red";
    } else if (!emailPattern.test(emailValue)) {
        errorMessage.textContent = "Please enter a valid email address.";
        emailInput.style.borderColor = "red";
    } else {
        errorMessage.textContent = "";
        emailInput.style.borderColor = "green";
        // Here you can proceed with form submission or further processing
        alert("Subscribed successfully!");
    }
});
