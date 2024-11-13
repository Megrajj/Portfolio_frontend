import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/service-requests`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRequests(data);
                setLoading(false); // Set loading to false
            } catch (error) {
                console.error('Error fetching service requests:', error);
                setError(error);
                setLoading(false); // Set loading to false
            }
        };

        fetchRequests();
    }, []);

    return (
        <div className="py-16 bg-white">
            <h2 className="text-3xl font-bold text-center text-gray-800">Service Requests</h2>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">Failed to load requests. Please try again later.</p>
            ) : (
                <div className="max-w-2xl mx-auto mt-8">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">Name</th>
                                <th className="border border-gray-300 p-2">Email</th>
                                <th className="border border-gray-300 p-2">Service</th>
                                <th className="border border-gray-300 p-2">Details</th>
                                <th className="border border-gray-300 p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request) => (
                                <tr key={request._id}>
                                    <td className="border border-gray-300 p-2">{request.name}</td>
                                    <td className="border border-gray-300 p-2">{request.email}</td>
                                    <td className="border border-gray-300 p-2">{request.service}</td>
                                    <td className="border border-gray-300 p-2">{request.details}</td>
                                    <td className="border border-gray-300 p-2">{new Date(request.createdAt).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Admin;
