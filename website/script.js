document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! (Note: Form is not connected to a backend.)');
  this.reset();
});
