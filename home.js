// dashboard.js

function openChatbot() {
    alert('Chatbot is under development. Stay tuned!');
  }
  
  function logout() {
    alert('You have logged out.');
    window.location.href = 'index.html';
  }
  
  function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
// Open and Close Chat
function openChat() {
  document.getElementById('chat-window').style.display = 'block';
}

function closeChat() {
  document.getElementById('chat-window').style.display = 'none';
}

// Send User Message
function sendUserMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();

  if (message !== '') {
    appendMessage('user', message);
    input.value = '';
    sendMessageToBot(message);
  }
}

// Handle Enter Key
function sendMessage(event) {
  if (event.key === 'Enter') {
    sendUserMessage();
  }
}

// Append Message to Chat Body
function appendMessage(sender, message) {
  const chatBody = document.getElementById('chat-body');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageDiv.textContent = message;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Send Message to Backend
async function sendMessageToBot(message) {
  try {
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    });
    const data = await response.json();
    appendMessage('bot', data.reply);
  } catch (error) {
    appendMessage('bot', 'Sorry, I am having trouble connecting right now.');
  }
}
  