// Get the toggle button and navbar
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Toggle classes on click
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navbar.classList.toggle('active');
});
// Initialize EmailJS with your public key
(function() {
    emailjs.init("D3x-YxfvgaayEP5oo");  // Your public key from EmailJS
  })();
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    
    // Send the form data using EmailJS
    emailjs.sendForm('service_5j8sjyp', 'template_s6s80sm', form)
      .then(function(response) {
        alert('Message sent successfully!');
      }, function(error) {
        alert('Failed to send message: ' + error);
      });
  });
  
