import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [statistics, setStatistics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardStatistics = async () => {
            try {
                // Fetch user data from localStorage
                const user = JSON.parse(localStorage.getItem('user'));
                if (!user || !user.user_id) {
                    console.error('User data or user ID not found in local storage');
                    return;
                }

                // Fetch dashboard statistics using the backend API
                const response = await axios.get(`http://localhost:3001/api/dashboard/${user.user_id}`);
                console.log(response.data);
                setStatistics(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching dashboard statistics:', error);
                setLoading(false);
            }
        };

        fetchDashboardStatistics();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
            {!loading && statistics && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Statistics</h2>
                    <div className="flex flex-wrap">
                        <StatisticBox label="Total Income" value={statistics.total_income} color="#FFD700" />
                        <StatisticBox label="Total Expenses" value={statistics.total_expenses} color="#FF6347" />
                        <StatisticBox label="Net Profit" value={statistics.net_profit} color="#00FF00" />
                        <StatisticBox label="Number of Invoices" value={statistics.num_invoices} color="#4682B4" />
                        <StatisticBox label="Number of Payments Received" value={statistics.num_payments_received} color="#20B2AA" />
                        <StatisticBox label="Tax Deductions" value={statistics.tax_deductions} color="#9370DB" />
                        <StatisticBox label="Social Security Contributions" value={statistics.social_security_contributions} color="#FFA500" />
                        <StatisticBox label="Business Growth Rate" value={statistics.business_growth_rate} color="#32CD32" />
                        <StatisticBox label="Average Monthly Income" value={statistics.avg_monthly_income} color="#8A2BE2" />
                        <StatisticBox label="Profit Margin" value={statistics.profit_margin} color="#FF69B4" />
                    </div>
                </div>
            )}
            {loading && <p>Loading...</p>}
            {!loading && !statistics && <p>No statistics available</p>}
        </div>
    );
};

const StatisticBox = ({ label, value, color }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 m-2 flex items-center">
            <p className="text-lg font-semibold mr-2">{label}</p>
            <p className="text-xl bg-gray-200 px-2 py-1 rounded-lg" style={{ backgroundColor: color }}>{value}</p>
        </div>
    );
};

export default Dashboard;
