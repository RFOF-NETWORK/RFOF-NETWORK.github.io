// Chat Box Funktionalität
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatContainer = document.getElementById('chat-container');

sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    const userMessage = document.createElement('p');
    userMessage.textContent = `User: ${message}`;
    chatContainer.appendChild(userMessage);
    chatInput.value = '';

    // Simulierte Antwort
    const aiResponse = document.createElement('p');
    aiResponse.textContent = 'PRAI: Das ist eine simulierte Antwort.';
    aiResponse.style.color = 'blue';
    chatContainer.appendChild(aiResponse);
  }
});

// Sandbox Funktionalität
const codeEditor = document.getElementById('code-editor');
const runBtn = document.getElementById('run-btn');
const outputFrame = document.getElementById('output-frame');

runBtn.addEventListener('click', () => {
  const userCode = codeEditor.value;
  outputFrame.srcdoc = userCode;
});
