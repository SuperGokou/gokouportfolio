const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const validateForm = () => {
  const isNameValid = nameInput.value.trim() !== '';
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  const isMessageValid = messageInput.value.trim() !== '';

  submitBtn.disabled = !(isNameValid && isEmailValid && isMessageValid);
};

[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', validateForm);
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.reset();
      submitBtn.disabled = true;
      document.getElementById('form-message').style.display = 'block';
    } else {
      alert('Error: Something went wrong.');
    }
  }).catch(() => {
    alert('Error: Submission failed.');
  });
});
