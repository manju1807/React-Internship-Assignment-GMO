import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.phoneNumber && formData.email) {
      localStorage.setItem('userDetails', JSON.stringify(formData));
      navigate('/SecondPage');
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <div
      style={{
        height: '400px',
        width: '25%',
        display: 'grid',
        placeContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '5%',
        color: '#000',
        padding: '20px',
        borderRadius: '3px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1>User Information Form</h1>
      <form>
        <TextField
          label='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Phone Number'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin='normal'
        />
        <Button
          variant='contained'
          color='primary'
          onClick={handleSubmit}
          style={{ marginTop: '25px' }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FirstPage;
