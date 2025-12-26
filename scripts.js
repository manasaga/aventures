// Simple contact form submit handler
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    form.reset();
});
