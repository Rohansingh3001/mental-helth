// Dummy user details for testing
const dummyUser = {
  email: 'testuser@example.com',
  password: 'Test@1234'
};

// Function to open the popup
function openPopup(type) {
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popup-title');

  if (type === 'signup') {
    popupTitle.textContent = 'Sign Up';
  } else {
    popupTitle.textContent = 'Sign In';
  }

  popup.classList.remove('hidden');
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
}

// Function to switch between Sign Up and Sign In
function switchPopup() {
  const popupTitle = document.getElementById('popup-title');
  const popupForm = document.getElementById('popup-form');

  if (popupTitle.textContent === 'Sign Up') {
    popupTitle.textContent = 'Sign In';
    popupForm.innerHTML = `
      <input type="email" id="login-email" placeholder="Email" required>
      <input type="password" id="login-password" placeholder="Password" required>
      <button type="button" class="btn-primary" onclick="validateLogin()">Sign In</button>
    `;
  } else {
    popupTitle.textContent = 'Sign Up';
    popupForm.innerHTML = `
      <input type="text" placeholder="Full Name" required>
      <input type="email" placeholder="Email" required>
      <input type="password" placeholder="Password" required>
      <input type="password" placeholder="Confirm Password" required>
      <button type="submit" class="btn-primary">Sign Up</button>
    `;
  }
}

// Function to validate login details
function validateLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email === dummyUser.email && password === dummyUser.password) {
    alert('Login successful! Welcome to Mansiksukh.');
    closePopup();
    window.location.href = 'dashboard.html'; // Redirect to the dashboard page
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

// Function for smooth scrolling to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Function to toggle hamburger menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle');
}
