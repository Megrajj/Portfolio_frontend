// src/components/ContactForm.js
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setResponseMessage(data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setResponseMessage('There was an error sending your message.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Get In Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                    required
                />

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                    required
                />

                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 resize-none h-32"
                    required
                ></textarea>
                  <button 
                    type="submit" 
                    disabled={isSubmitting} // Disable button during submission
                    className={`w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-purple-600 hover:to-blue-600'} transition duration-300`}
                >
                    <FiSend className="text-xl" />
                    {isSubmitting ? 'Sending...' : 'Send Message'} {/* Change text based on submission state */}
                </button>

                {/* Response Message */}
                {responseMessage && (
                    <p className="mt-4 text-center text-sm text-gray-600">{responseMessage}</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;

   