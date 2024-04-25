import React from 'react';
import Statistics from '../components/Dashboard/Statistics';
import RegulatoryUpdates from '../components/Dashboard/RegulatoryUpdates';
// import Notifications from '../components/Dashboard/Notifications';

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
            <div>
                <Statistics />
                {/* <RegulatoryUpdates /> */}
                {/* <Notifications /> */}
            </div>
        </div>
    );
};

export default Dashboard;
