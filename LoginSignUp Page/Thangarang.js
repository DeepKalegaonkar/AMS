const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const createAccountLink = document.getElementById('create-account-link');
const signupSubmitBtn = document.getElementById('signup-submit');
const verificationMessage = document.getElementById('verification-message');
const verificationCodeInput = document.getElementById('verification-code-input');
const verifySubmitBtn = document.getElementById('verify-submit');
const successMessage = document.getElementById('success-message');
const passwordInput = document.getElementsByName('password')[0];
const aadharInput = document.getElementsByName('aadhar')[0];
const addressInput = document.getElementsByName('address')[0];

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
  const password = passwordInput.value;
  const address = addressInput.value;
  const phone = document.getElementsByName('phone')[0].value;
  const aadhar = aadharInput.value;
  const userType = document.getElementById('user-type').value;
  
  if (!fullname || !email || !password || !address || !phone || !aadhar || !userType) {
    alert('Please fill in all the details.');
    return;
  }
  
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }
  
  if (aadhar.length !== 12) {
    alert('Aadhar number must be exactly 12 characters long.');
    return;
  }

  verificationMessage.innerText = "A verification mail has been sent to your email.";
  setTimeout(function() {
    verificationMessage.style.display = 'block';
    verificationCodeInput.style.display = 'block';
    verifySubmitBtn.style.display = 'block';
  }, 2000);
}); // Display after 2 seconds
  
function clearVerificationElements() {
  verificationMessage.style.display = 'none';
  verificationCodeInput.style.display = 'none';
  verifySubmitBtn.style.display = 'none';
}

// Event listeners to clear verification-related elements on input field focus out
const inputFields = document.querySelectorAll('#signup-form input:not(#verification-code)');
inputFields.forEach(function(inputField) {
  inputField.addEventListener('input', function() {
    successMessage.style.display = 'none';
  });
});
  
verifySubmitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const verificationCode = document.getElementById('verification-code').value;
  const simulatedVerificationCode = '1234'; // Simulated verification code
  
  if (verificationCode === simulatedVerificationCode) {
    verificationMessage.style.display = 'none';
    verificationCodeInput.style.display = 'none';
    successMessage.style.display = 'block';
    successMessage.innerText = "Account Verified!";
  } else {
    alert('Invalid OTP. Please try again.');
  }
});
