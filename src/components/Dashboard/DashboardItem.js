 
// src/components/Dashboard/DashboardItem.js

import React from 'react';
import { Link } from 'react-router-dom';

function DashboardItem({ title, link }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <Link to={link} className="text-blue-500 hover:underline">View Details</Link>
    </div>
  );
}

export default DashboardItem;
