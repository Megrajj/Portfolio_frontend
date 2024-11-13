// src/components/Chatbot.js
import React, { useState } from 'react';
import './../styles/Chatbot.css'; // Optional: Create a CSS file for custom styles

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, user: true }]);
            generateResponse(input);
            setInput('');
        }
    };

    const generateResponse = (userInput) => {
        const lowercaseInput = userInput.toLowerCase();
        let botResponse;

        // Simple chatbot logic
        if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
            botResponse = 'Hello! How can I assist you today?';
        } else if (lowercaseInput.includes('project')) {
            botResponse = 'You can check my projects in the Portfolio section!';
        } else {
            botResponse = 'Thank you for your message! We will respond soon.';
        }

        setMessages((prev) => [...prev, { text: botResponse, user: false }]);
    };

    return (
        <div className="chatbot w-80 lg:w-96 fixed bottom-5 right-5 bg-white rounded-lg shadow-lg p-4 z-50">
            <h3 className="font-bold text-lg mb-2">Chat with Me!</h3>
            <div className="chat-window h-64 overflow-auto mb-2">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.user ? 'user-message' : 'bot-message'} mb-2`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex">
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    className="border rounded flex-grow p-2"
                />
                <button 
                    onClick={handleSend} 
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
