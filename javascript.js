let password = document.getElementById('password');
let passwordConfirm = document.getElementById('password-confirm');

let textPassword = document.querySelector('.text1');
let textConfirmPassword = document.querySelector('.text2');

password.addEventListener('input', function(event) {
    const passwordValue = event.target.value;
    if (passwordValue.length < 8) {
        textPassword.textContent = 'Password must be at least 8 characters.';
        textPassword.style.color = 'red';
        password.style.borderColor = 'red';
    } else {
        textPassword.textContent = '';
        password.style.borderColor = 'rgb(5, 255, 5)';
    }
})

passwordConfirm.addEventListener('input', function(event) {
    const ConfirmValue = event.target.value;
    if (ConfirmValue !== password.value) {
        textConfirmPassword.textContent = '*Passwords do not match!';
        textConfirmPassword.style.color = 'red';
        passwordConfirm.style.borderColor = 'red';
    } else if (ConfirmValue === null || ConfirmValue.length < 8) {
        textConfirmPassword.style.color = 'red';
        passwordConfirm.style.borderColor = 'red';
    } else {
        textConfirmPassword.textContent = '';
        passwordConfirm.style.borderColor = 'rgb(5, 255, 5)';
    }
})