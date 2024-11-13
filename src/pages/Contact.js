// src/pages/Contact.js
import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-400 to-blue-600 text-white">
            <div className="py-16">
                <h2 className="text-4xl font-bold text-center">Contact Me</h2>
                <p className="mt-4 text-lg text-center">
                    I'd love to hear from you! Please fill out the form below or connect with me on social media.
                </p>

                {/* Wrap the ContactForm in a div with a gradient background */}
                <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
                    <ContactForm />
                </div>

                <div className="mt-8 text-center">
                    <h3 className="text-xl font-semibold">Connect with me:</h3>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                    </div>
                </div>
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default Contact;