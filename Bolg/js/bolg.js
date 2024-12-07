// document.getElementById("commentForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Your comment has been submitted!");
//   });

  

  document.getElementById("commentForm").addEventListener("submit", function (event) {
    let isValid = true;

    // Validate Name
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (!name.value.trim()) {
        nameError.style.display = "block";
        name.classList.add("is-invalid");
        isValid = false;
    } else {
        nameError.style.display = "none";
        name.classList.remove("is-invalid");
    }

    // Validate Email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.style.display = "block";
        email.classList.add("is-invalid");
        isValid = false;
    } else {
        emailError.style.display = "none";
        email.classList.remove("is-invalid");
    }

    // Validate Message
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value.trim().length < 10) {
        messageError.style.display = "block";
        message.classList.add("is-invalid");
        isValid = false;
    } else {
        messageError.style.display = "none";
        message.classList.remove("is-invalid");
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});


//////////////////////////////////////////
document.getElementById("subscribeForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = document.getElementById("subscribeEmail");
  const emailError = document.getElementById("emailError2");

  // Email Validation Pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate Email
  if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "block"; // Show error message
      emailInput.classList.add("is-invalid"); // Add invalid class for styling
  } else {
      emailError.style.display = "none"; // Hide error message
      emailInput.classList.remove("is-invalid"); // Remove invalid class
      alert("Subscription successful!"); // Success message (can be replaced by actual logic)
  }
});