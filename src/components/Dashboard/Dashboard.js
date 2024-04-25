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
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Statistics</h2>
                    <ul>
                        <li>Total Income: {statistics.totalIncome}</li>
                        <li>Total Expenses: {statistics.totalExpenses}</li>
                        <li>Net Profit: {statistics.netProfit}</li>
                        <li>Number of Invoices: {statistics.numInvoices}</li>
                        <li>Number of Payments Received: {statistics.numPaymentsReceived}</li>
                        <li>Tax Deductions: {statistics.taxDeductions}</li>
                        <li>Social Security Contributions: {statistics.socialSecurityContributions}</li>
                        <li>Business Growth Rate: {statistics.businessGrowthRate}</li>
                        <li>Average Monthly Income: {statistics.averageMonthlyIncome}</li>
                        <li>Profit Margin: {statistics.profitMargin}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
