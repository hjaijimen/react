 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegulatoryUpdateComponent = () => {
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRegulatoryUpdates = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                if (!user || !user.user_id) {
                    console.error('User data or user ID not found in local storage');
                    return;
                }
                // Fetch regulatory updates data using the backend API
                const response = await axios.get(`http://localhost:3001/api/regulatory-updates/${user.user_id}`);
                setUpdates(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching regulatory updates:', error);
                setLoading(false);
            }
        };

        fetchRegulatoryUpdates();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Regulatory Updates</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2 className="text-xl font-semibold mb-2">List of Regulatory Updates</h2>
                    <ul>
                        {updates.map(update => (
                            <li key={update.id}>
                                Update ID: {update.id} - Update Text: {update.update_text} - Update Date: {update.update_date}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RegulatoryUpdateComponent;
