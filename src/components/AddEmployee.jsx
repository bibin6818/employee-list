// src/components/AddEmployee.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './AddEmployee.css'; // Import your custom CSS file (if you have one)

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: '',
    username: '',
    email: '',
    status: 'active', // Default status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://emp-server-zzrg.onrender.com/employees', employee);
      // Handle success (e.g., show a success message)
      // Redirect to employee list page or other desired page
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">Employee ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={employee.id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={employee.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={employee.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
