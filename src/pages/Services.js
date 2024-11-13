import React, { useState } from 'react';
import { FiGlobe, FiCode, FiMessageSquare } from 'react-icons/fi'; // Icons for services
import Footer from "../components/Footer";

const Services = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        details: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/service-requests`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        if (response.ok) {
            alert('Request submitted successfully!');
            setFormData({ name: '', email: '', service: '', details: '' });
        } else {
            alert('Failed to submit request.');
        }
    };

    return (
      <div>
        <div className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
            <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">My Services</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Service Cards */}
                <ServiceCard
                    icon={<FiGlobe className="text-blue-500 w-10 h-10 mb-3"/>}
                    title="Web Development"
                    description="Building responsive and functional websites tailored to your needs."
                />
                <ServiceCard
                    icon={<FiCode className="text-blue-500 w-10 h-10 mb-3"/>}
                    title="Front-End Design"
                    description="Creating visually appealing user interfaces that enhance user experience."
                />
                <ServiceCard
                    icon={<FiMessageSquare className="text-blue-500 w-10 h-10 mb-3"/>}
                    title="Consultation Services"
                    description="Offering advice on digital solutions and technology strategy to maximize your potential."
                />
            </div>
            
            {/* Request Form */}
           
            <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Request a Service</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required 
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required 
                    />
                    <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleChange} 
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    >
                        <option value="">Select a Service</option>
                        <option value="Database Development">Database Development</option>
                        <option value="Front-End Development">Front-End Development</option>
                        <option value="Back-End Development">Back-End Development</option>
                        <option value="Full-Stack Development">Full-Stack Development</option>
                    </select>
                    <textarea 
                        name="details" 
                        placeholder="Details about your project"
                        value={formData.details} 
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-32 resize-none"
                        required
                    ></textarea>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition duration-300">Submit Request</button>
                </form>
            </div>
            </div>
              {/* Footer */}
    <Footer />
    </div>
  
    );
};

const ServiceCard = ({ icon, title, description }) => (
    <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold text-blue-800 mt-2 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default Services;
