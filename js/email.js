// Initialize SDK with public key
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "RdDYVyhoJvK-oIL_m"
  });
})();

// Get information from contact form and submit through EmailJS
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_4siblkc', 'template_mqly06e', this)
      .then(() => {
        console.log('SUCCESS!');
      }, (error) => {
        console.log('FAILED...', error);
      });
  });
}
