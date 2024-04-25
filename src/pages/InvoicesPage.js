 
import React from 'react';
import Invoices from '../components/Dashboard/Invoices';

const InvoicesPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Invoices</h1>
            <Invoices />
        </div>
    );
};

export default InvoicesPage;
