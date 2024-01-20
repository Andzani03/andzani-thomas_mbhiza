// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    const offsetTop = targetSection.offsetTop;
    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
  
      // Simulate login validation (replace with actual validation)
      if (email === "user@example.com" && password === "password") {
        alert("Login successful!");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("signup-email").value;
      const phone = document.getElementById("signup-phone").value;
      const firstname = document.getElementById("signup-firstname").value;
      const lastname = document.getElementById("signup-lastname").value;
      const username = document.getElementById("signup-username").value;
      const password = document.getElementById("signup-password").value;
      const confirmPassword = document.getElementById("signup-confirm-password").value;
  
      // Simple form validation
      if (email && phone && firstname && lastname && username && password && confirmPassword) {
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
        } else {
          alert("Sign-up successful!");
        }
      } else {
        alert("Please fill in all the required fields.");
      }
    });
  });
  
// No additional JavaScript is required for the About Us page in this example
// The smooth scrolling functionality from the previous script.js will still apply
