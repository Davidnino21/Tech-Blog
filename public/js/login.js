const loginForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value;
    const password = document.querySelector('#password-login').value;

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

const signupForm = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value;
    const password = document.querySelector('#password-signup').value;
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };



document.querySelector('.login-form')
.addEventListener('submit', loginForm)

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupForm);