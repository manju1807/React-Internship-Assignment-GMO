import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import DepartmentsList from './DepartmentsList';
import DataGrids from './DataGrids';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userDetails');
    if (!storedUserDetails) {
      toast.error('Please fill the details!');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div
      style={{
        marginTop: '1%',
        display: 'flex',
        flexDirection: 'column',
        gap: 45,
        padding: 20,
      }}
    >
      <div style={{ height: 400, width: '100%' }}>
        <h3 style={{ marginBottom: 10 }}>Posts Table</h3>
        <DataGrids />
      </div>
      <div>
        <h3 style={{ marginBottom: 10 }}>Department List</h3>
        <DepartmentsList />
      </div>
    </div>
  );
};

export default SecondPage;
