// EditEmployee.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams(); // Get the employee ID from the URL

  const [employee, setEmployee] = useState({
    id: '',
    username: '',
    email: '',
    status: ''
  });

  useEffect(() => {
    // Fetch employee data by ID
    axios.get(`https://emp-server-zzrg.onrender.com/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://emp-server-zzrg.onrender.com/employees/${id}`, employee);
      // Redirect to employee list page or show success message
    } catch (error) {
      console.error('Error updating employee data:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={employee.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={employee.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={employee.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
