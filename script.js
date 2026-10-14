const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if (!email || password.length < 6) {
    message.textContent = 'Enter a valid email and a password with at least 6 characters.';
    return;
  }
  message.textContent = 'Demo only: inputs look valid. No account was signed in.';
});
