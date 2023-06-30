import { authService } from '../services/authService.js';

export let loginForm;

function loginUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  authService.login(username, password)
    .then((response) => {
      if (response.status === 'success') {
        document.dispatchEvent(new CustomEvent('loginSuccess', { detail: response.data }));
      } else {
        document.dispatchEvent(new CustomEvent('loginFailure', { detail: response.message }));
      }
    })
    .catch((error) => {
      document.dispatchEvent(new CustomEvent('loginFailure', { detail: error.message }));
    });
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  loginUser();
});