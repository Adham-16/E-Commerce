// document.querySelectorAll('.nav-item.dropdown').forEach(item => {
//     item.addEventListener('mouseover', () => {
//         item.querySelector('.mega-menu').style.display = 'block';
//     });
//     item.addEventListener('mouseleave', () => {
//         item.querySelector('.mega-menu').style.display = 'none';
//     });
// });

// document.getElementById("toggle-sidebar").addEventListener("click", function () {
//     document.getElementById("sidebar").classList.toggle("active");
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const sidebar = document.getElementById("sidebar");
//     const toggleSidebar = document.getElementById("toggle-sidebar");
//     const closeSidebar = document.getElementById("close-sidebar");

//     // Open sidebar when the toggle button is clicked
//     toggleSidebar.addEventListener("click", () => {
//         sidebar.classList.add("active");
//     });

//     // Close sidebar when the close button inside the sidebar is clicked
//     closeSidebar.addEventListener("click", () => {
//         sidebar.classList.remove("active");
//     });
// });

document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    const iframe = this.querySelector('iframe');
    iframe.src = iframe.src; // Reset the video source
});

$(document).ready(function () {
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

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


