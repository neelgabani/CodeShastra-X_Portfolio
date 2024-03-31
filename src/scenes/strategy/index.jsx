import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios via npm or yarn
import AllocationItem from './AllocationItem'; // Assuming AllocationItem is in the same directory

const Dashboard = () => {
  const [allocations, setAllocations] = useState([]);

  useEffect(() => {
    // Function to fetch the portfolio allocations
    const fetchAllocations = async () => {
      try {
        // Replace '/api/allocations' with the actual API endpoint that returns the allocation data
        const response = await axios.get('/api/allocations');
        setAllocations(response.data.topAllocations); // Assuming the response has a topAllocations field
      } catch (error) {
        console.error('Error fetching allocations:', error);
      }
    };

    fetchAllocations();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Top 3 Allocations</h3>
        {allocations.map((item, index) => (
          <AllocationItem key={index} name={item.sector} allocation={`${item.allocation * 100}%`} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
