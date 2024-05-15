// EmployeeList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('https://emp-server-zzrg.onrender.com/employees').then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://emp-server-zzrg.onrender.com/employees/${id}`);
      setEmployees(employees.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
   <div className='backdiv'>
      <div className='container'>
        <h2>Employee List</h2>
        <Link to="/AddEmployee">
          <button className="btn-add">Add Employee</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.username}</td>
                <td>{emp.email}</td>
                <td>{emp.status}</td>
                <td>
                  <Link to={`/edit/${emp.id}`}>
                    <button className='editbtn'>Edit</button>
                    
                  </Link>
                  <button className='deletebtn' onClick={() => handleDelete(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   </div>
  );
};

export default EmployeeList;
