import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Message from './Message';
import './App1.css';

const socket = io('http://localhost:5000'); // Replace with your server URL

function Mess() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      socket.emit('message', { text: inputValue });
      setInputValue('');
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic, e.g., send file to the server and broadcast to other clients
    console.log('File uploaded:', file);
  };

  const handleEmojiSelect = (emoji) => {
    setInputValue((prevValue) => prevValue + emoji.native);
  };

  const handleMention = (mentionedUser) => {
    setInputValue((prevValue) => prevValue + `@${mentionedUser} `);
  };

  const handlePreview = async () => {
    const urlRegex = /(http(s)?:\/\/[^\s]+)/g;
    const urls = inputValue.match(urlRegex);
    if (urls && urls.length > 0) {
      const url = urls[0]; // Assuming only one URL is present in the input
      const response = await fetch(url);
      const html = await response.text();
      setPreview(html);
    }
  };

  return (
    <div className="app">
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <div className="input-bar">
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type your message" />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <div className="sidebar">
        <input type="file" onChange={handleFileUpload} />
        <button onClick={handlePreview}>Preview</button>
        <div className="emoji-picker">
          {/* Emoji picker component */}
          {/* Implement your preferred emoji picker library or create your own */}
        </div>
        <div className="mention-suggestions">
          {/* Mention suggestions component */}
          {/* Implement your preferred mention suggestions library or create your own */}
        </div>
      </div>
      <div className="preview">
        {/* Display the preview HTML content */}
        {preview && <div dangerouslySetInnerHTML={{ __html: preview }} />}
      </div>
    </div>
  );
}

export default Mess;
