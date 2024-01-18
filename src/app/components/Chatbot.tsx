"use client"

import React, { useState } from 'react';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setConversation([...conversation, userMessage]);

    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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` // Remplacez par votre clé API
      },
      body: JSON.stringify({
        prompt: input,
        max_tokens: 150
      }),
    });

    const data = await response.json();

    setConversation([...conversation, userMessage, { text: data.choices[0].text, sender: 'bot' }]);
    setInput('');
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black' }}>
        {conversation.map((message, index) => (
          <p key={index} style={{ textAlign: message.sender === 'bot' ? 'left' : 'right' }}>
            {message.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <button onClick={handleSendMessage}>Envoyer</button>
    </div>
  );
};

export default ChatBot;
