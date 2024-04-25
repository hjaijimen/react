 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                // Fetch user data from localStorage
                const user = JSON.parse(localStorage.getItem('user'));
                if (!user || !user.user_id) {
                    console.error('User data or user ID not found in local storage');
                    return;
                }

                // Fetch invoices data using the backend API
                const response = await axios.get(`http://localhost:3001/api/invoices/${user.user_id}`);
                setInvoices(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching invoices:', error);
                setLoading(false);
            }
        };

        fetchInvoices();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Invoices</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2 className="text-xl font-semibold mb-2">List of Invoices</h2>
                    <ul>
                        {invoices.map(invoice => (
                            <li key={invoice.id}>
                                Invoice ID: {invoice.id} - Amount: {invoice.amount} - Due Date: {invoice.due_date}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Invoices;
