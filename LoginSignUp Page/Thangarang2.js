const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const createAccountLink = document.getElementById('create-account-link');
const signupSubmitBtn = document.getElementById('signup-submit');
const verificationMessage = document.getElementById('verification-message');
const verificationCodeInput = document.getElementById('verification-code-input');
const verifySubmitBtn = document.getElementById('verify-submit');
const successMessage = document.getElementById('success-message');

loginForm.style.display = 'none'; 

loginLink.addEventListener('click', function() {
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

createAccountLink.addEventListener('click', function(event) {
  event.preventDefault();
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
});

signupSubmitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  

  const fullname = document.getElementsByName('fullname')[0].value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementsByName('password')[0].value;
  const address = document.getElementsByName('address')[0].value;
  const phone = document.getElementsByName('phone')[0].value;
  const aadhar = document.getElementsByName('aadhar')[0].value;
  const userType = document.getElementById('user-type').value;
  
  if (!fullname || !email || !password || !address || !phone || !aadhar || !userType) {
    alert('Please fill in all the details.');
    return;
  }
  
  
  verificationMessage.innerText = "A verification mail has been sent to your email.";
  verificationMessage.style.display = 'block';
  verificationCodeInput.style.display = 'block';
});

verifySubmitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const verificationCode = document.getElementById('verification-code').value;
  if (verificationCode === '1234') {
    verificationMessage.style.display = 'none';
    verificationCodeInput.style.display = 'none';
    successMessage.style.display = 'block';
  } else {
    alert('Invalid OTP. Please try again.');
  }
});
