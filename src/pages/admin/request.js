import React, { useEffect, useState } from 'react';

const Request = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/service-requests`);
        if (!response.ok) {
          throw new Error('Failed to fetch service requests');
        }
        const data = await response.json();
        setRequests(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.error('Error fetching service requests:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Requests</h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-blue-500"></span>
        </div>
      ) : error ? (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request._id} className="hover">
                  <td>{request.name}</td>
                  <td>{request.email}</td>
                  <td>{request.service}</td>
                  <td>{request.message}</td>
                  <td>{new Date(request.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Request;
