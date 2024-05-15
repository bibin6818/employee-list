// src/components/DeleteEmployee.jsx

import React from 'react';
import axios from 'axios';

const DeleteEmployee = ({ match, history }) => {
  const employeeId = match.params.id;

  const handleDelete = async () => {
    try {
      await axios.delete(`https://emp-server-zzrg.onrender.com/employees/${employeeId}`);
      history.push('/'); // Redirect to employee list
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <p>Are you sure you want to delete this employee?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteEmployee;
